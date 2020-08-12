function goForward() {
    
        window.open("index2.html");
      
  }

  function checkAnswer(){
      var answer1=document.getElementById("answer1")
      var answer2=document.getElementById("answer2")
      var answer3=document.getElementById("answer3")
      var answer4=document.getElementById("answer4")
      var answer5=document.getElementById("answer5")
      
      if (answer1=="31" || answer2=="cricket" || answer3=="Karachi" || answer4=="atom" || answer5=="31"){
          alert("congrats! you clear")
      }
      else{
          alert("better luck next time!")
      }
      
  }
 function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            alert("stop! times out")
            submit();
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


function saveData(){
    var name=document.getElementById("name");
    var roll=document.getElementById("roll");

    var student={
        name:name.value,
        roll:roll.value
    }
    firebase.database().ref('student').child("student1").push(student)
}
function submit(){
    alert("quiz has been submited")
}