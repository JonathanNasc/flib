import { Validator } from '../../src/utils/validator';

import * as assert from 'assert';

describe("Validator tests", () => {
    it("Test is not empty", async (done) => { 
        Validator.isNotEmpty("abc");
        Validator.isNotEmpty({a: "a", b: "b"});
        Validator.isNotEmpty([1]);
        Validator.isNotEmpty(123);
        Validator.isNotEmpty(1.1);
        
        assert.throws(() => {
            Validator.isNotEmpty(null, "message error");
        }, /message error/);

        assert.throws(() => {
            Validator.isNotEmpty(0, "message error");
        }, /message error/);

        assert.throws(() => {
            Validator.isNotEmpty([], "message error");
        }, /message error/);

        assert.throws(() => {
            Validator.isNotEmpty({}, "message error");
        }, /message error/);

        assert.throws(() => {
            Validator.isNotEmpty(undefined, "message error");
        }, /message error/);
        
        done();
    });

    it("Test array is greater then", (done) => {
        Validator.arrayIsGreaterThen([1], 1);
        Validator.arrayIsGreaterThen([2], 1);

        assert.throws(() => {
            Validator.arrayIsGreaterThen([1,2], 3, "message error");
        }, /message error/);

        done();
    })

});