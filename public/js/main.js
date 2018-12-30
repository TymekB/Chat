let socket = io();

$(document).ready(function(){

    $("#btn-send").click(function(){

        let messageInput = $("#message-input");

        socket.emit('chat', {
            message: messageInput.val()
        });

        messageInput.val('');
    });

    $("#message-input").keypress(function(e){
        if(e.which === 13) {
            $("#btn-send").trigger('click');
        }
    });

    socket.on('chat', function(data) {
        $("#chat ul").append(`
            <li>
                <div class="pull-left">${data.message}</div>
                <div class="pull-right">${data.time}</div>
                <div class="clearfix"></div>
            </li>
        `);
    });

});