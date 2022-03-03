/*
//Tirage random en 1 et 10 tour précisément
var tour = 360 * (Math.floor(Math.random() * 10) + 1);
*/
window.onbeforeunload = function () {
  alert("Are you really want to perform the action?");
};
var done = 0; //Variable pour validation si la roulette à déjà été lancé ou pas

//Liste des défis
var defis = [
  "1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "11 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "12 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "13 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "14 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "15 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
  "16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget.",
];

/**************** Apparitions ****************/

//Apparition carte
gsap.to(".card", { duration: 1.2, x: 0, opacity: 1, ease: "back", delay: 1 });

//Apparition roue
gsap.to(".roue", {
  duration: 1.2,
  x: 0,
  opacity: 1,
  ease: "back",
  delay: 1.2,
});

//Apparition bouton
gsap.to(".seldefi", {
  duration: 1.2,
  x: 0,
  opacity: 1,
  ease: "back",
  delay: 1.4,
});

/**************** Lancement roulette + défi ****************/

document.querySelector(".select").addEventListener("click", function () {
  //Remise à 0 de la roulette
  gsap.to(".roulette", {
    duration: 0.01,
    rotation: 0,

    ease: "back",
  });

  //Vérification si la roulette à déjà été lancé
  if (done == 0) {
    //Tirage random en 360 degres et 3600 degres
    var tour = Math.floor(Math.random() * 3600) + 360;
    //Tirage random du défi qui apparaitras
    var defi = Math.floor(Math.random() * (defis.length - 1));
    document.querySelector(".content-defi").innerHTML = defis[defi];
    gsap.to(".roulette", {
      duration: 6,
      rotation: tour,
      ease: "back",
      delay: 0.8,
    });
    gsap.to(".roue", {
      duration: 2,
      x: -424,
      ease: "expo",
      delay: 8,
    });
    gsap.to(".seldefi", {
      duration: 2,
      x: -424,
      ease: "expo",
      delay: 8,
    });
    gsap.to(".static", {
      duration: 2,
      opacity: 0,
      ease: "expo",
      delay: 8,
    });
    gsap.to(".defi", {
      duration: 2,
      opacity: 1,
      ease: "expo",
      delay: 8,
    });

    done = 1;
  } else if (done == 1) {
    //Tirage random en 360 degres et 3600 degres
    var tour = Math.floor(Math.random() * 3600) + 360;
    //Tirage random du défi qui apparaitras
    var defi = Math.floor(Math.random() * (defis.length - 1));

    gsap.to(".roulette", {
      duration: 6,
      rotation: tour,
      ease: "back",
      delay: 0.8,
    });
    gsap.to(".defi", {
      duration: 2,
      opacity: 0,
      ease: "expo",
      delay: 0.8,
    });
    setTimeout(() => {
      document.querySelector(".content-defi").innerHTML = defis[defi];
    }, 2900);
    gsap.to(".defi", {
      duration: 2,
      opacity: 1,
      ease: "expo",
      delay: 6.8,
    });
  }
});
