(function(){
        let nombre = document.getElementById("nombre");
        nombre.focus();
          let formulario = document.getElementsByTagName('formulario')[0],
         elementos= document.formulario.elements;
          let boton = document.getElementById("btn");
          function validarnombre(e){
           if (document.formulario.nombre.value==0) {
            alert("Rellena el campo nombre");
            e.preventDefault();
           }
          }
          function validarRadio(e){
           if (document.formulario.sexo[0].checked==true || document.formulario.sexo[1].checked==true) {}
            else{
             alert("indica tu sexo");
             e.preventDefault();
            }
      
          }
          function validarterminos(e){
           if (document.formulario.terminos.checked==true) {}
            else{
             alert("acepta los terminos y condiciones de uso");
             e.preventDefault();
            }
          }
          let validar = function(e){
           validarnombre(e);
           validarRadio(e);
           validarterminos(e);
          };
          document.formulario.addEventListener("submit",validar);
      })()