/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function cambiarUnidades(id, value){
    if(isNaN(value)){
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value="";
        document.lasUnidades.unid_pulgada.value= "";
        document.lasUnidades.unid_pie.value= "";
        document.lasUnidades.unid_yarda.value= "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value= 39.3701 * value;
        document.lasUnidades.unid_pie.value= 3.28084 * value;
        document.lasUnidades.unid_yarda.value= 1.09361 * value;
    }else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value= 0.0254 * value;
        document.lasUnidades.unid_pie.value= 0.0833333 * value;
        document.lasUnidades.unid_yarda.value= 0.0277778 * value;
    }else if(id=="yarda"){
        document.lasUnidades.unid_metro.value= 0.9144 * value;
        document.lasUnidades.unid_pulgada.value= 36 * value;
        document.lasUnidades.unid_pie.value= 3 * value;
    }
}