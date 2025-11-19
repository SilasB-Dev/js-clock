var dot = document.createElement("div");
dot.id = "dot";
document.body.appendChild(dot);

//  Grab the relevant Elements and store them inside a Variable
var hourhand = document.getElementsByClassName("hour-hand")[0];
var minhand = document.getElementsByClassName("min-hand")[0];
var sechand = document.getElementsByClassName("second-hand")[0];

//  Clock Function for updating the hands
function clock() {

  //    Get a new Date Object and read relevant Data from it
  var time = new Date();
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hour = time.getHours();
  //    Convert the Hour, Minute and Second count and convert them to degrees
  hour = hour * 30 + 180;
  min = min * 6 + 180;
  sec = sec * 6 + 180;
  //    Rotate the Elements
  hourhand.style.transform = `rotate(${hour}deg)`;
  minhand.style.transform = `rotate(${min}deg)`;
  sechand.style.transform = `rotate(${sec}deg)`;
}


// Test for programmaticly adding additional Marks in the Clock
/* for (let i = 0; i < 12; i++) {
  let mark = document.createElement("div"); 
  mark.className = "mark"
  mark.style.top = `${Math.sin(i/Math.)*250+250}px`
  mark.style.left = `${Math.cos(i)*200+250}px`

  document.body.appendChild(mark)

} */

// Execute the update and schedule the execution of clock every 1000ms/second
clock();
setInterval(clock,1000);
