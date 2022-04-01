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
