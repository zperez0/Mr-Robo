// business logic
function beeBoop(userNum) {

  userNum = parseInt(userNum);
    let roboText = [];
    for (let i = 0; i <= userNum; i++) {
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
  $(document).ready(function() {
    $('#neighbor').submit(function(event) {
event.preventDefault();

const fullName1Input = $('input#fullName').val();
const userInput = $('input#userInput').val();
const result = beeBoop(userInput);

$('.fullName').text(fullName1Input);
$('#results').text(result);
$('#results').show();
$('#reset').show();
// $('form#neighbor').hide();
$("#robo").show();

  //   $('#reset').click(function() {
  //     $('#neighbor').toggle().show();
  //     $('#reset').toggle().hide();
  //     $("#robo").toggle().hide();
  //     document.getElementById('#neighbor').reset();
  // });
});
});

