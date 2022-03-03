$(document).ready(function () {
  var response = [];
  var question_limit = 10;
  var question_number = 1;
  var PiqueScore = 0;
  var CoeurScore = 0;
  var TrefleScore = 0;
  var CarreauScore = 0;
  $(".heading div p").text(question_number + "/" + question_limit);

  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }

  $(".response .carte").click(function () {
    var getClass = $(this).find("p").attr("class");
    console.log(getClass);
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
      if (
        PiqueScore > CoeurScore &&
        PiqueScore > TrefleScore &&
        PiqueScore > CarreauScore
      ) {
        $(".description").text("à tendence Pique");
        $(".first_card").text("pique à " + PiqueScore + "%");
        $(".c1").attr("src", "./images/pique_card.svg");
        $(".second_card").text("coeur à " + CoeurScore + "%");
        $(".c2").attr("src", "./images/coeur_card.svg");
        $(".third_card").text("trefle à " + TrefleScore + "%");
        $(".c3").attr("src", "./images/trefle_card.svg");
        $(".four_card").text("carreau à " + CarreauScore + "%");
        $(".c4").attr("src", "./images/carreau_card.svg");
      } else if (
        CoeurScore > PiqueScore &&
        CoeurScore > TrefleScore &&
        CoeurScore > CarreauScore
      ) {
        $(".description").text("à tendence Coeur");
        $(".first_card").text("coeur à " + CoeurScore + "%");
        $(".c1").attr("src", "./images/coeur_card.svg");
        $(".second_card").text("pique à " + PiqueScore + "%");
        $(".c2").attr("src", "./images/pique_card.svg");
        $(".third_card").text("trefle à " + TrefleScore + "%");
        $(".c3").attr("src", "./images/trefle_card.svg");
        $(".four_card").text("carreau à " + CarreauScore + "%");
        $(".c4").attr("src", "./images/carreau_card.svg");
      } else if (
        TrefleScore > PiqueScore &&
        TrefleScore > CoeurScore &&
        TrefleScore > CarreauScore
      ) {
        $(".description").text("à tendence Trefle");
        $(".first_card").text("trefle à " + TrefleScore + "%");
        $(".c1").attr("src", "./images/trefle_card.svg");
        $(".c1").attr("src", "./images/trefle_card.svg");
        $(".second_card").text("pique à " + PiqueScore + "%");
        $(".c2").attr("src", "./images/pique_card.svg");
        $(".third_card").text("coeur à " + CoeurScore + "%");
        $(".c3").attr("src", "./images/coeur_card.svg");
        $(".four_card").text("carreau à " + CarreauScore + "%");
        $(".c4").attr("src", "./images/carreau_card.svg");
      } else if (
        CarreauScore > PiqueScore &&
        CarreauScore > CoeurScore &&
        CarreauScore > TrefleScore
      ) {
        $(".description").text("à tendence Carreau");
        $(".first_card").text("carreau à " + CarreauScore + "%");
        $(".c1").attr("src", "./images/carreau_card.svg");
        $(".second_card").text("pique à " + PiqueScore + "%");
        $(".c2").attr("src", "./images/pique_card.svg");
        $(".third_card").text("trefle à " + TrefleScore + "%");
        $(".c3").attr("src", "./images/trefle_card.svg");
        $(".four_card").text("coeur à " + CoeurScore + "%");
        $(".c4").attr("src", "./images/coeur_card.svg");
      } else if (CarreauScore == PiqueScore) {
        $(".description").text("à tendence Carreau et Pique");
        $(".first_card").text("pique à " + PiqueScore + "%");
        $(".c1").attr("src", "./images/pique_card.svg");
        $(".second_card").text("carreau à " + CarreauScore + "%");
        $(".c2").attr("src", "./images/carreau_card.svg");
        $(".third_card").text("trefle à " + TrefleScore + "%");
        $(".c3").attr("src", "./images/trefle_card.svg");
        $(".four_card").text("coeur à " + CoeurScore + "%");
        $(".c4").attr("src", "./images/coeur_card.svg");
        if (CarreauScore == TrefleScore) {
          $(".description").text("à tendence Carreau, Trefle et Pique");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("carreau à " + CarreauScore + "%");
          $(".c2").attr("src", "./images/carreau_card.svg");
          $(".third_card").text("trefle à " + TrefleScore + "%");
          $(".c3").attr("src", "./images/trefle_card.svg");
          $(".four_card").text("coeur à " + CoeurScore + "%");
          $(".c4").attr("src", "./images/coeur_card.svg");
        } else if (CarreauScore == CoeurScore) {
          $(".description").text("à tendence Carreau, Coeur et Pique");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("carreau à " + CarreauScore + "%");
          $(".c2").attr("src", "./images/carreau_card.svg");
          $(".third_card").text("coeur à " + CoeurScore + "%");
          $(".c3").attr("src", "./images/coeur_card.svg");
          $(".four_card").text("trefle à " + TrefleScore + "%");
          $(".c4").attr("src", "./images/trefle_card.svg");
        }
      } else if (CoeurScore == PiqueScore) {
        $(".description").text("à tendence Coeur et Pique");
        $(".first_card").text("pique à " + PiqueScore + "%");
        $(".c1").attr("src", "./images/pique_card.svg");
        $(".second_card").text("coeur à " + CoeurScore + "%");
        $(".c2").attr("src", "./images/coeur_card.svg");
        $(".third_card").text("carreau à " + CarreauScore + "%");
        $(".c3").attr("src", "./images/carreau_card.svg");
        $(".four_card").text("trefle à " + TrefleScore + "%");
        $(".c4").attr("src", "./images/trefle_card.svg");
        if (CoeurScore == TrefleScore) {
          $(".description").text("à tendence Coeur, Trefle et Pique");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("coeur à " + CoeurScore + "%");
          $(".c2").attr("src", "./images/coeur_card.svg");
          $(".third_card").text("trefle à " + TrefleScore + "%");
          $(".c3").attr("src", "./images/trefle_card.svg");
          $(".four_card").text("carreau à " + CarreauScore + "%");
          $(".c4").attr("src", "./images/carreau_card.svg");
        } else if (CoeurScore == CarreauScore) {
          $(".description").text("à tendence Carreau, Coeur et Pique");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("coeur à " + CoeurScore + "%");
          $(".c2").attr("src", "./images/coeur_card.svg");
          $(".third_card").text("carreau à " + CarreauScore + "%");
          $(".c3").attr("src", "./images/carreau_card.svg");
          $(".four_card").text("trefle à " + TrefleScore + "%");
          $(".c4").attr("src", "./images/trefle_card.svg");
        }
      } else if (TrefleScore == PiqueScore) {
        $(".description").text("à tendence Trefle et Pique");
        $(".first_card").text("pique à " + PiqueScore + "%");
        $(".c1").attr("src", "./images/pique_card.svg");
        $(".second_card").text("trefle à " + TrefleScore + "%");
        $(".c2").attr("src", "./images/trefle_card.svg");
        $(".c2").attr("src", "./images/trefle_card.svg");
        $(".third_card").text("coeur à " + CoeurScore + "%");
        $(".c3").attr("src", "./images/coeur_card.svg");
        $(".four_card").text("carreau à " + CarreauScore + "%");
        $(".c4").attr("src", "./images/carreau_card.svg");
        if (TrefleScore == CoeurScore) {
          $(".description").text("à tendence Coeur, Trefle et Pique");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("trefle à " + TrefleScore + "%");
          $(".c2").attr("src", "./images/trefle_card.svg");
          $(".c2").attr("src", "./images/trefle_card.svg");
          $(".third_card").text("coeur à " + CoeurScore + "%");
          $(".c3").attr("src", "./images/coeur_card.svg");
          $(".four_card").text("carreau à " + CarreauScore + "%");
          $(".c4").attr("src", "./images/carreau_card.svg");
        } else if (TrefleScore == CarreauScore) {
          $(".description").text("à tendence Carreau, Trefle et Pique");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("trefle à " + TrefleScore + "%");
          $(".c2").attr("src", "./images/trefle_card.svg");
          $(".c2").attr("src", "./images/trefle_card.svg");
          $(".third_card").text("carreau à " + CarreauScore + "%");
          $(".c3").attr("src", "./images/carreau_card.svg");
          $(".four_card").text("coeur à " + CoeurScore + "%");
          $(".c4").attr("src", "./images/coeur_card.svg");
        }
      } else if (TrefleScore == CoeurScore) {
        $(".description").text("à tendence Trefle et Coeur");
        $(".first_card").text("trefle à " + TrefleScore + "%");
        $(".c1").attr("src", "./images/trefle_card.svg");
        $(".second_card").text("coeur à " + CoeurScore + "%");
        $(".c2").attr("src", "./images/coeur_card.svg");
        $(".third_card").text("pique à " + PiqueScore + "%");
        $(".c3").attr("src", "./images/pique_card.svg");
        $(".four_card").text("carreau à " + CarreauScore + "%");
        $(".c4").attr("src", "./images/carreau_card.svg");
        if (TrefleScore == PiqueScore) {
          $(".description").text("à tendence Coeur, Pique et Trefle");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("coeur à " + CoeurScore + "%");
          $(".c2").attr("src", "./images/coeur_card.svg");
          $(".third_card").text("trefle à " + TrefleScore + "%");
          $(".c3").attr("src", "./images/trefle_card.svg");
          $(".four_card").text("carreau à " + CarreauScore + "%");
          $(".c4").attr("src", "./images/carreau_card.svg");
        } else if (TrefleScore == CarreauScore) {
          $(".description").text("à tendence Carreau, Trefle et Coeur");
          $(".first_card").text("carreau à " + CarreauScore + "%");
          $(".c1").attr("src", "./images/carreau_card.svg");
          $(".second_card").text("trefle à " + TrefleScore + "%");
          $(".c2").attr("src", "./images/trefle_card.svg");
          $(".c2").attr("src", "./images/trefle_card.svg");
          $(".third_card").text("coeur à " + CoeurScore + "%");
          $(".c3").attr("src", "./images/coeur_card.svg");
          $(".four_card").text("pique à " + PiqueScore + "%");
          $(".c4").attr("src", "./images/pique_card.svg");
        }
      } else if (TrefleScore == CarreauScore) {
        $(".description").text("à tendence Trefle et Carreau");
        $(".first_card").text("carreau à " + CarreauScore + "%");
        $(".c1").attr("src", "./images/carreau_card.svg");
        $(".second_card").text("trefle à " + TrefleScore + "%");
        $(".c2").attr("src", "./images/trefle_card.svg");
        $(".c2").attr("src", "./images/trefle_card.svg");
        $(".third_card").text("pique à " + PiqueScore + "%");
        $(".c3").attr("src", "./images/pique_card.svg");
        $(".four_card").text("coeur à " + CoeurScore + "%");
        $(".c4").attr("src", "./images/coeur_card.svg");
        if (TrefleScore == PiqueScore) {
          $(".description").text("à tendence Pique, Trefle et Carreau");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("carreau à " + CarreauScore + "%");
          $(".c2").attr("src", "./images/carreau_card.svg");
          $(".third_card").text("trefle à " + TrefleScore + "%");
          $(".c3").attr("src", "./images/trefle_card.svg");
          $(".four_card").text("coeur à " + CoeurScore + "%");
          $(".c4").attr("src", "./images/coeur_card.svg");
        } else if (TrefleScore == CoeurScore) {
          $(".description").text("à tendence Coeur, Trefle et Carreau");
          $(".first_card").text("coeur à " + CoeurScore + "%");
          $(".c1").attr("src", "./images/coeur_card.svg");
          $(".second_card").text("carreau à " + CarreauScore + "%");
          $(".c2").attr("src", "./images/carreau_card.svg");
          $(".third_card").text("trefle à " + TrefleScore + "%");
          $(".c3").attr("src", "./images/trefle_card.svg");
          $(".four_card").text("pique à " + PiqueScore + "%");
          $(".c4").attr("src", "./images/pique_card.svg");
        }
      } else if (CoeurScore == CarreauScore) {
        $(".description").text("à tendence Coeur et Carreau");
        $(".first_card").text("coeur à " + CoeurScore + "%");
        $(".c1").attr("src", "./images/coeur_card.svg");
        $(".second_card").text("carreau à " + CarreauScore + "%");
        $(".c2").attr("src", "./images/carreau_card.svg");
        $(".third_card").text("pique à " + PiqueScore + "%");
        $(".c3").attr("src", "./images/pique_card.svg");
        $(".four_card").text("trefle à " + TrefleScore + "%");
        $(".c4").attr("src", "./images/trefle_card.svg");
        if (CoeurScore == PiqueScore) {
          $(".description").text("à tendence Pique, Coeur et Carreau");
          $(".first_card").text("pique à " + PiqueScore + "%");
          $(".c1").attr("src", "./images/pique_card.svg");
          $(".second_card").text("coeur à " + CoeurScore + "%");
          $(".c2").attr("src", "./images/coeur_card.svg");
          $(".third_card").text("carreau à " + CarreauScore + "%");
          $(".c3").attr("src", "./images/carreau_card.svg");
          $(".four_card").text("trefle à " + TrefleScore + "%");
          $(".c4").attr("src", "./images/trefle_card.svg");
        } else if (CoeurScore == TrefleScore) {
          $(".description").text("à tendence Coeur, Trefle et Carreau");
          $(".first_card").text("coeur à " + CoeurScore + "%");
          $(".c1").attr("src", "./images/coeur_card.svg");
          $(".second_card").text("carreau à " + CarreauScore + "%");
          $(".c2").attr("src", "./images/carreau_card.svg");
          $(".third_card").text("trefle à " + TrefleScore + "%");
          $(".c3").attr("src", "./images/trefle_card.svg");
          $(".four_card").text("pique à " + PiqueScore + "%");
          $(".c4").attr("src", "./images/pique_card.svg");
        }
      } else if (
        CoeurScore == CarreauScore &&
        CoeurScore == PiqueScore &&
        CoeurScore == TrefleScore
      ) {
        $(".description").text("à tendence Coeur, Trefle, Carreau et Pique");
        $(".first_card").text("pique à " + PiqueScore + "%");
        $(".c1").attr("src", "./images/pique_card.svg");
        $(".second_card").text("coeur à " + CoeurScore + "%");
        $(".c2").attr("src", "./images/coeur_card.svg");
        $(".third_card").text("carreau à " + CarreauScore + "%");
        $(".c3").attr("src", "./images/carreau_card.svg");
        $(".four_card").text("trefle à " + TrefleScore + "%");
        $(".c4").attr("src", "./images/trefle_card.svg");
      }
    }
  });
  /*$(".carte").click(function () {
        var getClass = this.className;
        var response = getClass.substring(6, 8);
        console.log(response);
        if ($(".carte").attr("class") != "carte " + response) {

        }
        $(".carte").css({
            display: "none",
            visibility: "hidden",
            oppacity: 0
        });
        $("." + response).css({
            display: "block",
            visibility: 'visible',
            oppacity: 1
        });
        $(".main").addClass("translate");

    })*/
});
