var dot = document.createElement("div")
dot.id = "dot"
document.body.appendChild(dot)


var hourhand = document.getElementsByClassName("hour-hand")[0]
var minhand = document.getElementsByClassName("min-hand")[0]
var sechand = document.getElementsByClassName("second-hand")[0]

function clock(){
  var time = new Date()
  var sec = time.getSeconds()
  var min = time.getMinutes()
  var hour = time.getHours()

  hour = hour * 30 + 180
  min = min * 6 + 180
  sec = sec * 6 + 180

  hourhand.style.transform = `rotate(${hour}deg)`
  minhand.style.transform = `rotate(${min}deg)`
  sechand.style.transform = `rotate(${sec}deg)`
}

for (let i = 0; i < 12; i++) {
    let mark = document.createElement("div"); 
    mark.className = "mark"


    document.body.appendChild(mark)

}


clock()
setInterval(clock,1000)
