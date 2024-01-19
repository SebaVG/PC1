let tablero1 = []
let tablero2 = []

function crearCasillas(){
    for (let i=0; i<64; i++){
        let casilla = {
            simbolo: 'X',
            mostrandoX:false
        }
        tablero1.push(casilla)
        tablero2.push(casilla)
    }
}

function devolverCasilla1(row,col){
    const pos= (row*3) + col
    return tablero1[pos]
}

function ponerSimbolosCasillas(){
    for(let i=0; i<8;i++){
        for(let j=0;j<8;j++){
            const but = document.getElementById(i+"_"+j)
            const casilla= devolverCasilla1(i,j)
            but.innerHTML=casilla.simbolo
        }
    }
}

function click(){

}






function main(){

}

main()