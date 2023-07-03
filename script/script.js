 function Enviar() {
    var fornecedor = document.getElementById("fornecedor").value;
    var responsavel = document.getElementById("responsavel").value;
    var data = document.getElementById("data").value;
    var cargo = document.getElementById("cargo").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var embalagem = document.getElementById("embalagem").value;
    var planta = document.getElementById("planta").value;
    var projeto = document.getElementById("projeto").value;
    var finalidade = document.getElementsByName("finalidade").value;

    const form = [
        fornecedor,
        responsavel,
        data,
        cargo,
        telefone,
        email,
        embalagem,
        planta,
        projeto,
        finalidade,
    ]

    document.getElementById("resultado").innerHTML = form;

    console.log([
        fornecedor + responsavel + data + cargo + telefone + email + embalagem + planta + projeto + finalidade
    ]);
    window.alert('Formulário enviado com sucesso!');
}

var cont = 0;
var ultimoID = 0;

function NovaLinha() {

  for(cont; cont<1;) {
    var novaLinha = '<tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>';
    
    if(document.getElementById('wrapper').id == 'wrapper'){
      document.getElementById('wrapper').innerHTML += novaLinha;
      ultimoID = +1 ;
    } else {
      var elemento = document.getElementById('wrapper' + ultimoID);
      ultimoID = +1;
      console.log(elemento);a
    }
     


  }
        
        
}


/*
  document.getElementById('wrapper0').innerHTML += novaLinha;
        document.getElementById('wrapper1').innerHTML += novaLinha;
        document.getElementById('wrapper2').innerHTML += novaLinha;
        document.getElementById('wrapper3').innerHTML += novaLinha;
        document.getElementById('wrapper4').innerHTML += novaLinha;
        document.getElementById('wrapper5').innerHTML += novaLinha;
        document.getElementById('wrapper6').innerHTML += novaLinha;
        document.getElementById('wrapper7').innerHTML += novaLinha;
        document.getElementById('wrapper8').innerHTML += novaLinha;
*/




