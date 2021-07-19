// Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// The murderer will be be Miss Scarlet. All the variables/functions are declared within the same scope.


// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// This will break when changeMurderer() is called because it will try to assign a value to a const variable.


// Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first verdict will be Mrs Peacock and the second verdict will be Professor Plum. This is because the murderer variable is declared within the declareMurderer function and so only has scope inside that function. The murderer variable declaration that assigns Professor Plum isn't changed by the declareMurderer function.


// Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// suspectThree will still be Mrs Peacock even though the suspects variable will log Colnel Mustard as the third suspect. This is because the declareAllSuspects function declared and changed the variable within its code block so it will be seen as a separate variable. 


// Episode 5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function (newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function () {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// verdict will be Revolver, scenario is declared as a const but the key:value pairs can still be modified. 