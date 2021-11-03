function Encripta(mensagem){
    var mensagemx="";
    var l;
    var i;
    var j=0;
    var ch;
    ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";	
    for (i=0;i<mensagem.length; i++){
        j++;
        l=(Asc(mensagem.substr(i,1))+(Asc(ch.substr(j,1))));
        if (j==50){
            j=1;
        }
        if (l>255){
            l-=256;
        }
        mensagemx+=(Chr(l));
    }
    document.getElementById("1").value=mensagemx;
}
function Descripta(mensagem){
    var mensagemx="";
    var l;
    var i;
    var j=0;
    var ch;
    ch = "assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm";	
    for (i=0; i<mensagem.length;i++){
        j++;
        l=(Asc(mensagem.substr(i,1))-(Asc(ch.substr(j,1))));
        if (j==50){
            j=1;
        }
        if (l<0){
            l+=256;
        }
        mensagemx+=(Chr(l));
    }	
    document.getElementById("2").value=mensagemx;
}
function Asc(String){
    return String.charCodeAt(0);
}
 
function Chr(AsciiNum){
    return String.fromCharCode(AsciiNum)
}

document.getElementById("0").focus();
function enter(event, envia){
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13){
        var dados=document.getElementById(envia.id);
        var next=(parseInt(envia.id)+1);
        if(dados.value.lenght<=0){
            return false;
        }else{
            if (envia.id==0){
                Encripta(dados.value);
                document.getElementById(next).focus();
            }else if(envia.id==1){
                Descripta(dados.value);
                document.getElementById(next).focus();
            }else{
                limpar();
            }
            return false;
        }
    }else{
        return true;
    }
}
function limpar(){
    for (var i=0; i<3;i++){
        document.getElementById(i).value="";
    }
    document.getElementById(0).focus();
}
function resposta(){
    var respostax = document.getElementById("resposta").value;
    if(respostax === "cifra de substituição"){
        window.alert("Parabéns !")
    }
    else{
        window.alert("Resposta errada, tente novamente !")
    }
}