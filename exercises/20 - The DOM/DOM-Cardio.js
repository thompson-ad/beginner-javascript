// Make a div

const ourDiv = document.createElement("div");

// add a class of wrapper to it
ourDiv.classList.add("wrapper");

// put it into the body
document.body.appendChild(ourDiv);

// make an unordered list

// add three list items with the words "one, two three" in them
const list = `
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            `;
// put that list into the above wrapper
ourDiv.innerHTML = list;

// create an image

const img = document.createElement("img");

// set the source to an image
img.src =
  "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg";
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "cute puppy";
// Append that image to the wrapper
ourDiv.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it

const paraDiv = `
    <div>
        <p>Hello</p>
        <p>Hi</p>
    </div>
`;
// put this div before the unordered list from above
ourDiv.insertAdjacentHTML("afterbegin", paraDiv);
// add a class to the second paragraph called warning
const secondP = document.querySelectorAll("p")[1];

secondP.classList.add("warning");
// remove the first paragraph
ourDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `<div class="playerCard">
              <h2>${name} — ${age}</h2>
              <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
            </div>  `;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
