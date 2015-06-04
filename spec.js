var code = require('./grader.js');

describe('Test letterGrader', function() {
  it('Translates numerical scores to letter grades', function() {
    expect(code.letterGrader(101)).toEqual('Not a number from 0 to 100');
    expect(code.letterGrader(100)).toEqual('Awesome!');
    expect(code.letterGrader(99)).toEqual('A');
    expect(code.letterGrader(98)).toEqual('A');
    expect(code.letterGrader(97)).toEqual('A');
    expect(code.letterGrader(96)).toEqual('A');
    expect(code.letterGrader(95)).toEqual('A');
    expect(code.letterGrader(94)).toEqual('A');
    expect(code.letterGrader(93)).toEqual('A');
    expect(code.letterGrader(92)).toEqual('A');
    expect(code.letterGrader(91)).toEqual('A');
    expect(code.letterGrader(90)).toEqual('A');
    expect(code.letterGrader(89)).toEqual('B');
    expect(code.letterGrader(88)).toEqual('B');
    expect(code.letterGrader(87)).toEqual('B');
    expect(code.letterGrader(86)).toEqual('B');
    expect(code.letterGrader(85)).toEqual('B');
    expect(code.letterGrader(84)).toEqual('B');
    expect(code.letterGrader(83)).toEqual('B');
    expect(code.letterGrader(82)).toEqual('B');
    expect(code.letterGrader(81)).toEqual('B');
    expect(code.letterGrader(80)).toEqual('B');
    expect(code.letterGrader(79)).toEqual('C');
    expect(code.letterGrader(78)).toEqual('C');
    expect(code.letterGrader(77)).toEqual('C');
    expect(code.letterGrader(76)).toEqual('C');
    expect(code.letterGrader(75)).toEqual('C');
    expect(code.letterGrader(74)).toEqual('C');
    expect(code.letterGrader(73)).toEqual('C');
    expect(code.letterGrader(72)).toEqual('C');
    expect(code.letterGrader(71)).toEqual('C');
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

var grades2 = [52,80,80,86,94];

describe('Test medianScore', function() {
  it('Traverses an array of numbers and returns the median', function() {
    expect(code.medianScore(grades2)).toEqual(80);
  });
});

var grades3 = [82, 92, 75, 91, 92, 89, 95, 100, 86];

describe('Test modeScore', function() {
  it('Traverses an array of numbers and returns the mode', function() {
    expect(code.modeScore(grades3)).toEqual(92);
  });
});
