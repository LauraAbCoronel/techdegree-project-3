// nameInput contains the input element for name
const nameInput = document.querySelector('#name');
// sets the name field to focus so when page loads name input is selected.
nameInput.focus();

//otherJob contains the input element for other Job text input
const otherJob = document.querySelector('#other-job-role');
//as default we want to have it hidden
otherJob.style.display = 'none';
const jobRole = otherJob.previousElementSibling;
jobRole.addEventListener('change',() =>{
    if (jobRole.value === 'other') {
        otherJob.style.display = '';
    } else {
        otherJob.style.display = 'none';
    }
})