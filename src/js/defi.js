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
  "1 - Fait ce qu'il te plait avec un accent (suisse, québécois, en yaourt…)",
  "2 - Fait ce qu'il te plait en improvisation avec mots ou thème imposés",
  "3 - Fait ce qu'il te plait dans un temps limité (par exemple : en 1 minute 30)",
  "4 - Fait ce qu'il te plait avec quelqu'un du public.",
  "5 - Fait ce qu'il te plait avec musiciens/artistes imposés",
  "6 - Fait ce qu'il te plait avec tout le monde",
  "7 - Fait ce qu'il te plait dans un style imposé",
  "8 - Fait ce qu'il te plait en faisant un medley, un mélange, un mashup",
  "9 - Fait ce qu'il te plait avec un objet",
  "10 - Fait ce qu'il te plait avec une contrainte temporelle (par exemple : à l’envers, en accélérant)",
  "11 - Fait ce qu'il te plait avec une contrainte spatiale (par exemple : à l’envers, en se déplaçant)",
  "12 - Fait ce qu'il te plait sur plusieurs instruments / dans plusieurs discipline",
  "13 - Fait ce qu'il te plait en mode chorale/a cappella",
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
