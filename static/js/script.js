function validateInput(form){
    let phrase = form['text-input'].value;

    if (phrase == ""){
        alert("Please input a value");
    } else {
        checkForPalindrome(phrase);
    }

    
}

function checkForPalindrome(phrase) {
    console.log(phrase);
}