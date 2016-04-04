$(document).ready(function(){
	
	var socket=io.connect();	
	$('form').submit(function(){
		var userName=jQuery("#show_name").val();		
		var message=jQuery("#message").val();
		if(!(userName==""||undefined|| message==""|| undefined)){
			
		socket.emit('Message', userName+"<-->"+message);
    $('#message').val('');
		}
		else{
			alert("Name and message both are mendatory ..");
		}
    return false;
  });
  socket.on("Message",function(msg){
	   $('#messages').append($('<li>').text(msg));

  });
	
});