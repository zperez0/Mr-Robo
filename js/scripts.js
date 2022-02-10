// business logic
function beeBoop(userInput) {

  userInput = parseInt(userInput);
    let roboText = [];
    for (let i = 0; i <= userInput; i++) {
      let userStr = i.toString();
  
      if (userStr.includes('3')) {
        roboText.push("Won't you be my neighbor?");
      } else if (userStr.includes('2')) {
        roboText.push("Boop");
      } else if (userStr.includes('1')) {
        roboText.push("Beep");
      } else {
        roboText.push(userStr);
      }
    }
    return roboText;
  }


  // user logic
  $(document).ready(function()
