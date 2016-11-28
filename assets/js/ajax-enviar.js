jQuery(document).ready(function(){
    $('#form').submit(function(e){

        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "enviar.php",
            dataType: "application/json",
            data: {
                'nome' : $('#inputEmail').val(),
                'email': $('#inputNome').val(),
                'msg' : $('#inputMsg').val()
            },
            success: function(data)
            {
                var spanEmail = document.getElementById("spanEmail");
                var cont = "Email enviado com sucesso";
                
                spanEmail.className = "alert alert-success";
                spanEmail.innerHTML = cont;

            },
            error: function(erro) 
            {
                var spanEmail = document.getElementById("spanEmail");
                var cont = "Email não foi enviado: " + erro;
                
                spanEmail.className = "alert alert-warning";
                spanEmail.innerHTML = cont;
            }
        });

    });
});