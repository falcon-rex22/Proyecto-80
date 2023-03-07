var Lista_de_invitados=[]

var Nombre_invitado = document.getElementById("Nombre_invitado_").value;
Lista_de_invitados.push(Nombre_invitado)

Lista_de_invitados.sort();

function searching(){
    var s = document.getElementById("s1").value
    var found = 0
    var j;
    
    for(j=0, j<Lista_de_invitados, j++)
    {
        if(s==Lista_de_invitados[j]){
            found=found+1
        }
    }
    document.getElementById("p2")innerHTML="name found"+ found + " time/s";
    console.log("found name" +found+ " time/s")
}