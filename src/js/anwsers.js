$(document).ready(function () {
    var response = [];
    var question_limit = 10;
    var question_number = 1;
    var PiqueScore = 0;
    var CoeurScore = 0;
    var TrefleScore = 0;
    var CarreauScore = 0;
    $(".heading div p").text(question_number + '/' + question_limit);

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    $(".response .carte").click(function () {

        var getClass = $(this).find("p").attr('class');
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
            $(".heading div p").text(question_number + '/' + question_limit);
        } else {
            $(".heading div p").text(" ");
            $(".resultat").css({
                display: "block",
                visibility: "visible",
                opacity: 1,
            });
            $(".resultat").addClass("fadeIn");
            PiqueScore = Math.round(((getOccurrence(response, "0")) / question_limit) * 100);
            CoeurScore = Math.round(((getOccurrence(response, "1")) / question_limit) * 100);
            TrefleScore = Math.round(((getOccurrence(response, "2")) / question_limit) * 100);
            CarreauScore = Math.round(((getOccurrence(response, "3")) / question_limit) * 100);
            if (PiqueScore > CoeurScore && PiqueScore > TrefleScore && PiqueScore > CarreauScore) {
                $(".description").text("à tendence Pique");
                $(".first_card").text("pique à " + PiqueScore + "%");
                $(".second_card").text("coeur à " + CoeurScore + "%");
                $(".third_card").text("trefle à " + TrefleScore + "%");
                $(".four_card").text("carreau à " + CarreauScore + "%");
            } else if (CoeurScore > PiqueScore && CoeurScore > TrefleScore && CoeurScore > CarreauScore) {
                $(".description").text("à tendence Coeur");
                $(".first_card").text("coeur à " + CoeurScore + "%");
                $(".second_card").text("pique à " + PiqueScore + "%");
                $(".third_card").text("trefle à " + TrefleScore + "%");
                $(".four_card").text("carreau à " + CarreauScore + "%");
            } else if (TrefleScore > PiqueScore && TrefleScore > CoeurScore && TrefleScore > CarreauScore) {
                $(".description").text("à tendence Trefle");
                $(".first_card").text("trefle à " + TrefleScore + "%");
                $(".second_card").text("pique à " + PiqueScore + "%");
                $(".third_card").text("coeur à " + CoeurScore + "%");
                $(".four_card").text("carreau à " + CarreauScore + "%");
            } else if (CarreauScore > PiqueScore && CarreauScore > CoeurScore && CarreauScore > TrefleScore) {
                $(".description").text("à tendence Carreau");
                $(".first_card").text("carreau à " + CarreauScore + "%");
                $(".second_card").text("pique à " + PiqueScore + "%");
                $(".third_card").text("trefle à " + TrefleScore + "%");
                $(".four_card").text("coeur à " + CoeurScore + "%");
            } else if (CarreauScore == PiqueScore) {
                $(".description").text("à tendence Carreau et Pique");
                $(".first_card").text("pique à " + PiqueScore + "%");
                $(".second_card").text("carreau à " + CarreauScore + "%");
                $(".third_card").text("trefle à " + TrefleScore + "%");
                $(".four_card").text("coeur à " + CoeurScore + "%");
                if (CarreauScore == TrefleScore) {
                    $(".description").text("à tendence Carreau, Trefle et Pique");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("carreau à " + CarreauScore + "%");
                    $(".third_card").text("trefle à " + TrefleScore + "%");
                    $(".four_card").text("coeur à " + CoeurScore + "%");
                } else if (CarreauScore == CoeurScore) {
                    $(".description").text("à tendence Carreau, Coeur et Pique");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("carreau à " + CarreauScore + "%");
                    $(".third_card").text("coeur à " + CoeurScore + "%");
                    $(".four_card").text("trefle à " + TrefleScore + "%");
                }
            } else if (CoeurScore == PiqueScore) {
                $(".description").text("à tendence Coeur et Pique");
                $(".first_card").text("pique à " + PiqueScore + "%");
                $(".second_card").text("coeur à " + CoeurScore + "%");
                $(".third_card").text("carreau à " + CarreauScore + "%");
                $(".four_card").text("trefle à " + TrefleScore + "%");
                if (CoeurScore == TrefleScore) {
                    $(".description").text("à tendence Coeur, Trefle et Pique");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("coeur à " + CoeurScore + "%");
                    $(".third_card").text("trefle à " + TrefleScore + "%");
                    $(".four_card").text("carreau à " + CarreauScore + "%");
                } else if (CoeurScore == CarreauScore) {
                    $(".description").text("à tendence Carreau, Coeur et Pique");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("coeur à " + CoeurScore + "%");
                    $(".third_card").text("carreau à " + CarreauScore + "%");
                    $(".four_card").text("trefle à " + TrefleScore + "%");
                }
            } else if (TrefleScore == PiqueScore) {
                $(".description").text("à tendence Trefle et Pique");
                $(".first_card").text("pique à " + PiqueScore + "%");
                $(".second_card").text("trefle à " + TrefleScore + "%");
                $(".third_card").text("coeur à " + CoeurScore + "%");
                $(".four_card").text("carreau à " + CarreauScore + "%");
                if (TrefleScore == CoeurScore) {
                    $(".description").text("à tendence Coeur, Trefle et Pique");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("trefle à " + TrefleScore + "%");
                    $(".third_card").text("coeur à " + CoeurScore + "%");
                    $(".four_card").text("carreau à " + CarreauScore + "%");
                } else if (TrefleScore == CarreauScore) {
                    $(".description").text("à tendence Carreau, Trefle et Pique");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("trefle à " + TrefleScore + "%");
                    $(".third_card").text("carreau à " + CarreauScore + "%");
                    $(".four_card").text("coeur à " + CoeurScore + "%");
                }
            } else if (TrefleScore == CoeurScore) {
                $(".description").text("à tendence Trefle et Coeur");
                $(".first_card").text("trefle à " + TrefleScore + "%");
                $(".second_card").text("coeur à " + CoeurScore + "%");
                $(".third_card").text("pique à " + PiqueScore + "%");
                $(".four_card").text("carreau à " + CarreauScore + "%");
                if (TrefleScore == PiqueScore) {
                    $(".description").text("à tendence Coeur, Pique et Trefle");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("coeur à " + CoeurScore + "%");
                    $(".third_card").text("trefle à " + TrefleScore + "%");
                    $(".four_card").text("carreau à " + CarreauScore + "%");
                } else if (TrefleScore == CarreauScore) {
                    $(".description").text("à tendence Carreau, Trefle et Coeur");
                    $(".first_card").text("carreau à " + CarreauScore + "%");
                    $(".second_card").text("trefle à " + TrefleScore + "%");
                    $(".third_card").text("coeur à " + CoeurScore + "%");
                    $(".four_card").text("pique à " + PiqueScore + "%");
                }
            } else if (TrefleScore == CarreauScore) {
                $(".description").text("à tendence Trefle et Carreau");
                $(".first_card").text("carreau à " + CarreauScore + "%");
                $(".second_card").text("trefle à " + TrefleScore + "%");
                $(".third_card").text("pique à " + PiqueScore + "%");
                $(".four_card").text("coeur à " + CoeurScore + "%");
                if (TrefleScore == PiqueScore) {
                    $(".description").text("à tendence Pique, Trefle et Carreau");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("carreau à " + CarreauScore + "%");
                    $(".third_card").text("trefle à " + TrefleScore + "%");
                    $(".four_card").text("coeur à " + CoeurScore + "%");
                } else if (TrefleScore == CoeurScore) {
                    $(".description").text("à tendence Coeur, Trefle et Carreau");
                    $(".first_card").text("coeur à " + CoeurScore + "%");
                    $(".second_card").text("carreau à " + CarreauScore + "%");
                    $(".third_card").text("trefle à " + TrefleScore + "%");
                    $(".four_card").text("pique à " + PiqueScore + "%");
                }
            } else if (CoeurScore == CarreauScore) {
                $(".description").text("à tendence Coeur et Carreau");
                $(".first_card").text("coeur à " + CoeurScore + "%");
                $(".second_card").text("carreau à " + CarreauScore + "%");
                $(".third_card").text("pique à " + PiqueScore + "%");
                $(".four_card").text("trefle à " + TrefleScore + "%");
                if (CoeurScore == PiqueScore) {
                    $(".description").text("à tendence Pique, Coeur et Carreau");
                    $(".first_card").text("pique à " + PiqueScore + "%");
                    $(".second_card").text("coeur à " + CoeurScore + "%");
                    $(".third_card").text("carreau à " + CarreauScore + "%");
                    $(".four_card").text("trefle à " + TrefleScore + "%");
                } else if (CoeurScore == TrefleScore) {
                    $(".description").text("à tendence Coeur, Trefle et Carreau");
                    $(".first_card").text("coeur à " + CoeurScore + "%");
                    $(".second_card").text("carreau à " + CarreauScore + "%");
                    $(".third_card").text("trefle à " + TrefleScore + "%");
                    $(".four_card").text("pique à " + PiqueScore + "%");
                }
            } else if (CoeurScore == CarreauScore && CoeurScore == PiqueScore && CoeurScore == TrefleScore) {
                $(".description").text("à tendence Coeur, Trefle, Carreau et Pique");
                $(".first_card").text("pique à " + PiqueScore + "%");
                $(".second_card").text("coeur à " + CoeurScore + "%");
                $(".third_card").text("carreau à " + CarreauScore + "%");
                $(".four_card").text("trefle à " + TrefleScore + "%");
            }

        }
    })
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