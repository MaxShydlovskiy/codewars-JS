function abbrevName(name){
  return name.split(" ").map(el => el[0].toUpperCase()).join(".")
}

/*Interesting Solutions

1:

const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

2:

function abbrevName(name){
    name = name.toUpperCase().split(' ');
    return name[0][0] + '.' + name[1][0];
}

3:

const abbrevName = name =>
  name
    .split` `
    .map(part => part[0].toUpperCase())
    .join('.')
*/
