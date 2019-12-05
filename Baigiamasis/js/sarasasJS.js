function pavadinimas() {
    $('li').click(function () {
        let busena = $('li:hover').closest('ul').attr('data-state');
        if (busena === "1") {
            // $(this).toggleClass("checked").appendTo($('#myUL2'));
            $(this).toggleClass("checked");
            $(this).appendTo($('#myUL2'));
        }
        if (busena === "2") {
            $(this).appendTo($('#myUL'));
            $(this).toggleClass("checked");
        }
    });
}

$(function () {
    pavadinimas();
});

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("preke").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {

    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("preke").value = "";
    pavadinimas();
}

$(function () {
    $(".connectedSortable").on("click", function () {
        $("#myUL, #myUL2").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    });
});