module.exports = {
  letterGrader: function letterGrader (grade) {
    switch (true) {
/*
"switch (grade)" doesn't work. That syntax only works for single expression,
e.g., strings or numbers. Logical expressions such as "(90 <= grade && grade <= 100)"
evaluate to true or false. E.g., the first case would evaluate to
"(100 < grade) === grade". In constrast, with strings you could write

switch (fruit) {
  case ('alfafa'):
    return 'horse';
  case ('banana'):
    return 'chimpanzee';

The user enters 'banana' and the second case evaluates to "'banana' === 'banana'".
*/

// The following case doesn't fix the problem with 'true' because 'true' evaluates as 0.
      // case (grade === true):
      //  return 'Not a number from 0 to 100';
      //  break

      case (100 < grade):
        return 'Not a number from 0 to 100';
      case (90 <= grade && grade <= 100):
        return 'Awesome!';
      case (80 <= grade && grade <= 89):
        return 'B';
      case (70 <= grade && grade <= 79):
        return 'C';
      case (60 <= grade && grade <= 69):
        return 'D';
      case (2 <= grade && grade <= 59):
        return 'F';
      case (1 === grade): //Necessary because 'true' evaluates to 1
        return 'F';
      case (0 === grade): //Necessary because 'false' and 'null' evaluate to 0
        return 'F';
      default:
      return 'Not a number from 0 to 100';
    }
  },

  //An if-else statement has the same issues with true, false, and null inputs.
  //Chrome Dev Tools doesn't have problems with true, false, and null.

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
  },

  averageScore: function(grades1) {
    var sum = 0;
    grades1.forEach(function(el) {
      sum += el;
    });
    return (sum / grades1.length);
  }

/*
  medianScore: function medianScore(grades) {

    grades.sort( function(a,b) {return a - b;} );

    var half = Math.floor(grades.length/2);

    if(grades.length % 2)
        return grades[half];
    else
        return (grades[half-1] + grades[half]) / 2.0;
  }
*/

};
