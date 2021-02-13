// nameInput contains the input element for name
const nameInput = document.querySelector('#name');
// sets the name field to focus so when page loads name input is selected.
nameInput.focus();


//variables of the other job input element and job role select element
const otherJob = document.querySelector('#other-job-role');
const jobRole = otherJob.previousElementSibling;
//as default we want to have it hidden
otherJob.style.display = 'none';
//event listener will listen for any change in the select element
jobRole.addEventListener('change',() =>{
    // if the user selects the job role of other the other job input element with show on the website
    if (jobRole.value === 'other') {
        otherJob.style.display = '';
    } else {
        otherJob.style.display = 'none';
    }
})


//gets the element needed to implement the color dropdown list and by default make the dropdown list disabled until design is selected
const color = document.querySelector('#color');
const colorChild = color.children;
const design = document.querySelector('#design');
color.disabled = true;
//event listener will listen to any changes made in the design dropdown list
design.addEventListener('change', () => {
    //enables the color dropdown list
    color.disabled = false;
    //makes the first hidden element selected when a change in the design dropdone list is made
    colorChild[0].selected = true;
    //only displays the appropriate color options dependent on the design selection and hides the other options
    if (design.value === 'js puns') {
        for (let i = 0; i < colorChild.length; i++) {
            if (colorChild[i].dataset.theme === 'js puns') {
                colorChild[i].hidden = false;
            } else {
                colorChild[i].hidden = true;
            }
        }
    } else {
        for (let i = 0; i < colorChild.length; i++) {
            if (colorChild[i].dataset.theme === 'heart js') {
                colorChild[i].hidden = false;
            } else {
                colorChild[i].hidden = true;
            }
        }
    }
})


//gets the fieldset element and the p element that displays the total cost
const activitiesFieldset = document.querySelector('#activities');
const costDisplay = document.querySelector('#activities-cost');
let total = 0;
//adds an event listener to the entire field set and only looks for changes in the checkboxes
activitiesFieldset.addEventListener('change', (e) => {
    const activities = document.querySelectorAll('[type = checkbox]');
    // if the checkbox is checked the cost is added to the total if not then the cost is subtracted from the total
    if (e.target.checked) {
        total += parseInt(e.target.dataset.cost);
        // loops activities variable and disables elements with the same dayAndTime
        for (let i = 0; i < activities.length; i++) {
            // if the activity in the array is the activity that triggered the event listener then continue to the next array element
            if (activities[i].name === e.target.name) {
                continue;
            }
            // if the activity matches the day an time of the activity with the checked box then disable the checkbox and add disabled class to the parent
            if (activities[i].dataset.dayAndTime === e.target.dataset.dayAndTime) {
                activities[i].disabled = true;
                activities[i].parentElement.className = 'disabled';
            }
        }
    } else {
        total -= parseInt(e.target.dataset.cost);
        //loops through activities varibale and enables the checkbox on all activites matching the dayAndTime and removes the class of the parent element
        for (let i = 0; i < activities.length; i++) {
            if (activities[i].dataset.dayAndTime === e.target.dataset.dayAndTime) {
                activities[i].disabled = false;
                activities[i].parentElement.className = '';
            }
        }
    }
    costDisplay.textContent =  `Total: $${total}`;
})


/*gets the elements needed to implement the payment type
by default credit card is selected and paypay and bitcoin dev elements are hidden*/ 
const payment = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';
//by default credit card is selected for payment type
payment.children[1].selected = true;
//adds an event listener to the payment dropdown list and changes what is displayed depending on what is selected
payment.addEventListener('change', () => {
    switch (payment.value) {
        case 'credit-card':
            creditCard.style.display = '';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
            break;
        case 'paypal':
            creditCard.style.display = 'none';
            paypal.style.display = '';
            bitcoin.style.display = 'none';
            break;
        case 'bitcoin':
            creditCard.style.display = 'none';
            paypal.style.display = 'none';
            bitcoin.style.display = '';
            break;
        // if for some reason there is an error credit card will be selected as default
        default:
            payment.children[1].selected = true;
            creditCard.style.display = '';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
            break;
    }
})


//validates form inputs
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
//adds an event listener to form element that listens for submit
form.addEventListener('submit', (e) => {
    //if any validation comes back false the form will not be submitted
    if (!validateName(nameInput.value) |
        !validateEmail(emailInput.value) |
        !validateActivities(total) |
        !validateCreditCard()) {
        e.preventDefault();
    }

})
/*
    validateds the name input
    returns false if name is empty or just spaces and indicateError function is called passing in the name input element
    returns else returns true and indicate Valid appears
*/
function validateName(name) {
    if (/^\s*$/g.test(name)) {
        indicateError(nameInput);
        return false;
    } else {
        indicateValid(nameInput);
        return true;
    }
}
/*
    validates email 
    returns true if the email contains some letters followed by @ followed by more leters and a . and more letters
    indicateValid function is called if true
    indicateError function is called if false
*/
function validateEmail(email) {
    if (/^[^@]+@[^@.]+\.[a-z]+$/i.test(email)) {
        indicateValid(emailInput);
        return true;
    } else {
        indicateError(emailInput);
        return false;
    }
}
/*
    validates if any activities were selected
    returns true if the total cost of activites is greater than 0 and indicateValid function is called
    if false indicateError function is called.
*/
function validateActivities(total) {
    if (total>0) {
        indicateValid(costDisplay);
        return true;
    } else {
        indicateError(costDisplay);
        return false;
    }
}
/*
first checks to see if payment type selected was credit card
if not then funtion returns true
if creditcard was selected then the function returns true if
creditcard number is between 13-16 numbers and only numbers,
zipcode has only 5 numbers and the cvv code is only 3 numbers
*/
function validateCreditCard() {
    if (payment.value === 'credit-card') {
        // variable valid is to track if any of the che
        let valid = true;
        const creditCardNum = document.querySelector('#cc-num');
        const zip = document.querySelector('#zip');
        const cvv = document.querySelector('#cvv');
        if (/^\d{13,16}$/gm.test(creditCardNum.value)) {
            indicateValid(creditCardNum);
        } else {
            indicateError(creditCardNum);
            valid = false;
        }
        if (/^\d{5}$/gm.test(zip.value)) {
            indicateValid(zip);
        } else {
            indicateError(zip);
            valid = false;
        }
        if (/^\d{3}$/gm.test(cvv.value)) {
            indicateValid(cvv);
        } else {
            indicateError(cvv);
            valid = false;
        }
        return valid;
    } else {
        return true
    }
}


/*
    indicateError function takes in an element that has an invalid input
    not-valid class gets added to the parent element and valid class gets removed from the parent element
    the last child of the parent contains a hint for the users but the hint class in the last child has display = none
    so the class hint is removed from the last child
*/
function indicateError(inputElement) {
    const parent = inputElement.parentElement;
    parent.classList.add('not-valid');
    parent.classList.remove('valid');
    parent.lastElementChild.classList.remove('hint');
}

/*
    indicateValid function takes in an element that has a valid input
    valid class gets added to the parent element and not-valid class gets removed from the parent element
    the last child of the parent contains a hint for the users so the class hint is added to the last child to hide the hint
*/
function indicateValid(inputElement) {
    const parent = inputElement.parentElement;
    parent.classList.add('valid');
    parent.classList.remove('not-valid');
    parent.lastElementChild.classList.add('hint');
}

//add focus class to the activities in focus
activitiesFieldset.addEventListener("focusin", (e) => {
    e.target.parentElement.className = "focus";
})
//removes focus class to the activites out of focus
activitiesFieldset.addEventListener('focusout', (e) => {
    e.target.parentElement.className = ' ';
})

