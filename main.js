// task 1
// Use JavaScript to select the element with a class of `.quote` and store in a variable
// Change its `textContent` to a quote of your choosing

let newQuote = document.querySelector('.quote');                     // getElementsByClass didn't work?
newQuote.textContent = 'I cant believe this works!';

// task 2

// Select the `h1` tag using querySelector and store in variable
// Change its `text-decoration` property to the value of `underline`

let h1 = document.querySelector('h1');
h1.style.textDecoration = 'underline';

// task 3

document.title = 'Penny Pyramid Scheme';

//console.log(document.title);

// task 4

// Double the the value of the the pennies variable (already defined - look for it in the file!).
// Use the pennies variable to update the `textContent` of the output tag to be `${pennies} pennies`.

let pennies = 1;                                      // create a variable assigned to 1
let pennyDisplay = document.querySelector('output');  // create a variable and assign it the value of the output tag in the html

function handleClick() {
  pennies = pennies * 2;                              // each button click should double the value of the variable pennies
  pennyDisplay.textContent = `${pennies} pennies`;    // uses string interpolation to add the new value for pennie into the output tag
  // 🔺 Remember, this function is already hooked up to the button. You'll learn how to do this yourself soon! Your task is just to write the code inside this function itself.
}

// task 5.1

// Use JavaScript to create a paragraph element using the DOM
// Inside this new paragraph, add some text with another sentence talking about how great our penny doubler is

let hardSell = document.createElement('p');
hardSell.textContent = 'This totally legit scheme will change your life in super quick time, honest!';
document.getElementById('proof-section').appendChild(hardSell);

// task 5.2

// Use a for loop to loop through the array of additional tips.
// For each tip...

// - create an `li` element
// - set the `textContent` of the `li` element to be the current tip
// - append the newly created element as a child of the `ul`

let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

for (let i = 0; i < additionalTips.length; i++) {
  additionalTips[i] = document.createElement('li');
  
  document.getElementById(`#tips-list`).appendChild(additionalTips);
}
