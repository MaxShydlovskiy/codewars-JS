function countPositivesSumNegatives(input) {
  if (input && input.length) {
      let positiveSum = 0
      let negativeSum = 0
      input.forEach(num => num > 0 ? positiveSum++ : negativeSum += num)
      return [positiveSum, negativeSum]
  } else {
      return []
  }
}

/* Interesting Solutions

1:

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

2:

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


3:

function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  var sum = 0, count = 0;
  input.forEach(function(el){ if (el > 0) count++; else sum+=el});
  return [count, sum];
}
*/
