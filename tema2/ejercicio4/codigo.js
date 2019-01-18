{
    let valores = [true, 5, false, "hola","adios", 2];
    if (valores[3]>valores[4])
        alert("El mayor elemento es "+valores[3]);
    else
        alert("El mayor elemento es "+valores[4]);
    alert("Con == "+valores[0]==valores[2] +" y con != " +valores[0]!=valores[2]);
    alert("Suma: "+(valores[1]+valores[5])+"\nResta: "+(valores[1]-valores[5])+"\nProducto: "+valores[1]*valores[5]+"\nDivisión: "+valores[1]/valores[5]+"\nMódulo: "+valores[1]%valores[5]);
}