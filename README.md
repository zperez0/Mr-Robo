Describe: beepBoop()

<!-- test 1 -->
Test: "It should return 0 if 0 is inputted."
Code: beepBoop(0);
Expected Output: [0]

<!-- test 2 -->
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: 
const userNum = [0,1,2,3];
beeBoop(3);
Expected Output: [0,1,2,3]

<!-- test 3 -->
Test: "It should return Beep if one is inputted"
Code:
beeBoop(1);
Expected Output: "0, Beep"

<!-- test 4 -->
Test: "It should return Boop if two is inputted"
Code:
beeBoop(2);
Expected Output: "0, Beep, Boop"

<!-- test 5 -->
Test: "It should return Won't you be my neighbor? if three is inputted"
Code:
beeBoop(3);
Expected Output: "0, Beep, Boop, Won't you be my neighbor"

<!-- test 6 -->
Test: "It should return Won't you be my neighbor? if there is a three in the number"
Code:
beeBoop(13);
Expected Output: "0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, "Won't you be my neighbor?"

<!-- test 7 -->
Test: "It should return Boop if there is a two in the number"
Code:
beeBoop(12);
Expected Output:
"0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop"