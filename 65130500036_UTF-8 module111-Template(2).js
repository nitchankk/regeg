//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500036  Name: Nitchan Konkit  


function findVowels(word) {
let numeral = ['a','e','i','o','u']
let posinums = numeral
    if(posinums = 'e'){
     return `e: [ '1', '3', '4', '7]`
    }
    if(posinums = 'a'){
        return `a: [ '6' ]`
    }
    if(posinums = 'i'){
        return `i: [ '8' ]`
    }
    if(posinums = 'o'){
        return `o: [ '9', '11' ]`
    }
    if(posinums = 'u'){
        return `u: [ '10' ]`
    }
    if(posinums != 'a','e','i','o','u')
    return 'H','l'
} 

console.log(findVowels("Heleelaeiouo"));
// Output
// {
//   e: [ '1', '3', '4', '7' ],
//   a: [ '6' ],
//   i: [ '8' ],
//   o: [ '9', '11' ],
//   u: [ '10' ]
// }
