var code = require('./grader.js');

describe('Test letterGrader', function() {
  it('Translates numerical scores to letter grades', function() {
    expect(code.letterGrader(101)).toEqual('Not a number from 0 to 100');
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
});

describe('Test letterGraderIf', function() {
  it('Translates numerical scores to letter grades', function() {
    expect(code.letterGraderIf(101)).toEqual('Not a number from 0 to 100');
    expect(code.letterGraderIf(98)).toEqual('Awesome!');
    expect(code.letterGraderIf(85)).toEqual('B');
    expect(code.letterGraderIf(76)).toEqual('C');
    expect(code.letterGraderIf(70)).toEqual('C');
    expect(code.letterGraderIf(62)).toEqual('D');
    expect(code.letterGraderIf(37)).toEqual('F');
    expect(code.letterGraderIf('Barney')).toEqual('Not a number from 0 to 100');
    // expect(code.letterGraderIf(true)).toEqual('Not a number from 0 to 100');
    // expect(code.letterGraderIf(false)).toEqual('Not a number from 0 to 100');
    // expect(code.letterGraderIf(null)).toEqual('Not a number from 0 to 100');
    expect(code.letterGraderIf(undefined)).toEqual('Not a number from 0 to 100');
  });
});

var grades1 = [90, 95, 87, 60];

describe('Test averageScore', function() {
  it('Traverses an array of numbers and returns the average', function() {
    expect(code.averageScore(grades1)).toEqual(83);
  });
});

/*
var grades2 = [52,80,80,86,94];

describe('Test medianScore', function() {
  it('Traverses an array of numbers and returns the median', function() {
    expect(code.medianScore(grades2)).toEqual(80);
  });
});
*/
