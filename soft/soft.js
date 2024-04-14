const timer = 3;
let amountTime = timer * 60;
function calculateTime(){
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds<10){
        seconds = "0" + seconds;
    }
    const myVideo = document.querySelector("#myVideo")

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    
    console.log(amountTime);

    if (amountTime<0){
        stopTimer();
        amountTime = 0;
        changeVideo()
    }
    function stopTimer(){
        clearInterval(timerId);
    }
    
    function changeVideo(){
        myVideo.setAttribute("src", "chef_-_27678 (720p).mp4")
    }
    
        }

        
    



let timerId = setInterval(calculateTime, 1000);

const myButton = document.querySelector("#myButton");
myButton.addEventListener('click',function(){
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();

})

const myButtonPause = document.querySelector("#myButtonPause");
myButtonPause.addEventListener('click',function(){
    document.querySelector("#player").pause();
    document.querySelector("#myVideo").pause();
        })

    
        function videoFine(){
            const myVideo2 = document.querySelector("#myVideo2");
            
        }
