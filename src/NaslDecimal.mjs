"use strict";

import Decimal from './decimal.js';

const toNumberIfPossible = (v) => {
  if (['null', 'NaN', 'Infinity', '-Infinity', 'undefined'].includes(v)) {
    // eval 风险可控
    return eval(v);
  }
  if ([null, NaN, Infinity, -Infinity, undefined].includes(v)) {
    return v;
  }
  return Number(v);
}

const isWrapperUnhandledVal = (v) =>
  [NaN, Infinity, -Infinity, undefined,
  'NaN', 'Infinity', '-Infinity', 'undefined'].includes(v);

const isNumStr = (str) => /^[-+]?\d+(\.\d+)?$/.test(str);

const opMap = {
  add: (x, y) => x + y,
  minus: (x, y) => x - y,
  times: (x, y) => x * y,
  dividedBy: (x, y) => x / y,
  modulo: (x, y) => x % y,
  // 危险，不能冒然修改成 ===
  equals: (x, y) => x == y,
  // 危险，不能冒然修改成 !==
  notEqual: (x, y) => x != y,
  greaterThan: (x, y) => x > y,
  greaterThanOrEqualTo: (x, y) => x >= y,
  lessThan: (x, y) => x < y,
  lessThanOrEqualTo: (x, y) => x <= y,
};

// 不兼容字符串加法
export class NaslDecimal extends Decimal {
  __val; // 字符串或 null undefined 等特殊值

  constructor(arg) {
    let trueVal;
    if (arg instanceof NaslDecimal || arg instanceof Decimal) {
      trueVal = arg.__val
    } else if(isNumStr(arg) || isWrapperUnhandledVal(arg)) {
      trueVal = eval(arg);
    } else {
      trueVal = arg;
    }

    if (trueVal === null || trueVal === 'null') {
      super('0');
      this.__val = null;
    } else if (isWrapperUnhandledVal(trueVal)) {
      super('0');
      this.__val = trueVal;
    } else {
      super(trueVal);
      this.__val = super.valueOf();
    }
  }

  add(v) {
    if (this.isEssentiallyNull(this)) {
      return v;
    }
    if (this.isEssentiallyNull(v)) {
      return this;
    }
    return super.add(v);
  }

  minus(v) {
    if (this.isEssentiallyNull(this)) {
      return createNaslDecimal(v).neg();
    }
    if (this.isEssentiallyNull(v)) {
      return this;
    }
    return super.minus(v);
  }

  times(v) {
    if (this.isEssentiallyNull(this) || this.isEssentiallyNull(v)) {
      return createNaslDecimal('0');
    }
    return super.times(v);
  }

  dividedBy(v) {
    if (this.isEssentiallyNull(this)) {
      return createNaslDecimal('0');
    }
    if (this.isEssentiallyNull(v)) {
      return this.isNeg() ? createNaslDecimal('-Infinity') : createNaslDecimal('Infinity');
    }
    return super.dividedBy(v);
  }

  modulo(v) {
    if (this.isEssentiallyNull(this)) {
      return createNaslDecimal('0');
    }
    if (this.isEssentiallyNull(v)) {
      return createNaslDecimal('NaN');
    }
    return super.modulo(v);
  }

  equals(v) {
    // throw new Error('equals')
    if (this.isEssentiallyNull(this)) {
      return this.isEssentiallyNull(v);
    }
    if (this.isEssentiallyNull(v)) {
      return this.isEssentiallyNull(this);
    }
    return super.equals(v);
  }

  notEqual(v) {
    return !this.equals(v);
  }

  greaterThan(v) {
    if (this.isEssentiallyNull(this)) {
      return createNaslDecimal('0').greaterThan(v);
    }
    if (this.isEssentiallyNull(v)) {
      return this.greaterThan(createNaslDecimal('0'));
    }
    return super.greaterThan(v);
  }

  greaterThanOrEqualTo(v) {
    if (this.isEssentiallyNull(this)) {
      return createNaslDecimal('0').greaterThanOrEqualTo(v);
    }
    if (this.isEssentiallyNull(v)) {
      return this.greaterThanOrEqualTo(createNaslDecimal('0'));
    }
    return super.greaterThanOrEqualTo(v);
  }

  lessThan(v) {
    if (this.isEssentiallyNull(this)) {
      return createNaslDecimal('0').lessThan(v);
    }
    if (this.isEssentiallyNull(v)) {
      return this.lessThan(createNaslDecimal('0'));
    }
    return super.lessThan(v);
  }

  lessThanOrEqualTo(v) {
    if (this.isEssentiallyNull(this)) {
      return createNaslDecimal('0').lessThanOrEqualTo(v);
    }
    if (this.isEssentiallyNull(v)) {
      return this.lessThanOrEqualTo(createNaslDecimal('0'));
    }
    return super.lessThanOrEqualTo(v);
  }

  toString() {
    return String(this.__val);
  }

  valueOf() {
    return this.__val;
  }

  toJSON() {
    return String(this.__val);
  }

  toNumber() {
    return toNumberIfPossible(this.__val);
  }

  get [Symbol.toStringTag]() {
    return 'NaslDecimal';
  }

  isEssentiallyNull = (v) => {
    if (v === null || v === 'null') {
      return true;
    }
    if (v instanceof NaslDecimal) {
      return this.isEssentiallyNull(v.valueOf());
    }
    return false;
  };
}

export function createNaslDecimal(val) {
  return interceptMethodCalls(new NaslDecimal(val));
}

function interceptMethodCalls(obj) {
  return new Proxy(obj, {
    get(target, prop) { // (A)
      if (typeof target[prop] === 'function') {
        return new Proxy(target[prop], {
          apply: (target, thisArg, argList) => { // (B)
            // 任何 object 都有 valueOf 等方法，需要特殊处理
            if (['valueOf', 'toString'].includes(prop)) {
              return Reflect.apply(target, thisArg, argList);
            }
            // NaslDecimal 包装类未处理的方法，委托给父类
            if (!opMap[prop]) {
              return Reflect.apply(target, thisArg, argList);
            }

            const lhs = toNumberIfPossible(obj.__val);
            const rhs = toNumberIfPossible(getRHS(argList[0]));

            // 操作数出现 undefined NaN Infinity -Infinity 等值，委托给 js 原生 number 类处理，因为结果无精度可言
            if (isWrapperUnhandledVal(lhs) || isWrapperUnhandledVal(rhs)) {
              const jsBuiltInOpRes = opMap[prop](lhs, rhs);
              console.log('🐒', opMap[prop], lhs, rhs, typeof lhs, typeof rhs, jsBuiltInOpRes)
              return typeof jsBuiltInOpRes === 'boolean'
                ? jsBuiltInOpRes // 逻辑运算
                : createNaslDecimal(jsBuiltInOpRes); // 算数运算，结果仍为包装类
            }

            // 否则使用包装类的方法，确保结果的精度
            // console.log('🐔🐔🐔', prop, thisArg.valueOf(), target, util.inspect(argList))
            return Reflect.apply(target, thisArg, argList);
          }
        });
      } else {
        return Reflect.get(target, prop);
      }

      function getRHS(arg) {
        return arg instanceof NaslDecimal ? arg.__val : arg;
      }
    }
  });
}
