// business logic
function beepBoop(userNum) {
  userNum = parseInt(userNum);
  let roboText = [];
  for (let i = 0; i <= userNum; i++) {
    let userStr = i.toString();
    if (userStr.includes("3")) {
      roboText.push(" Won't you be my neighbor?");
    } else if (userStr.includes("2")) {
      roboText.push(" Boop");
    } else if (userStr.includes("1")) {
      roboText.push(" Beep");
    } else {
      roboText.push(userStr);
    }
  }
  return roboText.join(", ");
}
// user logic
$(document).ready(function() {
  $("form#neighbor").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#userInput").val();
    let result = beepBoop(userInput);
    let fullName1Input = $("input#fullName").val();
    $(".fullName").text(fullName1Input);
    $("#results").text(result);
    $("#resultsDisplay").show();
    
    $("#reset").click(function() {
      $("#resultsDisplay").toggle().hide();
      document.getElementById("neighbor").reset();
    });
  });
});