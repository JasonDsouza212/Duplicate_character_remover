<div id="header" align="center">
  <img src="https://i.ibb.co/r2yR6QM/Screenshot-from-2023-03-18-20-19-36.png" alt="Screenshot-from-2023-03-18-20-19-36" border="0"><br>
  <img src="https://i.ibb.co/bHcjXGp/Screenshot-from-2023-03-18-21-53-07.png" alt="Screenshot-from-2023-03-18-21-53-07" border="0">
    <h1> Duplicate Character Remover </h1>
    <p><strong><em>"Say goodbye to repetitive characters 👋👋"</em></strong></p>
    <!-- to change tagline if necessary -->
    </div> <br>

# Welcome to :<br> Duplicate Character Remover

# 🎥 Project Overview

# 🏃‍♂️ How to run the project locally?

### Tech Stack

This project uses:

- [React](https://reactjs.org/)

### Prerequisites

Before installation, you need to have the following:

- [Node](https://nodejs.org) installed
- Basic knowledge of [Git](https://git-scm.com/)

### Assignment  Demo 
- [Live site](https://housewarehq.vercel.app/)

### 🛠️ Installation

1. Fork the repo
2. Clone the repository `git clone https://github.com/your-username/HousewareHQ/houseware---frontend-engineering-octernship-JasonDsouza212.git`
3. Run `cd houseware---frontend-engineering-octernship-JasonDsouza212` to change the working directory
4. Run `cd app` to change the working directory
4. Run `npm ci` Or `npm clean-install` to install all dependencies
5. Run `npm start` to start the application
6. Visit [http://localhost:3000](http://localhost:3000) to view the application


## Screen 1:
+ Provides an input field and a button with text 'Submit'.
+ User can input any value in the input field.
+ Clicking on the button redirects the user to screen 2.
+ If the input field is empty or has only space characters, an alert is shown asking the user to provide a non-empty value. In this scenario, the user is not redirected to screen 2.

## Screen 2:
+ Iterates over each character of the string and renders them as a card on the UI.
+ Each card has the character and a delete icon on top
+ Clicking on the delete icon deletes all duplicate instances of the chosen character in the string. Only the clicked instance of the character remains on the screen.
+ Cards for the same characters have the same background color.
+ If there are no more characters with greater than 1 appearance in the string, a success header is rendered.
+ The original string and the new resultant string are shown.
+ A back button is provided to go back to screen 1.
+ If the user goes back to screen 1, the input field is cleared/empty.

## The app 🖥️ takes care of all the edge cases mentioned in the assignment 📋
+ It deletes all duplicates, regardless of capitalization, by converting all input characters to uppercase during processing.
+ The app can handle any non-alphabetic characters, including special characters, as input and perform operations on them.
+ It can remove leading and trailing spaces from input and automatically delete extra spaces between two words when the submit button is clicked.
+ When deleting a long string with multiple words, if a word is deleted in the middle of the process, it will automatically remove the extra space to avoid having two spaces between words.
+ Also, the mobile view is taken care of using media queries.

## Enhancements
+ when the input string is large the mobile UI doesnt look too good 
+ if the app has extra functionalities we can create routes for each function
+ I intentionally treadted all characters as Uppercase beasue in sentence no matter what case the character it gives same value in a string to do this I added another algo dor it if its not needed We can remove that by this all uppercase and lower case can be distinguied.

## Socials
[Portfolio](https://jasondsouza212.github.io/My-Portfolio/) |
[Twitter](https://twitter.com/_Jason_Dsouza) |
[Email](mailto:jasondsouza212@gmail.com) |
[Github](https://github.com/JasonDsouza212) |
[Linkedin](https://www.linkedin.com/in/jason-dsouza-130b421ba/) 






