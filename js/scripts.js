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
    $('form#neighbor').submit(function(event) {
event.preventDefault();

const fullName = $('input#fullName').val();
const userNum = $('input#userNum').val();

$('.fullName').text(fullName);
$('.result').show();
$('#reset').show();
$('#neighbor').hide();
$("#robo").hide();


    $('#reset').click(function() {
      $('#neighbor').toggle().show();
      $('#reset').toggle().hide();
      $("#robo").toggle().hide();
      document.getElementById('neighbor').reset();
  });
});
});
