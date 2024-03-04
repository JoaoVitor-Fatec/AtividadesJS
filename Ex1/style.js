let dado = prompt("Digite um dado","");

if (isNaN(dado)){
    if(confirm("Quer conferir o dado?")){
        document.write("O dado é: "+ dado +"(String)");
    }      
}
else 
    if (dado == null){
        document.write("Obrigado por visitar o Site")
    }

    else {
        if(confirm("Quer conferir o dado?")){
            document.write("O dado é: "+ dado +" (Number)");
        }
    }
