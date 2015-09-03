var ancestry = JSON.parse(ANCESTRY_FILE);

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null) {
      return defaultValue;
    } else {
      return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
    }
  }
  
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke") {
    console.log("Landed on Pauwels");
    return 1;
  } else {
    console.log("current person: " + person.name);
    console.log("from Mother: " + fromMother);
    console.log("from Father: " + fromFather);
    return (fromMother + fromFather) / 2;
  }
}


var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

// var ph = byName["Philibert Haverbeke"];
// console.log(reduceAncestors(ph, sharedDNA, 0) / 4);

//var pauwels = byName["Pauwels van Haverbeke"];
//console.log(reduceAncestors(pauwels, sharedDNA, 0));

var pauwelsChild = byName["Lieven van Haverbeke"];
console.log(reduceAncestors(pauwelsChild, sharedDNA, 0));
