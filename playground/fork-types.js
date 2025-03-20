// const firstName = 'daniel';
// const middle = 'james';
// const last = `ridley`;

// const sentence = `And then he said, "Wow, she is so \'hot\' you know..." I was flabbergasted.`;
// const song = `Oh
// yeah

// I

// like

// pizza!`;

// const html = `
// <div>
//     <h2>${firstName}</h2>
//     <p>${sentence}</p>
// </div>`;
// document.body.innerHTML = html;

const floatingPointWebsite = `https://${0.1 + 0.2}.com`;
//type in window.location = floatintPointWebsite
//never store money with decimals like this const price 10.34, as you'll run in to these weird .0000034 issues
//store them as whole numbers like this const price = 1034

/*Objects*/
// const person = {
//   first: 'daniel',
//   last: 'ridley',
//   age: 44
// };

/** null and undefined */
//undefined is a variable that has not yet had a value set to it
let dog;
// console.log('dog:', dog);

//null is nothing
let somethingUndefined;
const somethingNull = null;

/** Mononyms, a perfect example: Cher and Teller
 * Cher is Cher Sarkisian, but goes by Cher
 * Teller is Raymond Teller, but had his name legally
 * changed to Teller. So, let's represent that with
 * null and undefined.
 */

const cher = {
  firstName: 'Cher'
};
console.log('cher.lastname: ', cher.lastName); //will show `undefined` because it has the potential for a value, but doesn't yet have one
const teller = {
  firstName: 'Teller',
  lastName: null
};
console.log('teller.lastname: ', teller.lastName); //will show `null` because it's nothing

/** booleans */
let isDrawing = false; //click down is true, up is false
