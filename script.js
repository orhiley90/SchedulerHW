$(document).ready(function () {
    let currentDate = moment().format("MMM Do YYYY");
    // shows current date in the header
    $(".currentDate").append(currentDate);

    // save button that saves content to local storage
    $(".saveLocal").on("click", function () {
        let id = this.id;

        localStorage.setItem($("#textArea" + id), $("#textArea" + id).val());
        console.log($("#textArea" + id).val());
        console.log(localStorage.getItem($("textArea" + id).val()));

    });
// this changes the color of the current block to show what is currently on the docket
    function updateHour() {

        let currentHour = moment().hours();

        $(".colorBlock").each(function () {

            $(this).removeClass("present");

            let blockHour = $(this).id;
            
            if (blockHour === currentHour) {
                $(this).addClass("present");

            }
        });
    }

    updateHour();


    // let reloadedText = document.getElementsByClassName("textLoader");
    // console.log("textArea" + id);
    localStorage.getItem("textArea9");
    $("#textArea9 .textLoader").val(localStorage.getItem("textArea9"));
    localStorage.getItem("textArea10");
    $("#textArea10 .textLoader").val(localStorage.getItem("textArea10"));
    localStorage.getItem("textArea11");
    $("#textArea11 .textLoader").val(localStorage.getItem("textArea11"));
    localStorage.getItem("textArea12");
    $("#textArea12 .textLoader").val(localStorage.getItem("textArea12"));
    localStorage.getItem("textArea1");
    $("#textArea1 .textLoader").val(localStorage.getItem("textArea1"));
    localStorage.getItem("textArea2");
    $("#textArea2 .textLoader").val(localStorage.getItem("textArea2"));
    localStorage.getItem("textArea3");
    $("#textArea3 .textLoader").val(localStorage.getItem("textArea3"));
    localStorage.getItem("textArea4");
    $("#textArea4 .textLoader").val(localStorage.getItem("textArea4"));
    localStorage.getItem("textArea5");
    $("#textArea5 .textLoader").val(localStorage.getItem("textArea5"));
    
});

