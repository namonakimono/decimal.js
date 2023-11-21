"use strict";

import Decimal from './decimal.mjs';

const isUnhandledVal = (v) => [null, NaN, Infinity, -Infinity, undefined].includes(v);

// console.log((new Decimal('123')).toString())

const isNumStr = (str) => /^[-+]?\d+(\.\d+)?$/.test(str) ||
  ['NaN', 'Infinity', '-Infinity'].includes(str);

const opMap = {
  add: (x, y) => x + y,
  plus: (x, y) => x + y,
  minus: (x, y) => x - y,
  times: (x, y) => x * y,
  dividedBy: (x, y) => x / y,
  modulo: (x, y) => x % y,
  // 危险，不能冒然修改成 ===
  equals: (x, y) => x == y,
  // 危险，不能冒然修改成 !==
  notEqual: (x, y) => x != y,
  greaterThan: (x, y) => x > y,
  greaterThanOrEqual: (x, y) => x >= y,
  lessThan: (x, y) => x < y,
  lessThanOrEqual: (x, y) => x <= y,
};

export class NaslDecimal extends Decimal {
  __val;

  constructor(arg) {
    if (isUnhandledVal(arg)) {
      throw new Error(`Unhandled value: ${arg}`);
    } else {
      super(arg);
      this.__val = super.valueOf();
    }
  }

  valueOf() {
    return this.__val;
  }

  toString() {
    return this.__val;
  }
}

export function createNaslDecimal(val) {
  try {
    return interceptMethodCalls(new NaslDecimal(val));
  } catch (e) {
    return val;
  }
}


function interceptMethodCalls(obj) {
  return new Proxy(obj, {
    get(target, prop) { // (A)
      if (typeof target[prop] === 'function') {
        return new Proxy(target[prop], {
          apply: (target, thisArg, argList) => { // (B)
            if (!opMap[prop]) {
              return Reflect.apply(target, thisArg, argList);
            }

            const objNum = Number(obj.toString());
            const arg0 = argList[0];
            const rhs = typeof arg0 === 'string' && isNumStr(arg0) ? eval(arg0) : arg0;
            const jsBuiltInOpRes = opMap[prop](objNum, rhs);
            // console.log('🐔🐔🐔🐔🐔')
            // console.log(jsBuiltInOpRes)

            if (isUnhandledVal(jsBuiltInOpRes)) {
              return jsBuiltInOpRes;
            }

            if (rhs === null || rhs === 'null') {
              argList[0] = 0;
            }
            return Reflect.apply(target, thisArg, argList);
          }
        });
      } else {
        return Reflect.get(target, prop);
      }
    }
  });
}


// console.log('❀❀❀❀❀❀❀❀❀❀❀')
// console.log(createNaslDecimal('123'))
// console.log(createNaslDecimal(undefined))
// console.log('❀❀❀❀❀❀❀❀❀❀❀')

// let myObj = createNaslDecimal('111');

// const handleMethodCall = (fnName, fnArgs) => {
//   console.log(`${fnName} called with `, fnArgs);
// }

// myObj.dividedBy('222');console.log(myObj.plus(null));
// console.log(myObj.plus(null));
// console.log(myObj.plus(undefined));
// console.log(myObj.plus('null'));
// console.log(myObj.plus('undefined'));


// // let a = new Decimal('123000.789')
// // console.log(a.precision(true))

// // let b = new Decimal('456000.789')
// // console.log(b.truncated())
// // console.log(b.truncated().precision(true))

// function intPartDigits(x) {
//     return x.truncated().precision(true)
// }

// function decPartDigits(x) {
//     return x.dp()
// }
