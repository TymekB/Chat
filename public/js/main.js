let socket = io();

$(document).ready(function(){

    $("#btn-send").click(function(){

        let messegeInput = $("#messege-input");

        console.log(messegeInput.val());

        messegeInput.val('');
    });

});