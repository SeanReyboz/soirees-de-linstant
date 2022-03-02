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

        }
    })

});