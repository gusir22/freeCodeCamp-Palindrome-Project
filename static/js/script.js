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
    let originalPhrase = phrase; // store original phrase for result message output
    phrase = phrase.toLowerCase().replaceAll(/[^a-z0-9]/g,"");
    let mirror = reverseStr(phrase); // create mirror to compare phrase to

    let resultMessage; // init empty result message

    if (phrase == mirror) {
        resultMessage = originalPhrase + " is a palindrome";
    } else {
        resultMessage = originalPhrase + " is not a palindrome";
    }

    document.getElementById('result').innerText = resultMessage; // assign results


    console.log(`Phrase: ${phrase}`);
    console.log(`Mirror: ${mirror}`);
}