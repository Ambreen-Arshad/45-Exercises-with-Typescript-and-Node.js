// Date 11-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 3 in typescript assignment.

// Name Cases: Store a person’s name in a variable, and then print that person’s name \n
// in lowercase, uppercase, and titlecase.

let personName : string = 'muhammad umar khan';

let lowercase : string = personName.toLowerCase() ;
let uppercase : string = personName.toUpperCase() ;
let titlecase : string = personName.split(' ').map(word =>word.charAt(0).toUpperCase()+word.slice(1).toLocaleLowerCase()).join(' ');

if(personName !==null && personName !== ""){
    console.log(`Hello ${personName}, Here are your name in :
    LowerCase : ${ lowercase}
    UpperCase : ${uppercase }
    titlecase : ${titlecase}`)
}
else{
    console.log('Please fill your name')
}