let $canvas= document.getElementById("lienzo")
let ctx = $canvas.getContext("2d")
let var1

let numeros = []

function lienzo(){
    
    // Creamos las lineas horizontales

    for (x=0; x<=499; x=x+50){
        ctx.moveTo(x,0);
        ctx.lineTo(x,499);
    }

    // Creamos las lienas vertical

    for (y=0; y<=499; y=y+50){
        ctx.moveTo(0,y);
        ctx.lineTo(499,y);
    }

    // Dibujamos las lineas

    ctx.strokeStyle = "black";
    ctx.stroke();

    // Creamos un bucle para generar los numeros y asignar su posicion en el tablero

    generador_numeros()

    // Rellenamos el cuadro con los numeros que tenemos en el array
    rellenar_cuadro()
    
    // Ponemos a la escucha la grilla

    $canvas.addEventListener("click", function(e){

        let pos_x = 0
        let pos_y = 0
        let pos_xx = 50
        let pos_yy = 50
        let vueltas
 
        // Este es un metodo para restar el margen del body y que solo me salga el valor de la grilla

        var canvaspos = $canvas.getBoundingClientRect();
        nclientX = e.clientX - canvaspos.left
        nclientY = e.clientY - canvaspos.top

        posicion_array = 0


        // Comenzaos iterando las columnas...
        for (vueltas = 0; vueltas <= 10; vueltas++){



            // Vamos a iterar cada filas...

            for (vuelta_fila = 0; vuelta_fila <= 10; vuelta_fila++){

                console.log("X " + nclientX + " Y : " + nclientY + " Buscando en X " +  pos_x + " XX : " + pos_xx + " Y : " + pos_y + " YY : " + pos_yy)
                //console.log("nclientY" + nclientY)

                if(nclientX > pos_x && nclientX < pos_xx && nclientY > pos_y && nclientY < pos_yy){

                  alert("El numero es : " + numeros[posicion_array][0])
                  console.log("Encontre...")
                  

            
                }


                pos_y = pos_y + 50
                pos_yy = pos_yy +50
                posicion_array++

            }

            pos_x = pos_x + 50
            pos_xx = pos_xx + 50

            pos_y = 0
            pos_yy = 50

        }


    })


    function rellenar_cuadro(){

        let valor_anadir_x = 50
        let vueltas = 10
        let valor_x = 10
        let valor_y = 10
        let posicion_array_numero = 0

        // Voy a recorrer las columnas

        for(c=0; c<vueltas; c++){
            //console.log("Esto es c:"+c)

            // Relleno las filas....
            for(n=0; n < vueltas; n++){
                ctx.fillText(numeros[posicion_array_numero][0], valor_x, valor_y)

                valor_x = valor_x + valor_anadir_x 
                posicion_array_numero ++  

                //console.log(numeros[0][4])
            }

           valor_x = 10

           valor_y = valor_y + valor_anadir_x

        }
    }

    function generador_numeros(){

        let pos_x = 0
        let pos_y = 0
        let pos_xx = 50 
        let pos_yy = 50

        for (n=1; n <=100; n++){
            //console.log(n)
            let aleatorio = Math.round(Math.random()*1000);
            //console.log(aleatorio);
            numeros.push([aleatorio, pos_x, pos_y, pos_xx, pos_yy])
            //numeros[0].push(aleatorio)
            pos_x = pos_x + 50
            pos_y += 50
            pos_xx += 50
            pos_yy += 50

        }

    }


    function regla_juego(num){
        
    }

}

