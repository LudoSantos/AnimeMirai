function verificarConta(){

    var nome = document.getElementById("INome").value;
    var email = document.getElementById("IEmail").value;
    var senha = document.getElementById("ISenha").value;

    if(nome == ""){
        alert("ERRO\nVocê deve colocar um nome");
        return;
    }
    if(email == ""){
        alert("ERRO\nVocê deve colocar um email");
        return;
    }
    if(senha == ""){
        alert("ERRO\nVocê deve colocar um senha");
        return;
    }

    else{
        str.link(Principal.html);
    }
}