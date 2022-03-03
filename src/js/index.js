$(document).ready(function () {
    var response = [];
    var question_limit = 3;
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
            $(".pique").text("pique " + PiqueScore + "%");
            $(".coeur").text("coeur " + CoeurScore + "%");
            $(".trefle").text("trefle " + TrefleScore + "%");
            $(".carreau").text("carreau " + CarreauScore + "%");
            if (PiqueScore > CoeurScore && PiqueScore > TrefleScore && PiqueScore > CarreauScore) {
                $(".description").text("à tendence Pique");
            } else if (CoeurScore > PiqueScore && CoeurScore > TrefleScore && CoeurScore > CarreauScore) {
                $(".description").text("à tendence Coeur");
            } else if (TrefleScore > PiqueScore && TrefleScore > CoeurScore && TrefleScore > CarreauScore) {
                $(".description").text("à tendence Trefle");
            } else if (CarreauScore > PiqueScore && CarreauScore > CoeurScore && CarreauScore > TrefleScore) {
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
            } else if (CoeurScore == CarreauScore && CoeurScore == PiqueScore && CoeurScore == TrefleScore) {
                $(".description").text("à tendence Coeur, Trefle, Carreau et Pique");
            }

        }
    })
    $(".carte").click(function () {
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

    })
});