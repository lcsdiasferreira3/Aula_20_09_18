var v=[10];
	v[0] = prompt("Digite o primeiro numero"); 
	v[1] = prompt("Digite o segundo  numero"); 
	v[2] = prompt("Digite o terceiro numero"); 
	v[3] = prompt("Digite o quarto   numero"); 
	v[4] = prompt("Digite o quinto   numero"); 
	v[5] = prompt("Digite o sexto    numero"); 
	v[6] = prompt("Digite o setimo   numero"); 
	v[7] = prompt("Digite o oitavo   numero"); 
	v[8] = prompt("Digite o nono     numero"); 
	v[9] = prompt("Digite o decimo   numero"); 

	var MaiorNum = Math.max(v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],v[8],v[9]);
	var MenorNum = Math.min(v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],v[8],v[9]);
	document.write("O maior numero e:",MaiorNum);
	document.write("<br>");
	document.write("O menor numero e:",MenorNum);
	document.write("<br>");
	//for(var i=0; i < v.length; i++) {
		//document.write(v[i]);
		//}