$(() => {
    let msg = "";
    $("a").each(function (i) {
        msg +=
            "<span>Atributo title del enlace " +
            (i + 1) +
            ": " +
            $(this).attr("title") +
            "</span><br/>";
        $("#msg").html(msg);
    });
});