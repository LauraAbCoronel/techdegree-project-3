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