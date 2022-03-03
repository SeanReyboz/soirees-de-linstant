$(document).ready(function () {
  var response = [];
  var question_limit = 3;
  var question_number = 1;
  var PiqueScore = 0;
  var CoeurScore = 0;
  var TrefleScore = 0;
  var CarreauScore = 0;
  var done = 0;
  $(".heading div p").text(question_number + "/" + question_limit);

  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }

  $(".response p").click(function () {
    var getClass = this.className;
    response.push(getClass.substring(8, 10));

    console.log(response);
    $("._" + question_number).css({
      display: "block",
      visibility: "visible",
      opacity: 1,
    });
    $("._" + question_number).addClass("fadeIn");

    $("._" + (question_number - 1)).css({
      display: "none",
      visibility: "hidden",
      opacity: 0,
    });
    question_number++;
    if (question_number <= question_limit) {
      $(".heading div p").text(question_number + "/" + question_limit);
    } else {
      $(".heading div p").text(" ");
      $(".resultat").css({
        display: "block",
        visibility: "visible",
        opacity: 1,
      });
      $(".resultat").addClass("fadeIn");
      PiqueScore = Math.round(
        (getOccurrence(response, "0") / question_limit) * 100
      );
      CoeurScore = Math.round(
        (getOccurrence(response, "1") / question_limit) * 100
      );
      TrefleScore = Math.round(
        (getOccurrence(response, "2") / question_limit) * 100
      );
      CarreauScore = Math.round(
        (getOccurrence(response, "3") / question_limit) * 100
      );
      $(".pique").text("pique " + PiqueScore + "%");
      $(".coeur").text("coeur " + CoeurScore + "%");
      $(".trefle").text("trefle " + TrefleScore + "%");
      $(".carreau").text("carreau " + CarreauScore + "%");
      if (
        PiqueScore > CoeurScore &&
        PiqueScore > TrefleScore &&
        PiqueScore > CarreauScore
      ) {
        $(".description").text("à tendence Pique");
      } else if (
        CoeurScore > PiqueScore &&
        CoeurScore > TrefleScore &&
        CoeurScore > CarreauScore
      ) {
        $(".description").text("à tendence Coeur");
      } else if (
        TrefleScore > PiqueScore &&
        TrefleScore > CoeurScore &&
        TrefleScore > CarreauScore
      ) {
        $(".description").text("à tendence Trefle");
      } else if (
        CarreauScore > PiqueScore &&
        CarreauScore > CoeurScore &&
        CarreauScore > TrefleScore
      ) {
        $(".description").text("à tendence Carreau");
      } else if (CarreauScore == PiqueScore) {
        $(".description").text("à tendence Carreau et Pique");
        if (CarreauScore == TrefleScore) {
          $(".description").text("à tendence Carreau, Trefle et Pique");
        } else if (CarreauScore == CoeurScore) {
          $(".description").text("à tendence Carreau, Coeur et Pique");
        }
      } else if (CoeurScore == PiqueScore) {
        $(".description").text("à tendence Carreau et Pique");
        if (CoeurScore == TrefleScore) {
          $(".description").text("à tendence Coeur, Trefle et Pique");
        } else if (CoeurScore == CarreauScore) {
          $(".description").text("à tendence Carreau, Coeur et Pique");
        }
      } else if (TrefleScore == PiqueScore) {
        $(".description").text("à tendence Carreau et Pique");
        if (TrefleScore == CoeurScore) {
          $(".description").text("à tendence Coeur, Trefle et Pique");
        } else if (TrefleScore == CarreauScore) {
          $(".description").text("à tendence Carreau, Trefle et Pique");
        }
      } else if (TrefleScore == CoeurScore) {
        $(".description").text("à tendence Carreau et Coeur");
        if (TrefleScore == PiqueScore) {
          $(".description").text("à tendence Pique, Trefle et Coeur");
        } else if (TrefleScore == CarreauScore) {
          $(".description").text("à tendence Carreau, Trefle et Coeur");
        }
      } else if (TrefleScore == CarreauScore) {
        $(".description").text("à tendence Trefle et Carreau");
        if (TrefleScore == PiqueScore) {
          $(".description").text("à tendence Pique, Trefle et Carreau");
        } else if (TrefleScore == CoeurScore) {
          $(".description").text("à tendence Coeur, Trefle et Carreau");
        }
      } else if (CoeurScore == CarreauScore) {
        $(".description").text("à tendence Coeuret Carreau");
        if (CoeurScore == PiqueScore) {
          $(".description").text("à tendence Pique, Coeur et Carreau");
        } else if (CoeurScore == TrefleScore) {
          $(".description").text("à tendence Coeur, Trefle et Carreau");
        }
      } else if (
        CoeurScore == CarreauScore &&
        CoeurScore == PiqueScore &&
        CoeurScore == TrefleScore
      ) {
        $(".description").text("à tendence Coeur, Trefle, Carreau et Pique");
      }
    }
  });
  $(".carte").click(function () {
    var getClass = this.className;
    var response = getClass.substring(6, 8);
    var pos = $("." + response).position();
    var height = window.innerHeight;
    console.log(height);
    console.log(response);
    console.log(pos.top + 90);
    console.log(pos.left);
    if (done == 0) {
      if ($(".carte").attr("class") != "carte " + response) {
      }
      gsap.to(".carte", {
        duration: 2,
        opacity: 0,
        ease: "expo",
        delay: 0.1,
      });
      gsap.to("." + response, {
        duration: 2,
        opacity: 1,
        ease: "expo",
        delay: 0.1,
      });

      setTimeout(() => {
        $(".carte").css({
          display: "none",
          visibility: "hidden",
          marginRight: "unset",
        });
        $("." + response).css({
          display: "unset",
          visibility: "visible",
          position: "absolute",
          marginRight: "unset",
          bottom: pos.top + 110,
          left: pos.left + 35,
        });
        $(".main").css({
          position: "relative",
        });
        $("img").css({
          maxWidth: "unset",
        });
      }, 2100);
      if (response == "c1") {
        console.log("1");
        gsap.to("." + response, {
          duration: 1,
          rotation: 0,
          scale: 1.5,
          x: -(pos.left + 35),
          y: -(height + pos.top * 1.5 - 450),

          delay: 2.1,
        });
      } else if (response == "c2") {
        console.log("2");
        gsap.to("." + response, {
          duration: 1,
          rotation: 0,
          scale: 1.5,
          x: -(pos.left + 35),
          y: -(height + pos.top * 1.5 - 450),

          delay: 2.1,
        });
      } else if (response == "c3") {
        console.log("3");
        gsap.to("." + response, {
          duration: 1,
          rotation: 0,
          scale: 1.5,
          x: -(pos.left + 35),
          y: -(height + pos.top * 1.5 - 450),

          delay: 2.1,
        });
      } else if (response == "c4") {
        console.log("4");
        gsap.to("." + response, {
          duration: 1,
          rotation: 0,
          scale: 1.5,
          x: -(pos.left + 35),
          y: -(height + pos.top * 1.5 - 450),

          delay: 2.1,
        });
      } else if (response == "c5") {
        console.log("5");
        gsap.to("." + response, {
          duration: 1,
          rotation: 0,
          scale: 1.5,
          x: -(pos.left + 35),
          y: -(height + pos.top * 1.5 - 450),

          delay: 2.1,
        });
      } else if (response == "c6") {
        console.log("6");
        gsap.to("." + response, {
          duration: 1,
          rotation: 0,
          scale: 1.5,
          x: -(pos.left + 35),
          y: -(height + pos.top * 1.5 - 450),

          delay: 2.1,
        });
      }
      /*$(".carte").css({
      display: "none",
      visibility: "hidden",
      oppacity: 0,
      marginRight: "unset",
    });
    $("." + response).css({
      display: "block",
      visibility: "visible",
      oppacity: 1,
    });*/
      $("." + response).removeClass("hover" + response);
      $(".main").addClass("translate");
      done = 1;
    } else if (done == 1) {
      gsap.to("." + response, {
        duration: 1,
        rotation: 0,
        rotationY: 180,

        delay: 0.1,
      });
      setTimeout(() => {
        document.querySelector("." + response).src = "./images/pique_card.svg";
      }, 1100);
    }
  });
});
