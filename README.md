# techdegree-project-3
Interactive Form Project.
In this project I used JavaScript to improve a form for a Full Stack Conference.

I tried for the Exceeds Expectation grade by preventing users from registering for conflicting activities, implmenting real-time error message for email input, and added conditional error message to the email input.

Real-time error message implementation
I added an event listener to the email input to listen for any keyup. Once it is triggered the email validation function is called.

Conditional error message implementation
In the email validation function I added an if statement that will check the formatting of the email input. If the email input is empty or just spaces the message "Email field cannot be empty" is displayed on the form. If the email input does not contain a "@" and "." with characters before and after, the message "email address must be formatted correctly" will be displayed.