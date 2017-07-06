  console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1

var earth = document.createElement('section');
earth.setAttribute("id","middle-earth");

function makeMiddleEarth() {
  for (var i = 0; i < lands.length; i++) {
    var names = document.createElement("article");
    names.setAttribute("id",lands[i]);
    var title = document.createElement("h1");
    title.innerHTML = lands[i];
    earth.append(names);
    names.append(title);
    console.log(lands[i]);
  }
body.append(earth);
}


makeMiddleEarth();


// Part 2

function makeHobbits() {
//creating an unordered list by make a variable.
var shire = document.createElement('UL'); 
//giving the unordered list an ID of hobbitlist
shire.setAttribute("id", "hobbitlist"); 

//running through the array hobbits entire length one by one
for (var i = 0; i < hobbits.length; i++) { 
  // creating the list item and putting it in a variable homes
  var homes = document.createElement("li");
  //giving an id to all the hobbits in order
  homes.setAttribute("id", hobbits[i]);
  //is giving the list items a class of hobbit
  homes.setAttribute("class","hobbit");
  //is putting the unordered list onto the html
  homes.innerHTML = hobbits[i]; 
  // is adding the LI homes to to the UL shire
  shire.append(homes); 
}
  // is grabbing the ID and adding the UL shire onto the article shire
  document.getElementById("The Shire").append(shire);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  //created div element and stored it in var ring
  var ring = document.createElement('DIV');
  //gave the ring variable an attribute of class and named it "the ring"
  ring.setAttribute("id","the-ring");
  //also giving the div a class of magic-imbued-jewelry
  ring.setAttribute("class","magic-imbued-jewelry");
  //creating event listener when id Frodo Baggins is click make screech 
  document.getElementById("Frodo Baggins").addEventListener("click", nazgulScreech);
  //giving frodo the ring
  document.getElementById("Frodo Baggins").append(ring);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  //creating an aside tag inside a var of friends
  var hideout = document.createElement('ASIDE');
  //creating an id attribute for the aside element
  hideout.setAttribute("id","home");
  //creating an unordered list so we can store buddies inside.
  var list = document.createElement('UL');
  //giving the list an id of friends
  list.setAttribute("id", "friends");
  //creating the for loop to put the array buddies in the unordered list
  for (var i = 0; i < buddies.length; i++){
     //putting the buddies inside the ul
  var buds  = document.createElement('li');
  //giving the buddies an id of their own name
  buds.setAttribute("id", buddies[i]);///////
  console.log(i);
    //putting the UL onto the HTML
  buds.innerHTML = buddies[i]; ////////
  //putting the list on the HTML as a child of Rivendel
  document.getElementById("Rivendell").append(buds);
  }
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies();


// Part 5


function beautifulStranger() {
//changing id Strider to print "aragorn" on the webpage
document.getElementById("Strider").innerHTML= "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger();

// Part 6

function leaveTheShire() {
//moving the hobbit and putting them on Rivendell
document.getElementById("Rivendell").append(document.getElementById("hobbitlist"));  
// assemble the hobbits and move them to Rivendell
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
