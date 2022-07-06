var click = document.querySelector( "button" );
click.addEventListener( "click", function() {

// ambil semua input Y dan X
	var arrY = document.querySelectorAll( "td.Y input" );
	var arrX = document.querySelectorAll( "td.X input" );




// create tabel jumlah
	var jumlah = document.querySelector("table");
	var trJumlah = document.createElement("tr");
	var tdJumlah = document.createElement("td");
	var isiTdJumlah = document.createTextNode("Jml");
	tdJumlah.appendChild(isiTdJumlah);
	trJumlah.appendChild(tdJumlah);
	jumlah.appendChild(trJumlah);




// jumlah Y
	var totalJmlArrY = 0;

	for(var i = 0; i < arrX.length; i++) {
		if(parseInt(arrY[i].value)){
			totalJmlArrY += parseInt(arrY[i].value);
		}else {
			totalJmlArrY += parseInt(0);
		}
	}
	console.log("============================== Jumlah Y:");
	console.log(totalJmlArrY);

// mengisi tabel jumlah Y
	var tdJumlahY = document.createElement("td");
	var isiTdJumlahY = document.createTextNode(totalJmlArrY);
	tdJumlahY.appendChild(isiTdJumlahY);
	trJumlah.appendChild(tdJumlahY);




// jumlah X
	var totalJmlArrX = 0;

	for(var i = 0; i < arrX.length; i++) {
		if(parseInt(arrX[i].value)) {
			totalJmlArrX += parseInt(arrX[i].value);
		}else {
			totalJmlArrX += 0;
		}
	}
	console.log("============================== Jumlah X:");
	console.log(totalJmlArrX);

// mengisi tabel jumlah X
	var tdJumlahX = document.createElement("td");
	var isiTdJumlahX = document.createTextNode(totalJmlArrX);
	tdJumlahX.appendChild(isiTdJumlahX);
	trJumlah.appendChild(tdJumlahX);




// create XY
	var tHeadXY = document.querySelector("tHead tr");
	var elementTHeadXY = document.createElement("th");
	var teksTHeadXY = document.createTextNode("XY");
	elementTHeadXY.appendChild(teksTHeadXY);
	tHeadXY.appendChild(elementTHeadXY);

	var arrXY = [];

	for(var i = 0; i < arrX.length; i++) {
		var Y = parseInt(arrY[i].value) ? parseInt(arrY[i].value) : 0;
		var X = parseInt(arrX[i].value) ? parseInt(arrX[i].value) : 0;
		var hasilXY = X * Y;
		var td = document.querySelector("tr.no" + i);
		var tdBaru = document.createElement("td");
		var isiTdBaru = document.createTextNode(hasilXY);
		tdBaru.appendChild(isiTdBaru);
		td.appendChild(tdBaru);
		arrXY.push(hasilXY);
	}
	console.log("============================== XY:");
	console.log(arrXY);

// jumlah XY
	var totalJmlXY = 0;

	for(var i = 0; i < arrX.length; i++) {
		totalJmlXY += arrXY[i];
	}
	console.log("============================== Jumlah XY:");
	console.log(totalJmlXY);

// mengisi tabel XY
	var tdJumlahXY = document.createElement("td");
	var isiTdJumlahXY = document.createTextNode(totalJmlXY);
	tdJumlahXY.appendChild(isiTdJumlahXY);
	trJumlah.appendChild(tdJumlahXY);




//  create X^2
	var tHeadX2 = document.querySelector("tHead tr");
	var elementTHeadX2 = document.createElement("th");
	var teksTHeadX2 = document.createTextNode("X^2");
	elementTHeadX2.appendChild(teksTHeadX2);
	tHeadX2.appendChild(elementTHeadX2);

	arrX2 = [];

	for(var i = 0; i < arrX.length; i++) {
		var X2 = parseInt(arrX[i].value) ? parseInt(arrX[i].value) : 0;
		var hasilX2 = Math.pow(X2,2);
		var td2 = document.querySelector("tr.no" + i);
		var tdBaru2 = document.createElement("td");
		var isiTdBaru2 = document.createTextNode(hasilX2);
		tdBaru2.appendChild(isiTdBaru2);
		td2.appendChild(tdBaru2);
		arrX2.push(hasilX2);
	}
	console.log("============================== X^2:");
	console.log(arrX2);

// jumlah X^2
	var totalJmlX2 = 0;

	for(var i = 0; i < arrX.length; i++) {
		totalJmlX2 += arrX2[i];
	}
	console.log("============================== Jumlah X^2:");
	console.log(totalJmlX2);

// mengisi X^2
	var tdJumlahX2 = document.createElement("td");
	var isiTdJumlahX2 = document.createTextNode(totalJmlX2);
	tdJumlahX2.appendChild(isiTdJumlahX2);
	trJumlah.appendChild(tdJumlahX2);




// create Y^2
	var tHeadY2 = document.querySelector("tHead tr");
	var elementTHeadY2 = document.createElement("th");
	var teksTHeadY2 = document.createTextNode("Y^2");
	elementTHeadY2.appendChild(teksTHeadY2);
	tHeadY2.appendChild(elementTHeadY2);

	arrY2 = [];

	for(var i = 0; i < arrX.length; i++) {
		var Y2 = parseInt(arrY[i].value) ? parseInt(arrY[i].value) : 0;
		var hasilY2 = Math.pow(Y2,2);
		var td3 = document.querySelector("tr.no" + i);
		var tdBaru3 = document.createElement("td");
		var isiTdBaru3 = document.createTextNode(hasilY2);
		tdBaru3.appendChild(isiTdBaru3);
		td3.appendChild(tdBaru3);
		arrY2.push(hasilY2);
	}
	console.log("============================== Y^2:");
	console.log(arrY2);

// jumlah Y^2
	var totalJmlY2 = 0;

	for(var i = 0; i < arrX.length; i++){
		totalJmlY2 += arrY2[i];
	}
	console.log("============================== Jumlah Y^2:");
	console.log(totalJmlY2);

// mengisiisi Y^2
	var tdJumlahY2 = document.createElement("td");
	var isiTdJumlahY2 = document.createTextNode(totalJmlY2);
	tdJumlahY2.appendChild(isiTdJumlahY2);
	trJumlah.appendChild(tdJumlahY2);




// create nilai Y prediksi
	var tHeadYpred = document.querySelector("tHead tr");
	var elementTHeadYpred = document.createElement("th");
	var teksTHeadYpred = document.createTextNode("Ypred");
	elementTHeadYpred.appendChild(teksTHeadYpred);
	tHeadYpred.appendChild(elementTHeadYpred);

	// var n = document.querySelector("input#n");

	var n = arrY.length;
	console.log("============================== n:");
	console.log(n);

	var b = ((n * totalJmlXY) - (totalJmlArrX * totalJmlArrY)) / ((n * totalJmlX2) - Math.pow(totalJmlArrX, 2));
	console.log("============================== nilai b:");
	console.log(b);

	var a = (totalJmlArrY - (b * totalJmlArrX)) / n;
	console.log("============================== nilai a:");
	console.log(a);

	var Ypred = [];

// jumlah nilai Y prediksi
	for(var i = 0; i < arrX.length; i++) {
		hasilYpred =  a + (1.497 * parseInt(arrX[i].value));
		Ypred.push(hasilYpred);
		var td4 = document.querySelector("tr.no" + i);
		var tdBaru4 = document.createElement("td");
		var isiTdBaru4 = document.createTextNode(Ypred[i]);
		tdBaru4.appendChild(isiTdBaru4);
		td4.appendChild(tdBaru4);
	}
	console.log("============================== Ypred:");
	console.log(Ypred);


	var totalJmlYpred = 0;

	for(var i = 0; i < arrX.length; i++) {
		totalJmlYpred += Ypred[i];
	}
	console.log("============================== Jumlah Ypred:")
	console.log(totalJmlYpred);

// mengisi Y prediksi
	var tdJumlahYpred = document.createElement("td");
	var isiTdJumlahYpred = document.createTextNode(totalJmlYpred);
	tdJumlahYpred.appendChild(isiTdJumlahYpred);
	trJumlah.appendChild(tdJumlahYpred);




// create (Y-Ypred)^2
	var YYpred = [];

	for(var i = 0; i < arrX.length; i++) {
		var YYpred1 = parseInt(arrY[i].value);
		var YYpred2 = Ypred[i];
		var YYpred3 = Math.pow((YYpred1 - YYpred2),2);
		YYpred.push(YYpred3);
	}
	console.log("============================== (Y-Ypred)^2:")
	console.log(YYpred);


	var tHeadYYpred = document.querySelector("tHead tr");
	var elementTHeadYYpred = document.createElement("th");
	var teksTHeadYYpred = document.createTextNode("(Y-Ypred)^2");
	elementTHeadYYpred.appendChild(teksTHeadYYpred);
	tHeadYYpred.appendChild(elementTHeadYYpred);

// jumlah (Y-Ypred)^2
	for( i=0;i<arrX.length;i++){
		var td5 = document.querySelector("tr.no"+i);
		var tdBaru5 = document.createElement("td");
		var isiTdBaru5 = document.createTextNode(YYpred[i]);
		tdBaru5.appendChild(isiTdBaru5);
		td5.appendChild(tdBaru5);
	}

	var totalJmlYYpred = 0;

	for(var i=0;i<arrX.length;i++){
		totalJmlYYpred += YYpred[i];
	}
	console.log("============================== Jumlah (Y-Ypred)^2:")
	console.log(totalJmlYYpred);

// mengisi (Y-Ypred)^2
	var tdJumlahYYpred = document.createElement("td");
	var isiTdJumlahYYpred = document.createTextNode(totalJmlYYpred);
	tdJumlahYYpred.appendChild(isiTdJumlahYYpred);
	trJumlah.appendChild(tdJumlahYYpred);



// create (Y-Yrata)^2
	var tHeadYYrata = document.querySelector("tHead tr");
	var elementTHeadYYrata = document.createElement("th");
	var teksTHeadYYrata = document.createTextNode("(Y-Yrata)^2");
	elementTHeadYYrata.appendChild(teksTHeadYYrata);
	tHeadYYrata.appendChild(elementTHeadYYrata);



	var YYrata = [];

	for(var i = 0; i < arrX.length; i++) {
		var YYrata1 = parseInt(arrY[i].value);
		var YYrata2 = totalJmlArrY / n;
		var YYrata3 = Math.pow((YYrata1 - YYrata2),2);
		YYrata.push(YYrata3);
	}
	console.log("============================== (Y-Yrata)^2:")
	console.log(YYrata);

// jumlah (Y-Yrata)^2
	for( i=0;i<arrX.length;i++){
		var td6 = document.querySelector("tr.no"+i);
		var tdBaru6 = document.createElement("td");
		var isiTdBaru6 = document.createTextNode(YYrata[i]);
		tdBaru6.appendChild(isiTdBaru6);
		td6.appendChild(tdBaru6);
	}


	var totalJmlYYrata = 0;

	for(var i=0;i<arrX.length;i++){
		totalJmlYYrata += YYrata[i];
	}
	console.log("============================== Jumlah (Y-Yrata)^2:")
	console.log(totalJmlYYrata);

// mengisi (Y-Yrata)^2
	var tdJumlahYYrata = document.createElement("td");
	var isiTdJumlahYYrata = document.createTextNode(totalJmlYYrata);
	tdJumlahYYrata.appendChild(isiTdJumlahYYrata);
	trJumlah.appendChild(tdJumlahYYrata);


// koefisien determinasi / R^2
	var R2 = 1 - (totalJmlYYpred / totalJmlYYrata);
	console.log("============================== Koefisien Dererminasi / R^2:");
	console.log(R2);

// koefisien determinasi disesuaikan (adjusted)
	var Radj = R2 - ((1 * (1 - R2)) / (n - 1 - 1));
	console.log("============================== Koefisien d disesuaikan (adjusted) / Radj:");
	console.log(Radj);

// kesalahan baku estimasi
	var Se = Math.sqrt(totalJmlYYpred / (n - 2));
	console.log("============================== Se:");
	console.log(Se);

// standar error koefisien regresi
	var Sb = Se / (Math.sqrt(totalJmlX2 - (Math.pow(totalJmlArrX, 2) / n)));
	console.log("============================== Sb:");
	console.log(Sb);

// uji f
	// k = variabel
	var F = (R2 / (2 -1)) / ((1 - R2) / (n - 2));
	console.log("============================== F:");
	console.log(F);

// uji t
	var Thitung = b / Sb;
	console.log("============================== T:");
	console.log(Thitung);
} );