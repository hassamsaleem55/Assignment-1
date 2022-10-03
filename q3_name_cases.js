//Name: Hassam
//Current Date: 03-10-2022
//Program to print my name in lower case, upper case and title case
function getLowerCase() {
  var personName = "Hassam Saleem".toLocaleLowerCase();
  return personName;
}
function getUpperCase() {
  var personName = "Hassam Saleem".toUpperCase();
  return personName;
}
function getTitleCase() {
  var personName = "Hassam Saleem";
  let sentence = personName.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");
  return personName;
}
console.log("Lower Case Name: " + getLowerCase());
console.log("Upper Case Name: " + getUpperCase());
console.log("Upper Title Name: " + getTitleCase());
