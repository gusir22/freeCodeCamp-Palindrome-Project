function validateInput(form){
    let phrase = form['text-input'].value;

    if (phrase == ""){
        alert("Please input a value");
    } else {
        checkForPalindrome(phrase);
    }

    
}

function reverseStr(str) {
    /* This function reverses strings by turning them into arrays, reversing them, and re-joining
    them into a string again before returning the end result */
    
    return str.split('').reverse().join('');
}

function checkForPalindrome(phrase) {

    // change phrase to lower case and replace all non-alphanumeric chars with nothing
    phrase = phrase.toLowerCase().replaceAll(/[^a-z0-9]/g,"");
    mirror = reverseStr(phrase); // create mirror to compare phrase to


    console.log(`Phrase: ${phrase}`);
    console.log(`Mirror: ${mirror}`);
}