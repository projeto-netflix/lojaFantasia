// array de objeto com as imagens e infrmaçoes 
const bannerItens= [
{   
    imagem:"./src/assets/img/fantasia1.png"
},
{   
    imagem:"./src/assets/img/fantasia2.jpg"
},
{   
    imagem:"./src/assets/img/fantasia3.jpg"
}
];

// DECLARANDO AS VARIAVEIS E ELEMENTOS COM DOM (DOCUMENT OBJECT MODIFY)

const tempo = 5000; // tempo em milisegundos
const elementosbanner = document.querySelector(".banner");
let i = 0;

// FUNCAO PARA O SLIDESHOW

function slideshow(){

    // ALTERA A IMAGEM DE FUNDO DO BANNER
    elementosbanner.style.backgroundImage = `url(${bannerItens[i].imagem})`;

    // ALTERA O TITULO DO BANNER


    // INCREMENTA O INDICE [I] E REINICIA QUANDO CHEGAR AO FINAL DO ARRAY

    //  se o i for maior que a quantidade de imagens volta ao inicio

    i++;

    if( i >= bannerItens.length){
        i = 0;
    };

    // chama a funcao novamente apos o tempo definido
    setTimeout(slideshow,tempo);

}

// inicia a funcao

slideshow();