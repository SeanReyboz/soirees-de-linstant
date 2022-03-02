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
gsap.to(".static", {
  duration: 1.2,
  x: 0,
  opacity: 1,
  ease: "back",
  delay: 1.4,
});

document.querySelector(".select").addEventListener("click", function () {
  gsap.to(".roulette", {
    duration: 0.01,
    rotation: 0,
    /*ease: CustomEase.create(
          "custom",
          "M0,0,C0,0,0.05,0.228,0.09,0.373,0.12,0.484,0.139,0.547,0.18,0.654,0.211,0.737,0.235,0.785,0.275,0.864,0.291,0.896,0.303,0.915,0.325,0.944,0.344,0.97,0.356,0.989,0.38,1.009,0.413,1.039,0.441,1.058,0.48,1.08,0.496,1.089,0.51,1.091,0.53,1.095,0.552,1.099,0.669,1.035,0.692,1.034,0.725,1.031,0.77,1.079,0.804,1.07,0.882,1.042,0.868,1.044,0.91,1.011,0.944,1,1,1,1,1"
        ),*/
    ease: "back",
  });
  /*
  //Tirage random en 1 et 10 tour précisément
  var tour = 360 * (Math.floor(Math.random() * 10) + 1);
  */

  //Tirage random en 360 degres et 3600 degres
  var tour = Math.floor(Math.random() * 3600) + 360;
  console.log(tour);
  gsap.to(".roulette", {
    duration: 6,
    rotation: tour,
    /*ease: CustomEase.create(
      "custom",
      "M0,0,C0,0,0.05,0.228,0.09,0.373,0.12,0.484,0.139,0.547,0.18,0.654,0.211,0.737,0.235,0.785,0.275,0.864,0.291,0.896,0.303,0.915,0.325,0.944,0.344,0.97,0.356,0.989,0.38,1.009,0.413,1.039,0.441,1.058,0.48,1.08,0.496,1.089,0.51,1.091,0.53,1.095,0.552,1.099,0.669,1.035,0.692,1.034,0.725,1.031,0.77,1.079,0.804,1.07,0.882,1.042,0.868,1.044,0.91,1.011,0.944,1,1,1,1,1"
    ),*/
    ease: "back",
    delay: 0.8,
  });
});
