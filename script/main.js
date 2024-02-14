const soundEffects = {
  love: './sound/love.mp3',
  pop: './sound/pop.mp3',
  whoosh1: './sound/whoosh1.mp3',
  whoosh2: './sound/whoosh2.mp3',
  typing: './sound/typing.mp3',
  sent: './sound/sent.mp3',
  paper: './sound/paper.mp3',
  water: './sound/water.mp3',
  mess: './sound/mess.mp3',
};

const audio = new Audio(soundEffects['love']);
audio.volume = 0.6;
// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  // Autoplay the audio when the page is loaded
  function playSound(ideaId) {
    const audio = new Audio(soundEffects[ideaId]);
    audio.play().catch(error => {
      console.log(`Unable to play sound for ${ideaId}: ${error.message}`);
    });
  }
  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
    onStart: function() {
      playSound('whoosh1');
    },
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",

  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
      
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2",
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
      onStart: function() {
        playSound('typing');
      },
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      { 
        visibility: "visible",
      },
      0.05,
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "#ff6f77",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7,ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "#ff3334",
      color: "#fff",
      onStart: function() {
        playSound('paper');
      },
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5",)
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
        onStart: function() {
          playSound('mess');
        },
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
        onStart: function() {
          playSound('whoosh2');
        },
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
      onStart: function() {
        playSound('typing');
      },
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#fff",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
        onComplete: fadeOutAudio,
      },
      "+=1",
      
    );
  // tl.seek("currentStep");
  // tl.timeScale(2);
  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
    audio.currentTime = 0;
    audio.play();
  });

};

function fadeOutAndStop(audioElement, fadeDuration) {
  var volume = audioElement.volume;
  var fadeInterval = fadeDuration / 100;

  var fadeOut = setInterval(function () {
      if (volume > 0) {
          volume -= 0.01;
          audioElement.volume = volume.toFixed(2);
      } else {
          clearInterval(fadeOut);
          audioElement.pause();
          audioElement.volume = 0.6; // Reset volume for future play
      }
  }, fadeInterval);
}
// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};
// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

window.addEventListener('load', function() {
  audio.play().catch(error => {
    console.log('Autoplay was prevented. You may want to provide a user interface to start the audio.');
  }).finally(() => {
    resolveFetch().then(() => {
      animationTimeline();
    });
  });
});

function fadeOutAudio() {
  fadeOutAndStop(audio, 4000); // Thay đổi giá trị 2000 nếu bạn muốn thay đổi thời lượng giảm dần
}
