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
  "Fait ce qu'il te plait avec un accent suisse",
  "Fait ce qu'il te plait avec un accent québécois",
  "Fait ce qu'il te plait avec un accent du ch'nord",
  "Fait ce qu'il te plait en yaourt",
  "Fait ce qu'il te plait en 1 minute 30",
  "Fait ce qu'il te plait en 2 minutes",
  "Fait ce qu'il te plait avec quelqu'un du public.",
  "Fait ce qu'il te plait à la façon de Jean-Claude Van Damme (incohérence entre les phrases)",
  "Fait ce qu'il te plait à la façon de Whitney Houston",
  "Fait ce qu'il te plait à la façon de Michael Jackson",
  "Fait ce qu'il te plait à la façon de Johnny Hallyday",
  "Fait ce qu'il te plait avec musiciens/artistes présent",
  "Fait ce qu'il te plait en faisant un medley",
  "Fait ce qu'il te plait en faisant un mélange",
  "Fait ce qu'il te plait en faisant un mashup",
  "Fait ce qu'il te plait en reverse",
  "Fait ce qu'il te plait en parlant vite",
  "Fait ce qu'il te plait en marchant à l'envers",
  "Fait ce qu'il te plait en courant",
  "Fait ce qu'il te plait au ralenti",
  "Fait ce qu'il te plait avec plusieurs instruments",
  "Fait ce qu'il te plait en mode chorale",
  "Fait ce qu'il te plait en mode 'a cappella'",
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
