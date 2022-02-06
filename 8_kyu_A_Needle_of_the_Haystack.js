function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.findIndex((s) => s == 'needle');
}



/*Interesting Solutions

1:

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

2:

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

3:

function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == 'needle') {
      return 'found the needle at position ' + i;
    }
    i++;  
  }
}

*/
