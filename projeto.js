const temas = [
    tema001 = {
        Categoria: 'LUGARES',
        Palavras: ['JAPAO', 'BRASIL', 'RUSSIA', 'CANADA', 'AUTRALIA', 'INDIA', 'PERU', 'ARGENTINA', 'CHILE', 'ESTONIA', 'VENEZUELA',  'ITALIA', 'PORTUGAL', 'CHINA', 'URUGUAI', 'EQUADOR', 'UCRANIA', 'SUICA', 'SUECIA', 'COLOMBIA', 'MEXICO'],
    },
    tema002 = {
        Categoria: 'FRUTAS',
        Palavras: ['MAMAO', 'UVA' , 'MORANGO', 'ABACATE', 'ABACAXI', 'PERA', 'MANGA', 'GOIABA', 'MELANCIA', 'PERA', 'KIWI', 'LARANJA', 'MEXIRICA', 'ACEROLA', 'AMORA', 'LIMAO' ]
    },
    tema003 = {
        Categoria: 'OBJETOS',
        Palavras: ['FACA', 'GARFO', 'MESA', 'CADEIRA', 'GARFO', 'COLHER', 'COMPUTADOR', 'DADO', 'VASO', 'VASSOURA', 'ENXADA', 'CAMA', 'TELEVISAO', 'VENTILADOR', 'BICICLETA', 'MOCHILA', 'TOMADA', 'CORDA', 'SOFA', 'BEBEDOURO']
    },

    temas004 = {
        Categoria: 'PROFISSÃO',
        Palavras: ['PALHAÇO', 'ENGENHEIRO']
    }
];

let msg = document.getElementById('msg');
let msgtext = document.getElementById('msgtext')
let Escolhetema;
let tema;
let tentativas = 6;

const sortTema = () => {
    let num = Math.floor(Math.random() * temas.length);
    Escolhetema = temas[num];
    tema = Escolhetema.Categoria;
};
sortTema();

let palavraSorteada;

const sortPalavra = () => {
    let num = Math.floor(Math.random() * Escolhetema.Palavras.length);
    palavraSorteada = Escolhetema.Palavras[num];
};
sortPalavra();

const listaDinamica = [];

const MontarnaTela = () => {
   const temaTela = document.getElementById('tema');
   temaTela.innerHTML = tema;

   const palavraTela = document.getElementById('palavra-secreta');
   palavraTela.innerHTML = '' ;

        for(let i = 0; i < palavraSorteada.length; i++){
            if(listaDinamica[i] == undefined){
                listaDinamica[i] = '?';
                palavraTela.innerHTML += ` <div class='letras'> ${listaDinamica[i]} </div>`;
            } else {
                palavraTela.innerHTML += ` <div class='letras'> ${listaDinamica[i]} </div>`;
            };
        };
};
MontarnaTela();

const inserir = (letra) => {
    document.getElementById('T-' + letra).disabled = true;
    if(tentativas > 0){
        
    comparalista(letra);
    MontarnaTela();
    imagemTela();
    console.log(tentativas);
    estiolobtn('T-' + letra);

    } 
};

const comparalista = (letra) => {
    let pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
    
    } ;
        if(tentativas == 0){
           msg.style.display = 'flex';
           msgtext.innerText =  `Você perdeu. A palavra era  ${palavraSorteada}`
        }
    else {
        for(let i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                listaDinamica[i] = letra;
            };
        };
    };

    let vitoria = true;
    for(i=0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != listaDinamica[i]){
            vitoria = false;
        };
    };

    if(vitoria == true){
        tentativas = 0;
        msg.style.display = 'flex'
        msgtext.innerText = 'Você venceu'
    };
};

const imagemTela = () => {
    switch(tentativas){
        case 5:
            document.getElementById('imagem').innerHTML = "<img src='./imagens/forca01.png' alt=''>";
            break;
        case 4:
            document.getElementById('imagem').innerHTML = "<img src='./imagens/forca02.png' alt=''>";
            break;
        case 3:
            document.getElementById('imagem').innerHTML = "<img src='./imagens/forca03.png' alt=''>";
            break
        case 2:
            document.getElementById('imagem').innerHTML = "<img src='./imagens/forca04.png' alt=''>";
            break;
        case 1:
            document.getElementById('imagem').innerHTML = "<img src='./imagens/forca05.png' alt=''>";
            break
        case 0:
            document.getElementById('imagem').innerHTML = "<img src='./imagens/forca06.png' alt=''>";
            break;
    }
}

const estiolobtn = (btn) => {
    document.getElementById(btn).style.backgroundColor = 'rgba(84, 99, 226)'
    document.getElementById(btn).style.color = 'white'
}



const reset = () => {
    location.reload()
}



console.log(palavraSorteada)