{
    
    function init(){
        document.getElementById('dni').addEventListener('focusout',comprobarDni);
    }
    
    function comprobarDni(){
        let valor = this.value;
        
        if (valor == ''){
            mensajeAlerta('Tienes que introducir algo');
            return
        }
        
        let regexSimple = /^([0-9]{8})[ -]?([a-z])$/i;
        
        let resultado = regexSimple.exec(valor);
        
        if(resultado == null){
            mensajeAlerta('Formato de dni inválido');
            return;
        }
        
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        
        let letraCalculada = letras[parseInt(resultado[1]) % 23];
        let letraTexto = resultado[2];
        
        if(letraCalculada != letraTexto.toUpperCase()){
            mensajeAlerta('La letra del DNI no es correcta');
            return;
        }
        mensajeAlerta('');
    }
    
    function mensajeAlerta(mensaje){
        let spanAlerta = document.getElementById('errorDni'); // Temporalmente en esta función; habría que sacarlo fuera
        spanAlerta.innerText = mensaje;
    }
    
    window.addEventListener("load", init);
}