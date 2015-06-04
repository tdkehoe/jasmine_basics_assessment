module.exports = {
  letterGrader: function letterGrader(grade) {
    switch (true) {
/*
"switch (grade)" doesn't work. That syntax only works for single answers

strings because
the cases evaluate to "grade". I.e., the first case would evaluate to
"(100 < grade) === grade". In constrast, with strings you could write

switch (fruit) {
  case ('alfafa'):
    return 'horse';
  case ('banana'):
    return 'chimpanzee';

The user enters 'banana' and the second case evaluates to "'banana' === 'banana'".
With numbers (or booleans?) you must use "switch (true)" or "switch (false)".
*/

//The following case doesn't fix the problem with 'true' because 'true' evaluates as 0.
      // case (grade === true):
      //  return 'Not a number from 0 to 100';
      //  break

      case (100 < grade):
        return 'Too awesome!';
        break
      case (90 <= grade && grade <= 100):
        return 'Awesome!';
        break
      case (80 <= grade && grade <= 89):
        return 'B';
        break
      case (70 <= grade && grade <= 79):
        return 'C';
        break
      case (60 <= grade && grade <= 69):
        return 'D';
        break
      case (2 <= grade && grade <= 59):
        return 'F';
        break
      case (1 === grade): //Necessary because 'true' evaluates to 1
        return 'F';
        break
      case (0 === grade): //Necessary because 'false' and 'null' evaluate to 0
        return 'F';
        break
      default:
      return 'Not a number from 0 to 100'
    }
  },

  letterGraderIf: function letterGraderIf(grade) {

    // The following else-if doesn't fix the problem with 'true'
    if (grade === true) {
      return 'True!';
    }
      else if (grade === false) {
        return 'False!';
      }

      else if (grade === null) {
        return 'Null!';
      }
      else if (100 < grade) {
        return 'Not a number from 0 to 100';
      }
      else if (90 <= grade && grade <= 100) {
        return 'Awesome!';
      }
      else if (80 <= grade && grade <= 89) {
        return 'B';
      }
      else if (70 <= grade && grade <= 79) {
        return 'C';
      }
      else if (60 <= grade && grade <= 69) {
        return 'D';
      }
      else if (0 <= grade && grade <= 59) {
        return 'F';
      }
      else {
        return 'Not a number from 0 to 100';
      }
  }


};



/* This works in Chrome Dev Tools
var letterGraderIf = function letterGraderIf(grade) {

  if (grade === true) {
    return 'True!';
  }

  else if (grade === false) {
    return 'False!';
  }

  else if (grade === null) {
    return 'Null!';
  }

    else if (100 < grade) {
      return 'Not a number from 0 to 100';
    }
    else if (90 <= grade && grade <= 100) {
      return 'Awesome!';
    }
    else if (80 <= grade && grade <= 89) {
      return 'B';
    }
    else if (70 <= grade && grade <= 79) {
      return 'C';
    }
    else if (60 <= grade && grade <= 69) {
      return 'D';
    }
    else if (0 <= grade && grade <= 59) {
      return 'F';
    }
    else {
      return 'Not a number from 0 to 100';
    }
};

console.log(letterGraderIf("Fred"))
*/
