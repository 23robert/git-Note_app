//alert("hola");
//funcion q muestra el resultado en el imput id="resultado" como un value.

function sumar (){
   nu1 =  document.getElementById('valor1').value;
   nu2 =  document.getElementById('valor2').value;
   nu3 =  document.getElementById('valor3').value;
 
   r = document.querySelector('#mensajes');
   es = document.querySelector('#add');
   document.getElementById("add").reset();


   res = parseInt(nu1)+parseInt(nu2)+parseInt(nu3);
   pro = (res)/3
   
   ap= "aprobado";
   bp= "reprobado";

   
    // alert(r)<>;
    // r.innerHTML += "promedio : " + pro + "<br><button class='btn btn-info'>AP</button>";
     
     if(pro > 6.0){
      r.innerHTML += "promedio : " + pro + "<button class='btn btn-info m-3'>"+ap+"</button>";
    } else{
      r.innerHTML += "promedio : " + pro + "<button class='btn btn-outline-danger m-3'>"+bp+"</button>";
    }
  
}
s



/*
function porcentaje(){
    n1 = document.getElementById("nota1").value;
    n2 = document.getElementById("nota2").value;
    n3 = document.getElementById("nota3").value;
    r = n1+n2+n3;
    t = document.getElementById("promedio").value = r;
    if(t >6.0){
        document.getElementById("estado").value = ('aprobado');
    }else{
      document.getElementById("estado").value = ('reprobado');
    }
  }
 
  */