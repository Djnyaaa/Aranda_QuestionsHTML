
//leer xml
//poner titulo
//al darle al boton corregir

var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;
var respuestaSel2=null;
var respuestaMultiple3=null;
var respuestaMultiple31=null;
var respuestaMultiple4=null;
var respuestaMultiple41=null;
var respuestaMultiple42=null;
var respuestaMultiple43=null;
var respuestasCheckbox = [];
var respuestasCheck = [];
var respuestasRadio = [];
var respuestasRadio2 = [];
var nota = 0;

var titulo="";
window.onload=function() {
	
    formElement=document.getElementById('myform');
    formElement.onsubmit=function() {
        corregirTexto();
        corregirTexto2();
        corregirCheckbox();
        corregirCheckbox2();
        corregirSelect();
        corregirSelect2();
        corregirRadio();
        corregirRadio2();
        corregirMultiple();
        corregirMultiple2();
        
        presentarNota();
        return false;
	}
	//	formElement=document.getElementById('myform');
    //leer xml
    //poner titulo
    //al darle al boton corregir
    var xhttp = new XMLHttpRequest();
	
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
		}
	}
	
    xhttp.open("GET", "xml/questions.xml", true);
    xhttp.send();
	//LEER XSL de xml/questions.xml
	var xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			xslDoc=this.responseXML;
		}
	};
	xhttp2.open("GET", "xml/otra.xsl", true);
	xhttp2.send();
	
}

function gestionarXml(dadesXml) {
	var xmlDoc = dadesXml.responseXML;
	titulo= "1.- "  +xmlDoc.getElementById('bodatoda001').getElementsByTagName('title')[0].innerHTML;
	ponerTitulo(titulo);
	respuesta=xmlDoc.getElementsByTagName('answer')[0].innerHTML;
	titulo=titulo;
	
	var xmlDoc = dadesXml.responseXML;
	titulo="2.- "  + xmlDoc.getElementById('bodatoda002').getElementsByTagName('title')[0].innerHTML;
	ponerTitulo2(titulo);
	respuesta2=xmlDoc.getElementsByTagName('answer')[1].innerHTML;
	titulo=titulo;
	
	var tituloCheckbox = "3.- "  +xmlDoc.getElementById('bodatoda003').getElementsByTagName("title")[0].innerHTML;
	var xpath="questions/question[@id='bodatoda003']/option";
	var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);  
	ponerDatosCheckboxHtml(tituloCheckbox,nodesCheckbox);
	var nres = xmlDoc.getElementById("bodatoda003").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) {
		respuestasCheckbox[i]=xmlDoc.getElementById("bodatoda003").getElementsByTagName("answer")[i].innerHTML ;
	}
	var tituloCheck = "4.- "  +xmlDoc.getElementById('bodatoda004').getElementsByTagName("title")[0].innerHTML;
	var xpath="questions/question[@id='bodatoda004']/option";
	var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);  
	ponerDatosCheckHtml(tituloCheck,nodesCheckbox);
	var nres = xmlDoc.getElementById("bodatoda004").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) {
		respuestasCheck[i]=xmlDoc.getElementById("bodatoda004").getElementsByTagName("answer")[i].innerHTML ;
	}
	
	var tituloSelect="5.- "  +xmlDoc.getElementById('bodatoda005').getElementsByTagName("title")[0].innerHTML;
	var xpath="questions/question[@id='bodatoda005']/option";
	var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
	ponerDatosSelectHtml(tituloSelect,nodesSelect);
	respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
	
	var tituloSelect2="6.- "  +xmlDoc.getElementById('bodatoda006').getElementsByTagName("title")[0].innerHTML;
	var opcionesSelectx = [];
	var nopt = xmlDoc.getElementById("bodatoda006").getElementsByTagName('option').length;
	for (i = 0; i < nopt; i++) {
		opcionesSelectx[i] = xmlDoc.getElementById("bodatoda006").getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosSelectHtml2(tituloSelect2,opcionesSelectx);
	respuestaSel2=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);
	
	var tituloRadio = "7.- " +xmlDoc.getElementById('bodatoda007').getElementsByTagName("title")[0].innerHTML;
	var xpath = "questions/question[@id='bodatoda007']/option"; 
	var nodesRadio = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
	ponerDatosRadioHtml(tituloRadio,nodesRadio);
	var nresrad = xmlDoc.getElementById("bodatoda007").getElementsByTagName('answer').length;
	for (i = 0; i < nresrad; i++) {
		respuestasRadio[i]=xmlDoc.getElementById("bodatoda007").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var tituloRadio1 = "8.- " +xmlDoc.getElementById('bodatoda008').getElementsByTagName("title")[0].innerHTML;
	var xpath = "questions/question[@id='bodatoda008']/option"; 
	var nodesRadio = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
	ponerDatosRadio1Html(tituloRadio1,nodesRadio);
	var nresrad = xmlDoc.getElementById("bodatoda008").getElementsByTagName('answer').length;
	for (i = 0; i < nresrad; i++) {
		respuestasRadio2[i]=xmlDoc.getElementById("bodatoda008").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var tituloMultiple= "9.- " +xmlDoc.getElementById('bodatoda009').getElementsByTagName("title")[0].innerHTML;
	var opcionesMultiple = [];
	var noM = xmlDoc.getElementById("bodatoda009").getElementsByTagName('option').length;
	for (i = 0; i < noM; i++) {
		opcionesMultiple[i] = xmlDoc.getElementById("bodatoda009").getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosMultipleHtml(tituloMultiple,opcionesMultiple);
	respuestaMultiple3=parseInt(xmlDoc.getElementsByTagName("answer")[8].innerHTML);
	respuestaMultiple31=parseInt(xmlDoc.getElementsByTagName("answer")[9].innerHTML);
	
	var tituloMultiple="10.- " +xmlDoc.getElementById('bodatoda010').getElementsByTagName("title")[0].innerHTML;
	var opcionesMultiple = [];
	var noM1 = xmlDoc.getElementById("bodatoda010").getElementsByTagName('option').length;
	for (i = 0; i < noM1; i++) {
		opcionesMultiple[i] = xmlDoc.getElementById("bodatoda010").getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosMultiple1Html(tituloMultiple,opcionesMultiple);
	respuestaMultiple4=parseInt(xmlDoc.getElementsByTagName("answer")[10].innerHTML);
	respuestaMultiple41=parseInt(xmlDoc.getElementsByTagName("answer")[11].innerHTML);
	respuestaMultiple42=parseInt(xmlDoc.getElementsByTagName("answer")[12].innerHTML);
	respuestaMultiple43=parseInt(xmlDoc.getElementsByTagName("answer")[13].innerHTML);
	
	
	function ponerTitulo(t) {
		document.getElementById("Texto").innerHTML = t;
	}
	function ponerTitulo2(t) {
		document.getElementById("Texto2").innerHTML = t;
	}
	
	function ponerDatosCheckboxHtml(t,nodes) {
		var checkboxContainer=document.getElementById('check');
		document.getElementById('Checkbox').innerHTML = t;
		var result = nodes.iterateNext();
		i=0;
		while (result) {
			var input = document.createElement("input");
			var label = document.createElement("label");   
			label.innerHTML = result.innerHTML
			label.setAttribute("for", "color_"+i);
			input.type="checkbox";
			input.name="color";
			input.id="color_"+i; i++;
			checkboxContainer.appendChild(input);
			checkboxContainer.appendChild(label);
			checkboxContainer.appendChild(document.createElement("br"));
			result = nodes.iterateNext();
		} 
	}
	
	function ponerDatosCheckHtml(ti,nodes){
		var checkContainer=document.getElementById('check2');
		document.getElementById('Checkbox2').innerHTML = ti;
		var result = nodes.iterateNext();
		i=0;
		while(result){
			var input= document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML = result.innerHTML;
			label.setAttribute("for","color_"+i);
			input.type="checkbox";
			input.name="color2";
			input.id="color_"+i;i++;
			checkContainer.appendChild(input);
			checkContainer.appendChild(label);
			checkContainer.appendChild(document.createElement("br"));
			result = nodes.iterateNext();
		}
	} 
	
	
	function ponerDatosSelectHtml(tu,nodes) {
		document.getElementById("Select").innerHTML=tu;
		var select = document.getElementsByTagName("select")[0];
		var result = nodes.iterateNext();
		i=0;
		while(result){
			var option = document.createElement("option");
			option.text = result.innerHTML;
			option.value=i+1;i++;
			select.options.add(option);
			result=nodes.iterateNext();
		}
	}
	
	function ponerDatosSelectHtml2(tx,optx) {
		document.getElementById("Select2").innerHTML=tx;
		var select = document.getElementsByTagName("select")[1];
		for (i = 0; i < optx.length; i++) {
			var option = document.createElement("option");
			option.text = optx[i];
			option.value=i+1;
			select.options.add(option);
		}
	}
	
	function ponerDatosRadioHtml(t,nodes) {
		var checkboxContainer=document.getElementById('radi');
		document.getElementById('Radio').innerHTML = t;
		var result = nodes.iterateNext();
		i=0;
		while(result){
			var input= document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML = result.innerHTML;
			label.setAttribute("for","color_"+i);
			input.type="radio";
			input.name="color3";
			input.id="color_"+i;i++;
			checkboxContainer.appendChild(input);
			checkboxContainer.appendChild(label);
			checkboxContainer.appendChild(document.createElement("br"));
			result = nodes.iterateNext();
		}
	}
	function ponerDatosRadio1Html(t,nodes) {
		var checkboxContainer=document.getElementById('radi2');
		document.getElementById('Radio2').innerHTML = t;
		var result = nodes.iterateNext();
		i=0;
		while(result){
			var input= document.createElement("input");
			var label = document.createElement("label");
			label.innerHTML = result.innerHTML;
			label.setAttribute("for","color_"+i);
			input.type="radio";
			input.name="color4";
			input.id="color_"+i;i++;
			checkboxContainer.appendChild(input);
			checkboxContainer.appendChild(label);
			checkboxContainer.appendChild(document.createElement("br"));
			result = nodes.iterateNext();
		} 
	}
	
	function ponerDatosMultipleHtml(tu,optu) {
		document.getElementById("Multiple").innerHTML=tu;
		var multiple = document.getElementsByTagName("select")[2];
		for (i = 0; i < optu.length; i++) {
			var option = document.createElement("option");
			option.text = optu[i];
			option.value=i+1;
			multiple.options.add(option );
		}
	}
	
	function ponerDatosMultiple1Html(tu,optu) {
		document.getElementById("Multiple2").innerHTML=tu;
		var multiple = document.getElementsByTagName("select")[3];
		for (i = 0; i < optu.length; i++) {
			var option = document.createElement("option");
			option.text = optu[i];
			option.value=i+1;
			multiple.options.add(option);
		}
	}
}
function corregirTexto() {
	//Vosotros debéis comparar el texto escrito con el texto que hay en el xml
	//en este ejemplo hace una comparación de números enteros
	var s=formElement.elements[0].value;
	if (s==respuesta) {
		darRespuestaHtml("Pregunta 1: Correcta!");
		nota +=1;
	}
	else {
		darRespuestaHtml("Pregunta 1: Incorrecta");
	}
	var useranswer = xmlDoc.createElement("useranswer");   
	useranswer.innerHTML = s;
	xmlDoc.getElementById("bodatoda001").appendChild(useranswer);
}

function corregirTexto2() {
	//Vosotros debéis comparar el texto escrito con el texto que hay en el xml
	//en este ejemplo hace una comparación de números enteros
	var s=formElement.elements[1].value;
	if (s==respuesta2) {
		darRespuestaHtml("Pregunta 2: Correcta!");
		nota +=1;
	}
	else {
		darRespuestaHtml("Pregunta 2: Incorrecta");
	}
}
function corregirCheckbox() {
	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.color[i].checked) {
			escorrecta[i]=false;
			for (j = 0; j < respuestasCheckbox.length; j++) {
				if (i==respuestasCheckbox[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				nota +=1
				darRespuestaHtml("Pregunta 3: Correcta!");
				} else {
				darRespuestaHtml("Pregunta 3: Incorrecta");
			}
		}
	}
}

function corregirCheckbox2() {
	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.color2.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.color2[i].checked) {
			escorrecta[i]=false;
			for (j = 0; j < respuestasCheck.length; j++) {
				if (i==respuestasCheck[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				nota +=1
				darRespuestaHtml("Pregunta 4: Correcta!");
				} else {
				darRespuestaHtml("Pregunta 4: Incorrecta");
			}
		}
	}
}
function corregirSelect() {
	var sel = formElement.elements[13];
	if (sel.selectedIndex==respuestaSelect) {
		darRespuestaHtml("Pregunta 5: Correcta!");
		nota +=1;
	}
	else darRespuestaHtml("Pregunta 5: Incorrecta");
}

function corregirSelect2() {
	var sel = formElement.elements[14];
	if (sel.selectedIndex==respuestaSel2) {
		darRespuestaHtml("Pregunta 6: Correcta!");
		nota +=1;
	}
	else darRespuestaHtml("Pregunta 6: Incorrecta");
}

function corregirMultiple() {
	var sel = formElement.elements[23];
	if (sel.selectedIndex==respuestaMultiple3&&respuestaMultiple31) {
		darRespuestaHtml("Pregunta 9: Correcta!");
		nota +=1;
	}
	else darRespuestaHtml("Pregunta 9: Incorrecta");
}





function corregirRadio() {
	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.color3.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.color3[i].checked) {
			escorrecta[i]=false;
			for (j = 0; j < respuestasRadio.length; j++) {
				if (i==respuestasRadio[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				nota +=1
				darRespuestaHtml("Pregunta 7: Correcta!");
				} else {
				darRespuestaHtml("Pregunta 7: Incorrecta");
			}
		}
	}
}

function corregirRadio2() {
	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
	var f=formElement;
	var escorrecta = [];
	for (i = 0; i < f.color4.length; i++) {  //"color" es el nombre asignado a todos los checkbox
		if (f.color4[i].checked) {
			escorrecta[i]=false;
			for (j = 0; j < respuestasRadio2.length; j++) {
				if (i==respuestasRadio2[j]) escorrecta[i]=true;
			}
			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
			if (escorrecta[i]) {
				nota +=1
				darRespuestaHtml("Pregunta 8: Correcta!");
				} else {
				darRespuestaHtml("Pregunta 8: Incorrecta");
			}
		}
	}
}

function corregirMultiple2() {
	var sel = formElement.elements[24];
	if (sel.selectedIndex==respuestaMultiple4&&respuestaMultiple41&&respuestaMultiple42&&respuestaMultiple43) {
		darRespuestaHtml("Pregunta 10: Correcta!");
		nota +=1;
	}
	else darRespuestaHtml("Pregunta 10: Incorrecta");
}


function darRespuestaHtml(r) {
	var p = document.createElement("p");
	var node = document.createTextNode(r);
	p.appendChild(node);
	document.getElementById('resultados').appendChild(p);
}

function presentarNota() {
	document.getElementById('resultados').style.display = "block";
	//Código transformación xslt con xmlDoc y xslDoc
	
	darRespuestaHtml("Puntuación: "+nota+" puntos sobre 10");
}



