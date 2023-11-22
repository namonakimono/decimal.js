import util from 'util';
import { createNaslDecimal as cnd, NaslDecimal } from '../NaslDecimal.mjs';


describe('global/app/packingType', () => {
    test('null 构造测试', () => {
        expect(cnd(null).valueOf()).toBe(null);
        expect(cnd(cnd(null)).valueOf()).toBe(null);
        expect(cnd(cnd(null)).valueOf()).toBe(cnd(null).valueOf());
        expect(cnd('null').valueOf()).toBe(null);
        expect(cnd(cnd('null')).valueOf()).toBe(null);
        expect(cnd(cnd('null')).toString()).toBe('null');
    });

    test('null 运算测试', () => {
        expect(cnd('100').add(cnd(null)).toNumber())
            .toBe(100 + null);
        expect(cnd('100').minus(cnd(null)).toNumber())
            .toBe(100 - null);
        expect(cnd('100').times(cnd(null)).toNumber())
            .toBe(100 * null);
        expect(cnd('100').dividedBy(cnd(null)).toNumber())
            .toBe(100 / null);
        expect(cnd('100').modulo(cnd(null)).toNumber())
            .toBe(100 % null);

        expect(cnd('100').equals(cnd(null)).valueOf()).toBe(false);
        expect(cnd('0').equals(cnd(null))).toBe(0 == null);
        expect(cnd('100').notEqual(cnd(null))).toBe(100 != null);
        expect(cnd('0').notEqual(cnd(null))).toBe(0 != null);
        expect(cnd('0').greaterThan(cnd(null))).toBe(0 > null);
        expect(cnd('0').greaterThanOrEqualTo(cnd(null))).toBe(0 >= null);
        expect(cnd('0').lessThan(cnd(null))).toBe(0 < null);
        expect(cnd('0').lessThanOrEqualTo(cnd(null))).toBe(0 <= null);


        expect(cnd(null).add(cnd('100')).valueOf()).toBe('100');
        expect(cnd(null).minus(cnd('100')).valueOf()).toBe('-100');
        expect(cnd(null).times(cnd('100')).valueOf()).toBe('0');
        expect(cnd(null).dividedBy(cnd('100')).valueOf()).toBe('0');
        expect(cnd(null).modulo(cnd('100')).valueOf()).toBe('0');

        expect(cnd(null).equals(cnd('100')).valueOf()).toBe(null == 100);
        expect(cnd(null).equals(cnd('0')).valueOf()).toBe(null == 0);
        expect(cnd(null).notEqual(cnd('100')).valueOf()).toBe(null != 100);
        expect(cnd(null).notEqual(cnd('0')).valueOf()).toBe(null != 0);
        expect(cnd(null).greaterThan(cnd('0')).valueOf()).toBe(null > 0);
        expect(cnd(null).greaterThanOrEqualTo('0').valueOf()).toBe(null <= 0);
        expect(cnd(null).lessThan(cnd('0')).valueOf()).toBe(null < 0);
        expect(cnd(null).lessThanOrEqualTo(cnd('0')).valueOf()).toBe(null <= 0);
    });

    test('undefined 构造测试', () => {
        expect(cnd().valueOf()).toBe(undefined)
        expect(cnd(cnd()).valueOf()).toBe(undefined)
        expect(cnd(cnd()).valueOf()).toBe(cnd().valueOf());

        expect(cnd(undefined).valueOf()).toBe(undefined);
        expect(cnd(cnd(undefined)).valueOf()).toBe(undefined);
        expect(cnd(cnd(undefined)).valueOf()).toBe(cnd(undefined).valueOf());
        expect(cnd(cnd('undefined')).valueOf()).toBe(undefined);
        expect(cnd('undefined').valueOf()).toBe(undefined);
        expect(cnd(undefined).toJSON()).toBe('undefined');
        expect(cnd(undefined).toNumber()).toBe(undefined);
        expect(cnd(cnd('undefined')).valueOf()).toEqual(cnd('undefined').valueOf());
    });

    test('undefined 运算测试', () => {
        expect(cnd('100').add(cnd(undefined)).valueOf()).toBe(NaN);
        expect(cnd('100').add(cnd('undefined')).valueOf()).toBe(NaN);
        expect(cnd('100').minus(cnd(undefined)).valueOf()).toBe(NaN);
        expect(cnd('100').minus(cnd('undefined')).valueOf()).toBe(NaN);
        expect(cnd('100').times(cnd(undefined)).equals(100 * undefined));
        expect(cnd('100').times(cnd('undefined')).valueOf())
            .toBe(100 * 'undefined');
        expect(cnd('100').dividedBy(cnd(undefined)).valueOf())
            .toBe(100 / undefined);
        expect(cnd('100').modulo(cnd(undefined)).valueOf())
            .toBe(100 % undefined);

        expect(cnd('undefined').equals(cnd(undefined))).toBe(undefined == undefined);
        expect(cnd('0').equals(cnd(undefined)).valueOf()).toBe(0 == undefined);
        expect(cnd('100').notEqual(cnd(undefined)).valueOf()).toBe(100 != undefined);
        expect(cnd('0').notEqual(cnd(undefined)).valueOf()).toBe(0 != undefined);
        expect(cnd('0').greaterThan(cnd(undefined)).valueOf()).toBe(0 > undefined);
        expect(cnd('0').greaterThanOrEqualTo(cnd(undefined)).valueOf()).toBe(0 >= undefined);
        expect(cnd('0').lessThan(cnd(undefined)).valueOf()).toBe(0 < undefined);
        expect(cnd('0').lessThanOrEqualTo(cnd(undefined)).valueOf()).toBe(0 <= undefined);


        expect(cnd(undefined).add(cnd('100')).valueOf())
            .toBe(undefined + 100);
        expect(cnd(undefined).minus(cnd('100')).valueOf())
            .toBe(undefined - 100);
        expect(cnd(undefined).times(cnd('100')).valueOf())
            .toBe(undefined * 100);
        expect(cnd(undefined).dividedBy(cnd('100')).valueOf())
            .toEqual(undefined / 100);
        expect(cnd(undefined).modulo(cnd('100')).valueOf())
            .toEqual(undefined % 100);

        expect(cnd(undefined).equals(cnd('100')).valueOf()).toBe(undefined == 100);
        expect(cnd(undefined).equals(cnd('0')).valueOf()).toBe(undefined == 0);
        expect(cnd(undefined).notEqual(cnd('100')).valueOf()).toBe(undefined != 100);
        expect(cnd(undefined).notEqual(cnd('0')).valueOf()).toBe(undefined != 0);
        expect(cnd(undefined).greaterThan(cnd('0')).valueOf()).toBe(undefined > 0);
        expect(cnd(undefined).greaterThanOrEqualTo('0').valueOf()).toBe(undefined >= 0);
        expect(cnd(undefined).lessThan(cnd('0')).valueOf()).toBe(undefined < 0);
        expect(cnd(undefined).lessThanOrEqualTo(cnd('0')).valueOf()).toBe(undefined <= 0);
    });

    test('NaN 构造测试', () => {
        expect(cnd(NaN).valueOf()).toBe(NaN);
        expect(cnd(cnd(NaN)).valueOf()).toBe(NaN);
        expect(cnd(cnd(NaN)).valueOf()).toBe(cnd(NaN).valueOf());
        expect(cnd(cnd('NaN')).valueOf()).toBe(NaN);
        expect(cnd('NaN').valueOf()).toBe(NaN);
        expect(cnd(NaN).toJSON()).toBe('NaN');
        expect(cnd(NaN).toNumber()).toBe(NaN);
        expect(cnd(cnd('NaN')).valueOf()).toEqual(cnd('NaN').valueOf());
    });

    test('NaN 运算测试', () => {
        expect(cnd('100').add(cnd(NaN)).valueOf()).toBe(NaN);
        expect(cnd('100').add(cnd('NaN')).valueOf()).toBe(NaN);
        expect(cnd('100').minus(cnd(NaN)).valueOf()).toBe(NaN);
        expect(cnd('100').minus(cnd('NaN')).valueOf()).toBe(NaN);
        expect(cnd('100').times(cnd(NaN)).equals(100 * NaN));
        expect(cnd('100').times(cnd('NaN')).valueOf())
            .toBe(100 * 'NaN');
        expect(cnd('100').dividedBy(cnd(NaN)).valueOf())
            .toBe(100 / NaN);
        expect(cnd('100').modulo(cnd(NaN)).valueOf())
            .toBe(100 % NaN);

        expect(cnd('NaN').equals(cnd(NaN))).toBe(NaN == NaN);
        expect(cnd('0').equals(cnd(NaN)).valueOf()).toBe(0 == NaN);
        expect(cnd('100').notEqual(cnd(NaN)).valueOf()).toBe(100 != NaN);
        expect(cnd('0').notEqual(cnd(NaN)).valueOf()).toBe(0 != NaN);
        expect(cnd('0').greaterThan(cnd(NaN)).valueOf()).toBe(0 > NaN);
        expect(cnd('0').greaterThanOrEqualTo(cnd(NaN)).valueOf()).toBe(0 >= NaN);
        expect(cnd('0').lessThan(cnd(NaN)).valueOf()).toBe(0 < NaN);
        expect(cnd('0').lessThanOrEqualTo(cnd(NaN)).valueOf()).toBe(0 <= NaN);


        expect(cnd(NaN).add(cnd('100')).valueOf())
            .toBe(NaN + 100);
        expect(cnd(NaN).minus(cnd('100')).valueOf())
            .toBe(NaN - 100);
        expect(cnd(NaN).times(cnd('100')).valueOf())
            .toBe(NaN * 100);
        expect(cnd(NaN).dividedBy(cnd('100')).valueOf())
            .toEqual(NaN / 100);
        expect(cnd(NaN).modulo(cnd('100')).valueOf())
            .toEqual(NaN % 100);

        expect(cnd(NaN).equals(cnd('100')).valueOf()).toBe(NaN == 100);
        expect(cnd(NaN).equals(cnd('0')).valueOf()).toBe(NaN == 0);
        expect(cnd(NaN).notEqual(cnd('100')).valueOf()).toBe(NaN != 100);
        expect(cnd(NaN).notEqual(cnd('0')).valueOf()).toBe(NaN != 0);
        expect(cnd(NaN).greaterThan(cnd('0')).valueOf()).toBe(NaN > 0);
        expect(cnd(NaN).greaterThanOrEqualTo('0').valueOf()).toBe(NaN >= 0);
        expect(cnd(NaN).lessThan(cnd('0')).valueOf()).toBe(NaN < 0);
        expect(cnd(NaN).lessThanOrEqualTo(cnd('0')).valueOf()).toBe(NaN <= 0);
    });

    test('运算精度测试', () => {
        expect(cnd('10').add(cnd('2')).toNumber()).toBe(10 + 2);
        expect(cnd('10').add(2).toNumber()).toBe(10 + 2);
        expect(cnd('10').add('2').toNumber()).toBe(10 + 2);
        expect(cnd('10').minus('2').toNumber()).toBe(10 - 2);
        expect(cnd('10').times('2').toNumber()).toBe(10 * 2);
        expect(cnd('10').dividedBy('0').toNumber()).toBe(10 / 0);
        expect(cnd('0').modulo('10').toNumber()).toBe(0 % 10);
        expect(cnd('10').equals('10')).toBe(10 == 10);
    //     // 不同类型运算
    //     expect(cnd('10').times(cnd('0.12')).valueOf()).toBe('1.20');
    //     expect(cnd('10').minus(cnd('0.12')).valueOf()).toBe('9.88');

    //     // 同类型运算
    //     expect(cnd('10').dividedBy(cnd('2')).valueOf()).toBe('5');
    //     expect(cnd('12').dividedBy(cnd('12')).valueOf()).toBe('1');
    //     expect(cnd('10').dividedBy(cnd('3')).valueOf()).toBe('3.3333333333333333333');

    //     // // expect(() => sExp('/', '1', '0', 'NaslLong')).toThrow(errMsg);
    //     // // expect(() => sExp('/', '-0', '0', 'NaslLong')).toThrow(errMsg);
    //     // // expect(() => sExp('%', '0', '0', 'NaslLong')).toThrow(errMsg);

    //     // expect(sExp('/', '10', '2', 'NaslLong', 'String')?.valueOf()).toBe('5');
    //     // // expect(() => sExp('/', '1', '0', 'NaslLong', 'String')).toThrow(errMsg);
    //     // // expect(() => sExp('/', '-0', '0', 'NaslLong', 'String')).toThrow(errMsg);
    //     // // expect(() => sExp('%', '0', '0', 'NaslLong', 'String')).toThrow(errMsg);

    //     // expect(sExp('/', '12', '12', 'NaslDecimal')?.valueOf()).toBe('1');
    //     // expect(sExp('/', '2.0', '2', 'NaslDecimal')?.valueOf()).toBe('1.0');
    //     // expect(sExp('+', '0.06', '0.04', 'NaslDecimal')?.valueOf()).toBe('0.10');
    //     // expect(sExp('+', '0.05', '-0.05', 'NaslDecimal')?.valueOf()).toBe('0.00');
    //     // expect(sExp('+', '-0.05', '0.05', 'NaslDecimal')?.valueOf()).toBe('0.00');
    //     // expect(sExp('*', '1.2', '0.8', 'NaslDecimal')?.valueOf()).toBe('0.96');
    //     // expect(sExp('*', '2.0', '2', 'NaslDecimal')?.valueOf()).toBe('4.0');
    //     // expect(sExp('/', '1', '3', 'NaslDecimal')?.valueOf()).toBe('0.33333333333333333333');
    //     // expect(sExp('/', '0.5', '0.02', 'NaslDecimal')?.valueOf()).toBe('25');
    //     // expect(sExp('*', '0.19', '0.190', 'NaslDecimal')?.valueOf()).toBe('0.03610');
    //     // expect(sExp('%', '2.66', '-0.2', 'NaslDecimal')?.valueOf()).toBe('0.06');
    //     // expect(sExp('%', '-2.66', '0.2', 'NaslDecimal')?.valueOf()).toBe('-0.06');
    //     // // expect(() => sExp('/', '1', '0', 'NaslDecimal')).toThrow(Error);
    //     // // expect(() => sExp('/', '1', '0', 'NaslDecimal')).toThrow(errMsg);
    //     // // expect(() => sExp('/', '-0', '0', 'NaslDecimal')).toThrow(errMsg);
    //     // // expect(() => sExp('%', '2.66', '0', 'NaslDecimal')).toThrow(errMsg);
    //     // // expect(() => sExp('%', '0', '0', 'NaslDecimal')).toThrow(errMsg);
    //     // expect(sExp('/', '0.5', '0.02', 'NaslDecimal', 'String')?.valueOf()).toBe('25');
    //     // expect(sExp('%', '2.66', '-0.2', 'NaslDecimal', 'String')?.valueOf()).toBe('0.06');
    //     // expect(sExp('%', '-2.66', '0.2', 'NaslDecimal', 'String')?.valueOf()).toBe('-0.06');
    //     // // expect(() => sExp('/', '1', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    //     // // expect(() => sExp('/', '-0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    //     // // expect(() => sExp('%', '2.66', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    //     // // expect(() => sExp('%', '0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    });

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

    // });



    // {
    //     // let x = new Decimal('null')
    //     // let y = new Decimal('undefined')
    //     let z = new Decimal('NaN')
    // }

    // {
    //     let x = new Decimal('0.06')
    //     let y = new Decimal('0.04')
    //     let z = x.add(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('0.05')
    //     let y = new Decimal('-0.05')
    //     let z = x.add(y)
    //     console.log(z)
    // }

    // {
    //     let x = new Decimal('-0.05')
    //     let y = new Decimal('0.05')
    //     let z = x.add(y)
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
