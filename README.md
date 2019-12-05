# Timer-Based-Quiz
# This is a timer-based quiz application that stores a quiz score client-side.
# The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." 
# At the end of the quiz the user can save their score and view it by clicking on "View Highscores"


# To begin the quiz click on the "Start Quiz" button 
# The user will be asked 5 questions 
# This is a timed quiz so the timer is initialized with a value of 75 seconds and immediately begins countdown.


# The score is calculated by time remaining. Answering quickly and correctly results in a higher score. 
# Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

# When time runs out and/or all questions are answered, the user is presented with their final score and asked 
# to enter their initials. Their final score and initials are then stored in localStorage.


# this application contains five main files
# index.html is the web page that is used for this application
# questions.js contains all of the questions needed for the application
# style.css contains the application styling
# work.js contains the JavaScript code that makes the application work.