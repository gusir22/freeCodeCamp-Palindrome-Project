function validateInput(form){
    /* This function checks if the user has entered a value to #text-input
    field before executing the checkForPalidrome() function.
    If the user provides an empty value, the function alert the user to enter
    a value to the #text-input field. */


    let phrase = form['text-input'].value; // get text-input value

    // check if phrase value is empty or not
    if (phrase == ""){
        alert("Please input a value"); // alert user if empty
    } else {
        checkForPalindrome(phrase); // redirect user to checkForPalindrome if not empty
    }

    
}

function reverseStr(str) {
    /* This function reverses strings by turning them into arrays, reversing them, and re-joining
    them into a string again before returning the end result */

    return str.split('').reverse().join('');
}

function checkForPalindrome(phrase) {
    /* Checks if a phrase is a palindrome and then outputs the result
    to the #result element in index.html */

    // change phrase to lower case and replace all non-alphanumeric chars with nothing
    let originalPhrase = phrase; // store original phrase for result message output
    phrase = phrase.toLowerCase().replaceAll(/[^a-z0-9]/g,"");
    let mirror = reverseStr(phrase); // create mirror to compare phrase to

    let resultMessage; // init empty result message

    // check if phrase and mirror match
    if (phrase == mirror) {
        resultMessage = originalPhrase + " is a palindrome";
    } else {
        resultMessage = originalPhrase + " is not a palindrome";
    }

    document.getElementById('result').innerText = resultMessage; // assign results
}