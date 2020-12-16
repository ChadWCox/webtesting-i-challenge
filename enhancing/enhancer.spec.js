const {
    get,
    repair,
    success,
    fail
} = require('./enhancer.js');


let item = {    name: 'Excalibur',
                enhancement: 10,
                durability: 25
            }

describe("enhancer.js", () => {
    describe("repair", () => {
        it("returns item with 100 durability" , () => {
            let newItem = { ...item, durability: 100 }
            expect(repair(item)).toEqual(newItem);
        })});

    describe('get', () => {
        it('returns item unchanged', () => {
            let newItem = { ...item }
            expect(get(item)).toEqual(newItem)
        })});

    describe('fail', () => {
        it('items durability is decreased by 5', () => {
            let newItem = { ...item, durability: 95 }
            expect(fail(item)).toEqual(newItem)
        })});

    describe('success', () => {
        it('items enhancement increased by 1', () => {
            let newItem = { ...item, enhancement: 11 }
            expect(success(item)).toEqual(newItem)
        })});
});