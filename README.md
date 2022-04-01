# Mr. Roboger's Neighborhood

#### Meron G.Tekie

#### Website Created to return specific selected numbers into string.

## Technologies Used

- HTML

- CSS

- JavaScript

- Jquery

- Bootstrap

## Description

This website is built to return the value of a given number in to count from zero upto the number given as an input and then converts numbers that contain 1,2,3 in to _"Beep!","Boop", and "Wont you be my neighbor?"_ respectively. And if the number contains 1 and 2 and/or 3 The application follows the hierarchical system and diplays the string of the higher number

## Setup/Installation Requirements

- Fork this [Github](https://github.com/MeronTekie/Mr.Roboger-s-Neighborhood.git) link and clone it to your machine
- Navigate through the directory
- Select the index.html File
- Click index.html file , you machine's browser (_Chrome is highly recommended_)should be able to run the file

## Known Bugs

- Issue in overwritting the previous existing output unless page is refreshed.

## Liscence

[MIT](https://opensource.org/licenses/MIT)

- Cpoyright (c) Meron G. Tekie 2022

# Specifications

## Describe: beepBoop()

- Test: "It should return an array of numbers from 0 to the user's inputted number"
- Code: beepBoop(5);
- Expected Output: [0, 1, 2, 3, 4, 5]

-Test: "It should return an error message if inpust is value is 0."

- Code:beepBoop(0)
- Expected Output:[0];

## Describe: beepBoopArray()

-- Test: "It should replace*"Wont you be my neighbor?"* for any array vlaue that has 3 number on it"

- Code: beepBoopArray(5);
- Expected Output: [0, 1, 2, "Wont you be my neighbor?", 4, 5]

-- Test: "It should replace*"Boop"* for any array vlaue that has 2 number on it"

- Code: beepBoopArray(5);
- Expected Output: 0, 1, Boop, 3, 4, 5

-- Test: "It should replace*"Beep"* for any array vlaue that has 1 number on it"

- Code: beepBoopArray(5);
- Expected Output: 0, "Beep", 2, 3, 4, 5.

-- Test: "It should follow hierarchical order for any array vlaue that contains 1 and/or 2 and/or 3 number on it"

- Code: beepBoopArray(23);
- Expected Output: "0", "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!","Beep!" "Boop", "Won't you be my neighbor?", "Beep!","Beep!" "Beep!","Beep!" "Beep!","Beep!","Boop","Boop","Boop","Won't you be my neighbor?".
