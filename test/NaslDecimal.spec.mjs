import {jest} from '@jest/globals';

import { createNaslDecimal as cnd, NaslDecimal } from '../NaslDecimal.mjs';


describe('global/app/packingType', () => {
    test('null 构造测试', () => {
        expect(cnd('1').add(null)).toEqual(cnd('1'));
        expect(cnd('null').add(cnd('1'))).toBe(1);
        expect(cnd('null')).toBe('null');
        expect(cnd(cnd('null'))).toBe('null');

        expect(cnd(null)).toBe(null);
        expect(cnd(cnd(null))).toBe(null);
    });

    test('undefined 构造测试', () => {
        expect(cnd('undefined')).toBe('undefined');
        expect(cnd(cnd('undefined'))).toBe('undefined');

        expect(cnd()).toBe(undefined)
        expect(cnd(cnd())).toBe(undefined)
        expect(cnd(cnd())).toBe(cnd());
    });

    test('NaN 构造测试', () => {
        expect(cnd(NaN)).toBe(NaN);
        expect(cnd('NaN').__val).toBe('NaN');
    });


    test('构造函数测试', () => {

        // expect(cnd(cnd('undefined'))).toEqual(cnd('undefined'));
        // expect(cnd('undefined').__str).toBe('undefined');

        // expect(new NaslLong(new NaslLong())).toEqual(new NaslLong());
        // expect(new NaslLong(new NaslLong('undefined'))).toEqual(new NaslLong());
        // expect(new NaslLong(new NaslLong('undefined'))).toEqual(new NaslLong('undefined'));
        // expect(new NaslLong(new NaslLong('undefined')).__str).toBe('undefined');


        // expect(cnd(cnd())).toEqual(cnd());
        // expect(cnd(cnd('null'))).toEqual(cnd());
        // expect(cnd(cnd('null'))).toEqual(cnd('null'));
        // expect(cnd('null').__str).toBe('null');

        // expect(new NaslLong(new NaslLong())).toEqual(new NaslLong());
        // expect(new NaslLong(new NaslLong('null'))).toEqual(new NaslLong());
        // expect(new NaslLong(new NaslLong('null'))).toEqual(new NaslLong('null'));
        // expect(new NaslLong(new NaslLong('null')).__str).toBe('null');

        // expect(naslAdd(new NaslLong('10'), '2')).toBe(12);
    });
    // test('binaryOperations', () => {
    //     // const errMsg = '除数不能为 0';

    //     // 不同类型运算
    //     expect(sExp('*', '10', '0.12', 'NaslLong', 'NaslDecimal')?.__str).toBe('1.20');
    //     expect(sExp('-', '10', '0.12', 'NaslLong', 'NaslDecimal')?.__str).toBe('9.88');
    //     expect(sExp('-', '10', '0.12', 'NaslLong', 'String')?.__str).toBe('9.88');
    //     expect(sExp('*', '10', '0.12', 'NaslLong', 'String')?.__str).toBe('1.20');

    //     // 同类型运算
    //     expect(sExp('/', '10', '2', 'NaslLong')?.__str).toBe('5');
    //     expect(sExp('/', '12', '12', 'NaslLong')?.__str).toBe('1');
    //     expect(sExp('/', '10', '3', 'NaslLong')?.__str).toBe('3.3333333333333333333');
    //     // expect(() => sExp('/', '1', '0', 'NaslLong')).toThrow(errMsg);
    //     // expect(() => sExp('/', '-0', '0', 'NaslLong')).toThrow(errMsg);
    //     // expect(() => sExp('%', '0', '0', 'NaslLong')).toThrow(errMsg);

    //     expect(sExp('/', '10', '2', 'NaslLong', 'String')?.__str).toBe('5');
    //     // expect(() => sExp('/', '1', '0', 'NaslLong', 'String')).toThrow(errMsg);
    //     // expect(() => sExp('/', '-0', '0', 'NaslLong', 'String')).toThrow(errMsg);
    //     // expect(() => sExp('%', '0', '0', 'NaslLong', 'String')).toThrow(errMsg);

    //     expect(sExp('/', '12', '12', 'NaslDecimal')?.__str).toBe('1');
    //     expect(sExp('/', '2.0', '2', 'NaslDecimal')?.__str).toBe('1.0');
    //     expect(sExp('+', '0.06', '0.04', 'NaslDecimal')?.__str).toBe('0.10');
    //     expect(sExp('+', '0.05', '-0.05', 'NaslDecimal')?.__str).toBe('0.00');
    //     expect(sExp('+', '-0.05', '0.05', 'NaslDecimal')?.__str).toBe('0.00');
    //     expect(sExp('*', '1.2', '0.8', 'NaslDecimal')?.__str).toBe('0.96');
    //     expect(sExp('*', '2.0', '2', 'NaslDecimal')?.__str).toBe('4.0');
    //     expect(sExp('/', '1', '3', 'NaslDecimal')?.__str).toBe('0.33333333333333333333');
    //     expect(sExp('/', '0.5', '0.02', 'NaslDecimal')?.__str).toBe('25');
    //     expect(sExp('*', '0.19', '0.190', 'NaslDecimal')?.__str).toBe('0.03610');
    //     expect(sExp('%', '2.66', '-0.2', 'NaslDecimal')?.__str).toBe('0.06');
    //     expect(sExp('%', '-2.66', '0.2', 'NaslDecimal')?.__str).toBe('-0.06');
    //     // expect(() => sExp('/', '1', '0', 'NaslDecimal')).toThrow(Error);
    //     // expect(() => sExp('/', '1', '0', 'NaslDecimal')).toThrow(errMsg);
    //     // expect(() => sExp('/', '-0', '0', 'NaslDecimal')).toThrow(errMsg);
    //     // expect(() => sExp('%', '2.66', '0', 'NaslDecimal')).toThrow(errMsg);
    //     // expect(() => sExp('%', '0', '0', 'NaslDecimal')).toThrow(errMsg);
    //     expect(sExp('/', '0.5', '0.02', 'NaslDecimal', 'String')?.__str).toBe('25');
    //     expect(sExp('%', '2.66', '-0.2', 'NaslDecimal', 'String')?.__str).toBe('0.06');
    //     expect(sExp('%', '-2.66', '0.2', 'NaslDecimal', 'String')?.__str).toBe('-0.06');
    //     // expect(() => sExp('/', '1', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    //     // expect(() => sExp('/', '-0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    //     // expect(() => sExp('%', '2.66', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    //     // expect(() => sExp('%', '0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    // });

    // test('comparisonOperator', () => {
    //     const variable1 = new window.NaslDecimal('2.100');
    //     const variable2 = new window.NaslDecimal('2.100');
    //     const variable3 = new window.NaslDecimal('2.10');
    //     const variable4 = new window.NaslDecimal('1.10');
    //     expect(sExp('equals', variable1, variable2, 'NaslDecimal', 'NaslDecimal')).toBe(true);
    //     expect(sExp('equals', variable1, variable3, 'NaslDecimal', 'NaslDecimal')).toBe(false);
    //     expect(sExp('lessThan', variable4, variable3, 'NaslDecimal', 'NaslDecimal')).toBe(true);

    //     expect(naslLessThanOrEqual(cnd('1'), 'A')).toBe(false);
    //     expect(naslLessThanOrEqual('1', 'A')).toBe(true);
    //     expect(naslLessThanOrEqual('1', 'A')).toBe(true);
    // });

    // test('< 3.3.x 算术运算兼容性测试', () => {
    //     // < 3.3.x 兼容性，3.4 就改。傻逼 js。
    //     // 这些单测错了不要乱改，联系令浩或者子润。
    //     // 由于 2023-11-19 NaslGenerator 有问题，这些变成了加法。
    //     // expect(sExp('+', '10', '0.12', 'NaslLong', 'String')).toBe('100.12');
    //     // expect(sExp('+', '0.06', '0.04', 'NaslDecimal', 'String')).toBe('0.060.04');
    //     // expect(sExp('+', '0.05', '-0.05', 'NaslDecimal', 'String')).toBe('0.05-0.05');
    //     // expect(sExp('+', '-0.05', '0.05', 'NaslDecimal', 'String')).toBe('-0.050.05');
    //     expect(sExp('/', '1', '3', 'NaslLong', 'String')?.__str).toBe('0.33333333333333333333');
    //     expect(sExp('/', '1', '3', 'NaslDecimal', 'String')?.__str).toBe('0.33333333333333333333');
    //     expect(sExp('/', '1', '0', 'NaslLong', 'String')).toBe(Infinity);
    //     expect(sExp('/', '-0', '0', 'NaslLong', 'String')).toBe(NaN);
    //     expect(sExp('%', '0', '0', 'NaslLong', 'String')).toBe(NaN);
    //     expect(sExp('/', '1', '0', 'NaslLong')).toBe(Infinity);
    //     expect(sExp('/', '-0', '0', 'NaslLong')).toBe(NaN);
    //     expect(sExp('%', '0', '0', 'NaslLong')).toBe(NaN);
    //     expect(sExp('/', '1', '0', 'NaslDecimal')).toBe(Infinity);
    //     expect(sExp('/', '-0', '0', 'NaslDecimal')).toBe(NaN);
    //     expect(sExp('%', '2.66', '0', 'NaslDecimal')).toBe(NaN);
    //     expect(sExp('%', '0', '0', 'NaslDecimal')).toBe(NaN);
    //     expect(sExp('-', 'NaN', '0.12', 'String', 'NaslDecimal')).toBe(NaN);
    //     expect(sExp('-', '0.12', 'NaN', 'NaslDecimal', 'String')).toBe(NaN);

    //     expect(sExp('-', 'undefined', 'NaN', 'NaslLong')).toBe(NaN);
    //     expect(sExp('-', 'undefined', 'NaN', 'NaslLong', 'String')).toBe(NaN);
    //     expect(sExp('-', 'undefined', 'NaN', 'NaslLong', 'String')).toBe(NaN);
    //     expect(sExp('+', 'undefined', 'NaN', 'NaslLong', 'String')).toBe('undefinedNaN');

    //     expect(sExp('-', 'undefined', 'NaN', 'NaslDecimal')).toBe(NaN);
    //     expect(sExp('-', 'undefined', 'NaN', 'NaslDecimal', 'String')).toBe(NaN);
    //     expect(sExp('-', 'undefined', 'NaN', 'NaslDecimal', 'String')).toBe(NaN);
    //     expect(sExp('+', 'undefined', 'NaN', 'NaslDecimal', 'String')).toBe('undefinedNaN');

    //     expect(naslAdd(null, '1')).toBe('null1');
    //     expect(naslAdd('1', null)).toBe('1null');
    //     expect(naslAdd(undefined, '1')).toBe('undefined1');
    //     expect(naslAdd('1', undefined)).toBe('1undefined');

    //     expect(naslAdd(undefined, cnd('1'))).toBe(NaN);
    //     expect(naslAdd(cnd('1'), undefined)).toBe(NaN);
    //     expect(naslAdd(undefined, new NaslLong('1'))).toBe(NaN);
    //     expect(naslAdd(new NaslLong('1'), undefined)).toBe(NaN);

    //     expect(naslAdd(null, cnd('1'))).toEqual(cnd('1'));
    //     expect(naslAdd(cnd('1'), null)).toEqual(cnd('1'));
    //     expect(naslAdd(null, new NaslLong('1'))).toEqual(new NaslLong('1'));
    //     expect(naslAdd(new NaslLong('1'), null)).toEqual(new NaslLong('1'));

    //     expect(naslTimes(new NaslLong('10'), null)).toEqual(new NaslLong('0'));
    //     expect(naslDividedBy(new NaslLong('10'), null)).toBe(Infinity);

    //     expect(sExp('/', '1', '0', 'NaslDecimal', 'String')).toBe(Infinity);
    //     expect(sExp('/', '-0', '0', 'NaslDecimal', 'String')).toBe(NaN);
    //     expect(sExp('%', '2.66', '0', 'NaslDecimal', 'String')).toBe(NaN);
    //     expect(sExp('%', '0', '0', 'NaslDecimal', 'String')).toBe(NaN);
    // });

    // test('< 3.3.x 关系运算兼容性测试', () => {
    //     expect(naslEquals(undefined, cnd('undefined'))).toBe(true);
    //     expect(naslEquals(undefined, new NaslLong('undefined'))).toBe(true);

    //     expect(naslLessThan(cnd('1.1'), NaN)).toBe(false);
    //     expect(naslLessThan('1.1', NaN)).toBe(false);
    //     expect(naslGreaterThan(cnd('1.1'), null)).toBe(true);
    //     expect(naslGreaterThanOrEqual(cnd('0'), null)).toBe(true);
    //     expect(naslLessThanOrEqual(cnd('0'), null)).toBe(true);
    //     expect(naslLessThanOrEqual(undefined, undefined)).toBe(false);
    //     expect(naslEquals(cnd('0'), null)).toBe(false);
    //     expect(naslEquals(undefined, undefined)).toBe(true);
    //     expect(naslEquals(null, null)).toBe(true);
    //     expect(naslNotEqual(undefined, undefined)).toBe(false);
    //     expect(naslNotEqual(null, null)).toBe(false);
    // });


    // {
    //     // let x = new Decimal('null')
    //     // let y = new Decimal('undefined')
    //     let z = new Decimal('NaN')
    // }

    // {
    //     let x = new Decimal('0.06')
    //     let y = new Decimal('0.04')
    //     let z = x.plus(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('0.05')
    //     let y = new Decimal('-0.05')
    //     let z = x.plus(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('-0.05')
    //     let y = new Decimal('0.05')
    //     let z = x.plus(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('1')
    //     let y = new Decimal('3')
    //     let z = x.dividedBy(y)
    //     console.log(z)
    //     console.log(z.dp()) //20
    // }

    // {
    //     let x = new Decimal('0.5')
    //     let y = new Decimal('0.02')
    //     let z = x.dividedBy(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('1')
    //     let y = new Decimal('0')
    //     let z = x.dividedBy(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('-0')
    //     let y = new Decimal('0')
    //     let z = x.dividedBy(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('2.66')
    //     let y = new Decimal('-0.2')
    //     let z = x.mod(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('-2.66')
    //     let y = new Decimal('0.2')
    //     let z = x.mod(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('2.66')
    //     let y = new Decimal('0')
    //     let z = x.mod(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('0')
    //     let y = new Decimal('0')
    //     let z = x.mod(y)
    //     console.log(z)
    // }
});
