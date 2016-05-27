window.onload = function()
{
	//INICIO PRIMER EJERCICIO....
	var numeroAleatorio = 0;
	//Para obtener el número aleatorio...
	nom_div("nuevoNumero").addEventListener('click', function(event)
    {
        console.log("Generar número aleatorio");
        //OBTENER UN NÚMERO ALEATORIO DE 1 - 10...
        //Esto puede realizarse a través de la función random()
        numeroAleatorio= Math.floor(Math.random() * 10) + 1;
        
        //Recuerden que se adiciona 1 para que el valor de NumeroMaximo 
        //sea incluyente

    });

    //Para validar si el valor ingresado por el usuario es igual...
    nom_div("validaAdivina").addEventListener('click', function(event)
    {
        var numeroUsuario = Number(nom_div("adivinaNumero").value);
        console.log(numeroUsuario);
        nom_div("mensajeAdivina").innerHTML = "IMPRIMIR RESPUESTA EJERCICIO 01";
        if (numeroAleatorio!==0)
        {
        	if (numeroUsuario > 0 && numeroUsuario < 11)
        	{			
        			//numeroUsuario=numeroAleatorio
        			    if(numeroUsuario==numeroAleatorio)
        			    {    			        		 	
        		 	
        		 			nom_div("mensajeAdivina").innerHTML = "NUMERO CORRECTO"
        		 		}
        		 		else
        		 		{
        		 			nom_div("mensajeAdivina").innerHTML = "NUMERO INCORRECTO"
        		 		} 		 		
       
        	}
        	else
        	{
        		nom_div("mensajeAdivina").innerHTML = "NO ESTA EN EL RANGO"
        	}
        }
        else
        {
        		nom_div("mensajeAdivina").innerHTML = "NO HA OBTENIDO EL NUMERO ALEATORIO"
        }        
    });
	//FIN DEL PRIMER EJERCICIO...

	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */

	//INICIO SEGUNDO EJERCICIO...
	var truncateString = function()
	{
		var texto 	  = nom_div("stringTruncate").value, 
			valMaximo = Number(nom_div("numberTruncate").value);
		console.log(texto, valMaximo);
		//El div donde se mostrará el mensaje es: mensajeTruncate
		//nom_div("mensajeTruncate").innerHTML = "IMPRIMIR RESPUESTA EJERCICIO 02";
		//si tamaño substring .lengt comarar con el numero

		if (texto.length>valMaximo) 
		{
			texto = texto.substring(0,valMaximo)+"...";
			
		}
		nom_div("mensajeTruncate").innerHTML = texto;

	};

	//Para capturar los eventos de teclado...
	nom_div("stringTruncate").addEventListener("keyup", function (event)
	{
		
		truncateString();
  	});
	//Para capturar el valor máximo del string...
	nom_div("numberTruncate").addEventListener("change", function (event)
	{
		truncateString();
  	});
	//FIN DEL SEGUNDO EJERCICIO....

	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */

	//INICIO TERCER EJERCICIO...
	var estudiantes = [{
							nombre : "Juan", 
							nota   : 80
					   }, 
					   {
							nombre : "María", 
							nota   : 77
					   }, 
					   {
							nombre : "Carlos", 
							nota   : 88
					   }, 
					   {
							nombre : "Miriam", 
							nota   : 95
					   }, 
					   {
							nombre : "Pedro", 
							nota   : 68
					   }];
	
	var grados = [{
						rango : 60, 
						grado : "F", 
				  }, 
				  {
						rango : 70, 
						grado : "D", 
				  }, 
				  {
						rango : 80, 
						grado : "C", 
				  }, 
				  {
						rango : 90, 
						grado : "B", 
				  }, 
				  {
						rango : 100, 
						grado : "A", 
				  }];
	var imprimeDatos = (function()
	{
		// dinamia la division 
		var txtEstudiantes = txtGrados = ""; 
		for(var i = 0; i < estudiantes.length; i++)
		{
			txtEstudiantes += "<li>"+estudiantes[i].nombre + " = " + 
							  "<input type = 'number' value = '"+(estudiantes[i].nota)+"' class = 'notUser' id = 'nota_"+(i + 1)+"'>" + 
							  "</li>";
		}
		txtEstudiantes = "<ol>"+(txtEstudiantes)+"</ol>";
		nom_div("listadoUsuarios").innerHTML = txtEstudiantes;
		//Para loe eventos de escucha...
		var inputs = document.getElementsByClassName("notUser");
		for(var i = 1; i <= inputs.length; i++)
		{
			nom_div("nota_" + i).addEventListener('change', function(event)
			{
				var ind = Number(this.id.split("_")[1]) - 1;
				estudiantes[ind].nota = Number(this.value);
				calculaPromedioCurso();
			});
		}
		//Para imprimir los grados...
		for(var i = 0; i < grados.length; i++)
		{
			txtGrados += "<li> <= "+grados[i].rango + " = <b>"+grados[i].grado+"</b></li>";
		}
		txtGrados = "<ul>"+(txtGrados)+"</ul>";
		nom_div("listadoGrados").innerHTML = txtGrados;
	})();

	var calculaPromedioCurso = function()
	{
		var cal_promedio;
		var cal_grados;
		for(var i = 0; i < estudiantes.length; i++)
		{
			cal_promedio+=estudiantes[i].nota
		}
		
		cal_promedio/=estudiantes[i].nota

		for(var i = 0; i < grados.length; i++)
		{
			if (grados[i].rango<=cal_promedio) 
			{
				nom_div("mensajePromedio").innerHTML = grados;
				break;
			}
		}


		//nom_div("mensajePromedio").innerHTML = "IMPRIMIR RESPUESTA EJERCICIO 03";
	};

	nom_div("calculaPromedio").addEventListener('click', function(event)
	{
		calculaPromedioCurso();
	});
	//FIN DEL EJERCICIO TRES

	//Para imprir elementos en el HTML...
    function nom_div(div)
    {
        return document.getElementById(div);
    }
};
