# _Mr. Roboger's Neighborhood_

#### By _**Z Perez**_

#### _A web application created to take input from the user and return with a new string._

## Links
_ _

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Description

_This web application is designed to take a number from the user and return a range of numbers and strings by replacing numbers containing 1, 2, or 3 with a message._

## Setup/Installation Requirements

* _Open [GitHub](https://github.com/)_
* _Copy repository url_
* _Clone this repository to your desktop_
* _Open program-lang-selector/index.html_
* _Drag and drop into browser_

## Tests:

_Describe: beepBoop()_

_Test: "It should return 0 if 0 is inputted."
Code: beepBoop(0);
Expected Output: [0]_

_Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: const userNum = [0,1,2,3];
beepBoop(3);
Expected Output: [0,1,2,3]_

_Test: "It should return Beep if one is inputted"
Code: beepBoop(1);
Expected Output: "0, Beep"_

_Test: "It should return Boop if two is inputted"
Code: beepBoop(2);
Expected Output: "0, Beep, Boop"_

_Test: "It should return Won't you be my neighbor? if three is inputted"
Code: beepBoop(3);
Expected Output: "0, Beep, Boop, Won't you be my neighbor"_

_Test: "It should return Won't you be my neighbor? if there is a three in the number"
Code: beepBoop(13);
Expected Output: "0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, "Won't you be my neighbor?"_

_Test: "It should return Boop if there is a two in the number"
Code: beepBoop(12);
Expected Output:
"0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop"_

## Known Bugs

* _No known issues_

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _Z Perez_