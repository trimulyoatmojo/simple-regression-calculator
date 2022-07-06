var click = document.querySelector( "button" );
click.addEventListener( "click", function() {

// ambil semua input Y dan X
	var arrY = document.querySelectorAll( "td.Y input" );
	var arrX = document.querySelectorAll( "td.X input" );





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
	




// create XY

	var arrXY = [];

	for(var i = 0; i < arrX.length; i++) {
		var Y = parseInt(arrY[i].value) ? parseInt(arrY[i].value) : 0;
		var X = parseInt(arrX[i].value) ? parseInt(arrX[i].value) : 0;
		var hasilXY = X * Y;
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




//  create X^2

	arrX2 = [];

	for(var i = 0; i < arrX.length; i++) {
		var X2 = parseInt(arrX[i].value) ? parseInt(arrX[i].value) : 0;
		var hasilX2 = Math.pow(X2,2);
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





// create Y^2
	arrY2 = [];

	for(var i = 0; i < arrX.length; i++) {
		var Y2 = parseInt(arrY[i].value) ? parseInt(arrY[i].value) : 0;
		var hasilY2 = Math.pow(Y2,2);
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




// create nilai Y prediksi

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
	}
	console.log("============================== Ypred:");
	console.log(Ypred);


	var totalJmlYpred = 0;

	for(var i = 0; i < arrX.length; i++) {
		totalJmlYpred += Ypred[i];
	}
	console.log("============================== Jumlah Ypred:")
	console.log(totalJmlYpred);




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


// jumlah (Y-Ypred)^2
	
	var totalJmlYYpred = 0;

	for(var i=0;i<arrX.length;i++){
		totalJmlYYpred += YYpred[i];
	}
	console.log("============================== Jumlah (Y-Ypred)^2:")
	console.log(totalJmlYYpred);



// create (Y-Yrata)^2
	


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


	var totalJmlYYrata = 0;

	for(var i=0;i<arrX.length;i++){
		totalJmlYYrata += YYrata[i];
	}
	console.log("============================== Jumlah (Y-Yrata)^2:")
	console.log(totalJmlYYrata);




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