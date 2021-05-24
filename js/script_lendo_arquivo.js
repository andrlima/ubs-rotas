//alert("IMPORTANTE! Não recomendo abrir essa implementação em servidores, tive muito problema por causa da KEY da API do google, se o mapa não abrir já sabe. XD (kkkkk)");

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var arquivo = JSON.parse(this.responseText);
        document.getElementById("texto").innerHTML = arquivo.name;

    }

};

xmlhttp.open("GET", "./util/ubs_SP.json", true);
xmlhttp.send();