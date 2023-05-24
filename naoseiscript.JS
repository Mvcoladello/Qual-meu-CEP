// viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/

let rua = document.querySelector('#rua');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#estado');
let btncep = document.querySelector('#btnbuscarcep');
let listacep = document.querySelector('#listacep');

rua.value = 'Domingos Jose';
cidade.value = 'Porto Alegre';
uf.value = 'RS';

btncep.addEventListener('click', function(e) {
    e.preventDefault();

    let urlbase = 'https://viacep.com.br/ws/';
    let parametros = uf.value + '/' + cidade.value + '/' + rua.value + '/json/';
    let callback = '?callback=PopularNaoSeiMeuCep';

    let script = document.createElement('script');
    script.src = urlbase + parametros + callback;
    document.body.appendChild(script);

});

function PopularNaoSeiMeuCep(resposta){
    if(!Array.isArray(resposta)){
        alert('o retorno nao esta na lista de ceps');
        return;
    }
  
    resposta.forEach(function(i){

        let li = document.createElement('li');
        let endereco = i.logradouro + ' | ' + i.bairro + ' | ' + i.localidade + ' | ' + i.uf + ' | ' + i.cep;
        li.innerHTML = endereco ;
        li.setAttribute('onclick', 'exibircep('+i.cep.replace('-', '')+')')
        listacep.appendChild(li);
    });
}

function exibircep(cep){
    alert(cep);
}
