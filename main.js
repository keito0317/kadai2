var startButton;
var stopButton;
var resetButton;
var showTime;

var timer;
var startTime;
var elapsedTime = 0;
var holdTime = 0;

window.onload = function(){
showTime = document.getElementById('time');
startButton = document.getElementById('start');
stopButton = document.getElementById('stop');
resetButton = document.getElementById('reset');
}


//時間を表示する//
function measureTime(){
  timer = setTimeout(function (){
    elapsedTime = Date.now() - startTime + holdTime;
    showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 23);
    
    measureTime();
  }, 10);
}
  


//スタートボタンがクリックされたら時間を進める//
function start(){
  startTime = Date.now()
  measureTime(
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;)
}

//ストップボタンがクリックされたら時間を止める//
function stop(){
  clearInterval(timer)
  holdTime += Date.now() - startTime;
  
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

//リセットボタンがクリックされたら時間を０に戻す//
function reset(){
  clearInterval(timer)
  elapsedTime = 0;
  holdTime = 0;
  showTime.textContent = "0:0:0:0"
  
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton = true;
}
