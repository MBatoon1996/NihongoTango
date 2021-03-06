// ---- DRAGGABLE ---
var container = document.querySelector("#pokePlayers");

    var activeItem = null;

    var active = false;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {

      if (e.target !== e.currentTarget) {
        active = true;

        // this is the item we are interacting with
        activeItem = e.target;

        if (activeItem !== null) {
          if (!activeItem.xOffset) {
            activeItem.xOffset = 0;
          }

          if (!activeItem.yOffset) {
            activeItem.yOffset = 0;
          }

          if (e.type === "touchstart") {
            activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
            activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
          } else {
            console.log("doing something!");
            activeItem.initialX = e.clientX - activeItem.xOffset;
            activeItem.initialY = e.clientY - activeItem.yOffset;
          }
        }
      }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
      }

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        e.preventDefault();
        if (e.type === "touchmove") {
          

          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

// ---- DRAGGABLE ----
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


var rollDie = function() {
    var faces = $('#nanmentei').val();
    var mentei = getRandomInt(faces) + 1;
    $('#saikoro').html('サイコロ： '+ mentei);
}

$('.bi-instagram').on({
    mouseenter: function(){
        $('.bi-twitter').css('opacity', '0.7');
        $('.bi-github').css('opacity', '0.7');
    },
    mouseleave: function(){
        $('.bi-twitter').css('opacity', '1.0');
        $('.bi-github').css('opacity', '1.0');
    }
});

$('.bi-twitter').on({
    mouseenter: function(){
        $('.bi-instagram').css('opacity', '0.7');
        $('.bi-github').css('opacity', '0.7');
    },
    mouseleave: function(){
        $('.bi-instagram').css('opacity', '1.0');
        $('.bi-github').css('opacity', '1.0');
    }
});

$('.bi-github').on({
    mouseenter: function(){
        $('.bi-twitter').css('opacity', '0.7');
        $('.bi-instagram').css('opacity', '0.7');
    },
    mouseleave: function(){
        $('.bi-twitter').css('opacity', '1.0');
        $('.bi-instagram').css('opacity', '1.0');
    }
});