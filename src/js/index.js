$(document).ready(function () {
    var response = [];
    $(".response p").click(function () {
        console.log($(".heading").className);
        var getClass = this.className;
        response.push(getClass.substring(8, 10));
        console.log(response);
        $("._1").css({
            display: "block",
            visibility: "visible",
            opacity: 1,
        })
        $("._1").addClass("fadeIn");

    })
});