$(function () {
    $(".devour").on("click", function (event) {
        let id = $(this).data("id");
        let isDevoured = $(this).data("devoured");
        let devouredState = {
            devoured: isDevoured
        };
        console.log(devouredState);

        // Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed devoured to", isDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
