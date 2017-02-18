var gmail;

function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}

var playShredSound = function() {
  console.log("delete something");
  var a = document.getElementById("sound");
  if (!a.paused ) {
    a.pause();
    a.currentTime = 0;
  }
  a.play();
}

var main = function() {
  // NOTE: Always use the latest version of gmail.js from
  // https://github.com/KartikTalwar/gmail.js
  gmail = new Gmail();
  gmail.observe.on("delete", playShredSound);
  console.log('Hello,', gmail.get.user_email())
}

refresh(main);
