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
  "Fais ce qu'il te plaît",
  "Réalise ton instant avec un accent imposé",
  "Réalise ton instant avec des mots ou un thème imposé",
  "Réalise ton instant avec une émotion imposée",
  "Réalise ton instant avec un changement d'émotion",
  "Réalise ton instant dans un style imposé",
  "Réalise ton instant à la façon de...",
  "Propose un medley",
  "Propose un mashup",
  "Réalise ton instant avec une contrainte temporelle",
  "Réalise ton instant avec une contrainte spatiale",
  "Réalise ton instant avec une contrainte physique",
  "Réalise ton instant en mode chorale",
  "Réalise ton instant à cappella",
  "Raconte ou performe un moment qui a changé ta vie",
  "Pendant ton instant, apprends quelque chose au public",
  "Refais un morceau ou un instant qui vient d'avoir lieu dans la soirée",
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
    document.querySelector(".select").setAttribute("disabled", "");
    document.querySelector(".select").style.backgroundColor = "black";
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
    setTimeout(() => {
      document.querySelector(".select").removeAttribute("disabled", "");
      document.querySelector(".select").style.backgroundColor = "#ed0202";
    }, 10000);
  } else if (done == 1) {
    document.querySelector(".select").setAttribute("disabled", "");
    document.querySelector(".select").style.backgroundColor = "black";
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
    setTimeout(() => {
      document.querySelector(".select").removeAttribute("disabled", "");
      document.querySelector(".select").style.backgroundColor = "#ed0202";
    }, 8000);
  }
});
