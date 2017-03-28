
//leer xml
//poner titulo
//al darle al boton corregir

var formElement=null;
var respuestaSelect=null;
var respuestaSelect2=null;
var respuestaSelect3=null;
var respuestaSelect31=null;
var respuestaSelect4=null;
var respuestaSelect41=null;
var respuestaSelect42=null;
var respuestaSelect43=null;
var respuestasCheckbox = [];
var respuestasCheck = [];
var respuestasRadio = [];
var respuestasRadio2 = [];
var nota = 0;

var titulo="";
window.onload=function(){
	
	formElement=document.getElementById('myform');
	formElement.onsubmit=function(){
		if(comprobar()){
			inicializar();
			corregirTexto();
			corregirTexto2();
			corregirCheckbox();
			corregirCheckbox2();
			corregirSelect();
			corregirSelect2();
			corregirRadio();
			corregirRadio2();
			corregirSelect3();
			corregirSelect4();
			mostrar();
			presentarNota();
		}
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
}
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

function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML;
	titulo= xmlDoc.getElementById('bodatoda001').getElementsByTagName('title')[0].innerHTML;
	ponerTitulo(titulo);
	respuesta=xmlDoc.getElementById('bodatoda001').getElementsByTagName('answer')[0].innerHTML;
	titulo=titulo;
	
	var xmlDoc = dadesXml.responseXML;
	titulo= xmlDoc.getElementById('bodatoda002').getElementsByTagName('title')[0].innerHTML;
	ponerTitulo1(titulo);
	respuesta2=xmlDoc.getElementsByTagName('answer')[1].innerHTML;
	titulo=titulo; 
	
	var tituloCheckbox = xmlDoc.getElementById('bodatoda003').getElementsByTagName("title")[0].innerHTML;
	var xpath="questions/question[@id='bodatoda003']/option";
	var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
	ponerDatosCheckboxHtml(tituloCheckbox,nodesCheckbox);
	var nres = xmlDoc.getElementById("bodatoda003").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) { 
		respuestasCheckbox[i]=xmlDoc.getElementById("bodatoda003").getElementsByTagName("answer")[i].innerHTML;
	}
	
    var tituloCheck = xmlDoc.getElementById('bodatoda004').getElementsByTagName("title")[0].innerHTML;
	var opcionesCheck = [];
	var xpath="questions/question[@id='bodatoda004']/option";
    var nodesCheckbox = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
	ponerDatosCheckHtml(tituloCheck,nodesCheckbox);
	var nres1 = xmlDoc.getElementById("bodatoda004").getElementsByTagName('answer').length;
	for (i = 0; i < nres1; i++) { 
		respuestasCheck[i]=xmlDoc.getElementById("bodatoda004").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var tituloSelect=xmlDoc.getElementById('bodatoda005').getElementsByTagName("title")[0].innerHTML;
	var xpath="questions/question[@id='bodatoda005']/option";
	var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
	ponerDatosSelectHtml(tituloSelect,nodesSelect);
	respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
	
	var tituloSelectx=xmlDoc.getElementById('bodatoda006').getElementsByTagName("title")[0].innerHTML;
	var xpath="questions/question[@id='bodatoda006']/option";
	var nodesSelect = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
	ponerDatosSelectHtmlx(tituloSelectx,nodesSelect);
	respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);
	
	var tituloRadio = xmlDoc.getElementById('bodatoda007').getElementsByTagName("title")[0].innerHTML;
	var xpath = "questions/question[@id='bodatoda007']/option"; 
	var nodesRadio = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
	ponerDatosRadioHtml(tituloRadio,nodesRadio);
	var nresrad = xmlDoc.getElementById("bodatoda007").getElementsByTagName('answer').length;
	for (i = 0; i < nresrad; i++) { 
		respuestasRadio[i]=xmlDoc.getElementById("bodatoda007").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var tituloRadio1 = xmlDoc.getElementById('bodatoda008').getElementsByTagName("title")[0].innerHTML;
	var xpath = "questions/question[@id='bodatoda008']/option"; 
	var nodesRadio = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null); 
	ponerDatosRadio1Html(tituloRadio1,nodesRadio);
	var nresrad = xmlDoc.getElementById("bodatoda008").getElementsByTagName('answer').length;
	for (i = 0; i < nresrad; i++) { 
		respuestasRadio2[i]=xmlDoc.getElementById("bodatoda008").getElementsByTagName("answer")[i].innerHTML;
	}
	
	var tituloMultiple=xmlDoc.getElementById('bodatoda009').getElementsByTagName("title")[0].innerHTML;
	var xpath = "questions/question[@id='bodatoda009']/option";
	var nodesMultiple = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
	ponerDatosMultipleHtml(tituloMultiple,nodesMultiple);
	respuestaSelect3=parseInt(xmlDoc.getElementsByTagName("answer")[8].innerHTML);
	respuestaSelect31=parseInt(xmlDoc.getElementsByTagName("answer")[9].innerHTML);
	
	var tituloMultiple=xmlDoc.getElementById('bodatoda010').getElementsByTagName("title")[0].innerHTML;
	var xpath = "questions/question[@id='bodatoda010']/option";
	var nodesMultiple = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
	ponerDatosMultiple1Html(tituloMultiple,nodesMultiple);
	respuestaSelect4=parseInt(xmlDoc.getElementsByTagName("answer")[10].innerHTML);
	respuestaSelect41=parseInt(xmlDoc.getElementsByTagName("answer")[11].innerHTML);
	respuestaSelect42=parseInt(xmlDoc.getElementsByTagName("answer")[12].innerHTML);
	respuestaSelect43=parseInt(xmlDoc.getElementsByTagName("answer")[13].innerHTML);
	
}
function ponerTitulo(t){
	document.getElementsByTagName('h3')[0].innerHTML=t;
}
function ponerTitulo1(t){
	document.getElementsByTagName('h3')[1].innerHTML=t;
}

function ponerDatosCheckboxHtml(t,nodes){
	var checkboxContainer=document.getElementById('div1');
	document.getElementById('bodatoda003').innerHTML = t;
	var result = nodes.iterateNext();
	i=0;
	while(result){
		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML = result.innerHTML;
		label.setAttribute("for","color"+i);
		input.type="checkbox";
		input.name="color";
		input.id="color"+i;i++;
		checkboxContainer.appendChild(input);
		checkboxContainer.appendChild(label);
		checkboxContainer.appendChild(document.createElement("br"));
		result = nodes.iterateNext();
	}
}

function ponerDatosCheckHtml(ti,nodes){
	var checkContainer=document.getElementById('div2');
	document.getElementById('bodatoda004').innerHTML = ti;
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


function ponerDatosSelectHtml(tu,nodes){
	document.getElementById("bodatoda005").innerHTML=tu;
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

function ponerDatosSelectHtmlx(tx,nodes){
	document.getElementById("bodatoda006").innerHTML=tx;
	var select = document.getElementsByTagName("select")[1];
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

function ponerDatosRadioHtml(t,nodes){
	var checkboxContainer=document.getElementById('div3');
	document.getElementById('bodatoda007').innerHTML = t;
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
function ponerDatosRadio1Html(t,nodes){
	var checkboxContainer=document.getElementById('div4');
	document.getElementById('bodatoda008').innerHTML = t;
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

function ponerDatosMultipleHtml(tu,nodes){
	document.getElementById("bodatoda009").innerHTML=tu;
	var multiple = document.getElementsByTagName("select")[2];
	var result = nodes.iterateNext();
	i=0;
	while(result){
		var option = document.createElement("option");
		option.text = result.innerHTML;
		option.value=i+1;i++;
		multiple.options.add(option);
		result=nodes.iterateNext();
	}
}

function ponerDatosMultiple1Html(tu,nodes){
	document.getElementById("bodatoda010").innerHTML=tu;
	var multiple = document.getElementsByTagName("select")[3];
	var result = nodes.iterateNext();
	i=0;
	while(result){
		var option = document.createElement("option");
		option.text = result.innerHTML;
		option.value=i+1;i++;
		multiple.options.add(option);
		result=nodes.iterateNext();
	}
}


function corregirSelect(){
	var sel = formElement.elements[13];  
	if (sel.selectedIndex==respuestaSelect) { 
		darRespuestaHtml("P5: Exacto!");
		nota +=1;
	}
	else darRespuestaHtml("P5: Incorrecto");
}

function corregirSelect2(){
	var sel = formElement.elements[14];  
	if (sel.selectedIndex==respuestaSelect2) { 
		darRespuestaHtml("P6: Exacto!");
		nota +=1;
	}
	else darRespuestaHtml("P6: Incorrecto");
}

function corregirSelect3(){
	var sel = formElement.elements[23];  
	if (sel.selectedIndex==respuestaSelect3&&respuestaSelect31) { 
		darRespuestaHtml("P9: Exacto!");
		nota +=1;
	}
	else darRespuestaHtml("P9: Incorrecto");
}

function corregirSelect4(){
	var sel = formElement.elements[24];  
	if (sel.selectedIndex==respuestaSelect4&&respuestaSelect41&&respuestaSelect42&&respuestaSelect43) { 
		darRespuestaHtml("P10: Exacto!");
		nota +=1;
	}
	else darRespuestaHtml("P10: Incorrecto");
}


function darRespuestaHtml(r){
	var p = document.createElement("p");
	var node = document.createTextNode(r);
	p.appendChild(node);
	document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
	darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar(){
	document.getElementById('resultadosDiv').innerHTML = "";
	nota=0.0;
}

function corregirTexto(){
	//Vosotros debéis comparar el texto escrito con el texto que hay en el xml
	//en este ejemplo hace una comparación de números enteros
	var s=formElement.elements[0].value;     
	if (s==respuesta) {
		darRespuestaHtml("P1: Exacto!");
		nota +=1;
	}
	else {
		darRespuestaHtml("P1: Incorrecto");
	}
}

function corregirTexto2(){
	//Vosotros debéis comparar el texto escrito con el texto que hay en el xml
	//en este ejemplo hace una comparación de números enteros
	var s=formElement.elements[1].value;     
	if (s==respuesta2) {
		darRespuestaHtml("P2: Exacto!");
		nota +=1;
	}
	else {
		darRespuestaHtml("P2: Incorrecto");
	}
}

function corregirCheckbox(){
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
				darRespuestaHtml("P3: Exacto!");    
				} else {
				darRespuestaHtml("P3: Incorrecta");
			}   
		} 
	}
}

function corregirCheckbox2(){
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
				darRespuestaHtml("P4: Exacto!");    
				} else {
				darRespuestaHtml("P4: Incorrecta");
			}   
		} 
	}
}

function corregirRadio(){
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
				darRespuestaHtml("P7: Exacto!");    
				} else {
			darRespuestaHtml("P7: Incorrecta");
			}   
			} 
			}
			}
			
			function corregirRadio2(){
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
			darRespuestaHtml("P8: Exacto!");    
			} else {
			darRespuestaHtml("P8: Incorrecta");
			}   
			} 
			}
			}
			
			function mostrar(){
			document.getElementById('resultadosDiv').style.display = 'block';}
			
			function comprobar(){
			var f=formElement;
			var checkeado=false;
			var checkeado2=false;
			var checkeado3=false;
			var checkeado4=false;
			
			for(i=0;i<f.color.length;i++){
			if(f.color[i].checked) {checkeado = true;}
			}
			
			for(i=0;i<f.color2.length;i++){
			if(f.color2[i].checked) {checkeado2 = true;}
			}
			
			for(i=0;i<f.color3.length;i++){
			if(f.color3[i].checked) {checkeado3 = true;}
			}
			
			for(i=0;i<f.color4.length;i++){
			if(f.color4[i].checked) {checkeado4 = true;}
			}
			
			if(f.elements[0].value==""){
			f.elements[0].focus();
			alert("No has contestado la primera pregunta");
			return false;
			}else
			
			if(f.elements[1].value==""){
			f.elements[1].focus();
			alert("No has contestado la segunda pregunta");
			return false;
			}else
			
			if(f.elements[13].selectedIndex==0){
			f.elements[13].focus();
			alert("No has contestado a la quinta pregunta");
			return false;
			}else
			
			if(f.elements[14].selectedIndex==0){
			f.elements[14].focus();
			alert("No has contestado a la sexta pregunta");
			return false;
			}else
			
			if(f.elements[23].selectedIndex!=0&&f.elements[23].selectedIndex!=1&&f.elements[23].selectedIndex!=2&&f.elements[23].selectedIndex!=3){
			f.elements[23].scrollIntoView();
			alert("No has contestado a la novena pregunta");
			return false;
			}else
			
			if(f.elements[24].selectedIndex!=0&&f.elements[24].selectedIndex!=1&&f.elements[24].selectedIndex!=2&&f.elements[24].selectedIndex!=3&&f.elements[24].selectedIndex!=4&&
			f.elements[24].selectedIndex!=5&&f.elements[24].selectedIndex!=6&&f.elements[24].selectedIndex!=7&&f.elements[24].selectedIndex!=8&&f.elements[24].selectedIndex!=9&&
			f.elements[24].selectedIndex!=10&&f.elements[24].selectedIndex!=11&&f.elements[24].selectedIndex!=12&&f.elements[24].selectedIndex!=13&&f.elements[24].selectedIndex!=14&&
			f.elements[24].selectedIndex!=15&&f.elements[24].selectedIndex!=16&&f.elements[24].selectedIndex!=17&&f.elements[24].selectedIndex!=18&&f.elements[24].selectedIndex!=19&&
			f.elements[24].selectedIndex!=20&&f.elements[24].selectedIndex!=21&&f.elements[24].selectedIndex!=22&&f.elements[24].selectedIndex!=23&&f.elements[24].selectedIndex!=24&&
			f.elements[24].selectedIndex!=25&&f.elements[24].selectedIndex!=26&&f.elements[24].selectedIndex!=27&&f.elements[24].selectedIndex!=28){
			f.elements[24].scrollIntoView();
			alert("No has contestado a la décima pregunta");
			return false;
			}else
			
			if(!checkeado){
			document.getElementsByTagName("h3")[2].focus();
			alert("No has respondido a la tercera pregunta");
			return false;
			}else
			
			if(!checkeado2){
			document.getElementsByTagName("h3")[3].focus();
			alert("No has respondido a la cuarta pregunta");
			return false;
			}
			
			if(!checkeado3){
			document.getElementsByTagName("h3")[6].focus();
			alert("No has respondido a la séptima pregunta");
			return false;
			}else
			
			if(!checkeado4){
			document.getElementsByTagName("h3")[7].focus();
			alert("No has respondido a la octava pregunta");
			return false;
			}else{return true;}
			
			}							