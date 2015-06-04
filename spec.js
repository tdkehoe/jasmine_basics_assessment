var code = require('./grader.js');

describe('Test letterGrader', function() {
  it('Translates numerical scores to letter grades', function() {
    expect(code.letterGrader(101)).toEqual('Too awesome!');
    expect(code.letterGrader(98)).toEqual('Awesome!');
    expect(code.letterGrader(85)).toEqual('B');
    expect(code.letterGrader(76)).toEqual('C');
    expect(code.letterGrader(70)).toEqual('C');
    expect(code.letterGrader(62)).toEqual('D');
    expect(code.letterGrader(37)).toEqual('F');
    expect(code.letterGrader('Barney')).toEqual('Not a number from 0 to 100');
    expect(code.letterGrader(true)).toEqual('Not a number from 0 to 100');
    expect(code.letterGrader(false)).toEqual('Not a number from 0 to 100');
    expect(code.letterGrader(null)).toEqual('Not a number from 0 to 100');
    expect(code.letterGrader(undefined)).toEqual('Not a number from 0 to 100');
  });
}),

describe('Test letterGraderIf', function() {
  it('Translates numerical scores to letter grades', function() {
    expect(code.letterGrader(101)).toEqual('Too awesome!');
    expect(code.letterGrader(98)).toEqual('Awesome!');
    expect(code.letterGrader(85)).toEqual('B');
    expect(code.letterGrader(76)).toEqual('C');
    expect(code.letterGrader(70)).toEqual('C');
    expect(code.letterGrader(62)).toEqual('D');
    expect(code.letterGrader(37)).toEqual('F');
    expect(code.letterGrader('Barney')).toEqual('Not a number from 0 to 100');
    // expect(code.letterGrader(true)).toEqual('Not a number from 0 to 100');
    // expect(code.letterGrader(false)).toEqual('Not a number from 0 to 100');
    // expect(code.letterGrader(null)).toEqual('Not a number from 0 to 100');
    expect(code.letterGrader(undefined)).toEqual('Not a number from 0 to 100');
  });
});
