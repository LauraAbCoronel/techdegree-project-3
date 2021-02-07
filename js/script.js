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
color.disabled=true;
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