import expect from 'expect';
import say from './first';
describe("The first spec (just to make sure mocha works)", function() {
  it("should run.", function() {
    expect(say('hello')).toBe('hello');
  });
  it("should fail", function() {
    expect(true).toBe(false);
  });
})
