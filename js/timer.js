(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
   
    let offer= "2023-02-20 00:00:00",
        countDown = new Date(offer).getTime(),
        x = setInterval(function() {    
   
          let now = new Date().getTime(),
              distance = countDown - now;
   
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
   
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
   
             
   
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());