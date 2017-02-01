//ex-02: `makeNamesObject`

// Create a function that accepts 3 strings with first + last names as arguments
// The function should return an object with 3 properties:
// The first name will be a property-name and the last name will be the value

// EXAMPLE:
// makeNamesObject("George Washington", "John Adams", "Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }


var makeNamesObject = function (name1, name2, name3){
  var outputObj = {};

  var nameArray1 = name1.split(' ');
  var nameArray2 = name2.split(' ');
  var nameArray3 = name3.split(' ');

  outputObj = {
    [nameArray1[0]]: nameArray1[1],
    [nameArray2[0]]: nameArray2[1],
    [nameArray3[0]]: nameArray3[1],
  }
  return outputObj;
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
