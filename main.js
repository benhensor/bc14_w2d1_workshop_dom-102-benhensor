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
  //document.title = `${pennies} pennies`;
  pennyTitleDisplay()
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

for (let i = 0; i < additionalTips.length; i++) {           // for loop indexing the array 'additionalTips'
  let tips = document.createElement('li');                  // create a variable 'tips' and assign it to a new list element
  tips.textContent = additionalTips[i];                     // add the text of each entry in the array to a new list element
  document.getElementById(`tips-list`).appendChild(tips);   // add the new tips to the existing list
}

// bonus task 1

let tipsList = document.getElementById(`tips-list`);        // new variable assigned to the ul 'tips-list'
tipsList.removeChild(tipsList.lastElementChild);            // removes the last child of that element

// bonus task 2

// Put the code from task 3 in a function
// Can you figure out how to have that function be called each time the DOUBLE EM! button is clicked?

function pennyTitleDisplay() {
  document.title = `${pennies} pennies`; 

}

function multiFunc() {
  handleClick();
  pennyTitleDisplay();
}

// bonus task 3 - GO NUTS

// on clickme, flip the image

let picFlip = document.getElementById('rich-man');

function flipPic() {
  if (picFlip.style.transform === '(180deg)') {
    picFlip.style.transform = 'rotate(0deg)';
 } else {
    picFlip.style.transform = 'rotate(180deg)';
  }
}