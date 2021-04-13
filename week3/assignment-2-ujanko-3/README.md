# Hello and welcome to IT338

Before starting on the assignment make sure that you have Git installed
on your machine and that you have a GitHub Account.
For more information about the git commands, look at the course website.

# For full credit you must:

- Create a form that will prompt the users for First Name, Last Name, Occupation (dropdown), [DOB](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) and Agree to Terms and Conditions (checkbox).
- Style the form using bootstrap. 
- Add a form watcher that will change a isValid bool (that you have to define in the data) if the form is valid using the following rules:
  * First Name must not be empty.
  * Last Name must not be empty.
  * Occupation must not be empty.
  * Agree to Terms and Conditions must not be true.
- Bind the isValid to the disabled property of the button so that the button cannot be clicked until the form is valid. 
- Use a computed property to capitalize the name from the form regardless of what the capitalization the user used. (BOB => Bob, bob => Bob)
- Use the new property to greet the user somewhere on the page but only if the property is not empty

# For committing your work:

- Add all the files with the commands discussed in class.
- Create a commit with a meaningful message.
- Push your changes to GitHub

# For Extra credit (2 points):

- Create an on submit event that will, if the form is valid, covert the data to a JSON string, hide the form from the user and show a thank you message.  

