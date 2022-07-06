let firstClick = document.querySelector("button");
let inputNumber = document.querySelector("input#first");
 
let buttonAtas = firstClick.addEventListener("click", function (){

    firstClick.setAttribute("display", "none");
    inputNumber.setAttribute("display", "none");
    document.querySelector("label").setAttribute("display", "none");
    
    // document.querySelector("h1").appendChild(document.createTextNode("############# Created by Tri Mulyo Atmojo #############"));
     
    let table = document.querySelector("table");
 
    let tHead = document.createElement("THead");
    let trHead = document.createElement("tr");
 
    let thHead = document.createElement("th");
    let th0 = document.createTextNode("No");
    thHead.appendChild(th0);
    trHead.appendChild(thHead);
    tHead.appendChild(trHead);
    table.appendChild(tHead);
 
   
    let thHead1 = document.createElement("th");
    let th1= document.createTextNode("Y");
    thHead1.appendChild(th1);
    trHead.appendChild(thHead1);
    tHead.appendChild(trHead);
    table.appendChild(tHead);
 
    let thHead2 = document.createElement("th");
    let th2 = document.createTextNode("X");
    thHead2.appendChild(th2);
    trHead.appendChild(thHead2);
    tHead.appendChild(trHead);
    table.appendChild(tHead);
 
 
 
    let tBody = document.createElement("TBody");
 
 
 
 
    for(i = 0; i < inputNumber.value; i++){
        let trBody = document.createElement("tr");
        trBody.classList.add("no" + i);
 
 
        let thBody = document.createElement("th");
        let isiThBody = document.createTextNode(i+1);
        thBody.appendChild(isiThBody);
        trBody.appendChild(thBody);
        tBody.appendChild(trBody);
        table.appendChild(tBody);
 
        let tdY = document.createElement("td");
        let tdInputY = document.createElement("input");
        tdInputY.setAttribute("type", "number");
        tdInputY.setAttribute("required", "required");
        tdInputY.classList.add("Y");
        tdY.appendChild(tdInputY);
        trBody.appendChild(tdY);
 
        let tdX = document.createElement("td");
        let tdInputX = document.createElement("input");
        tdInputX.setAttribute("type", "number");
        tdInputX.setAttribute("required", "required");
        tdInputX.classList.add("X");
        tdX.appendChild(tdInputX);
        trBody.appendChild(tdX);
 
    }
 
    let spanBr = document.querySelector("span");
    let br = document.createElement("br");
    spanBr.appendChild(br);
 
    let divButton = document.querySelector("div");
    let buttonHitung = document.createElement("button");
    let isiButtonHitung = document.createTextNode("HITUNG!");
    buttonHitung.appendChild(isiButtonHitung);
    buttonHitung.classList.add("hitung");
    divButton.appendChild(buttonHitung);
    
    
    let copy = document.querySelector(" h5");
    let copyRight = document.createTextNode("copyright@2019");
    copy.appendChild(copyRight);
 
 
    let secondClick = document.querySelector( "button.hitung" );
    secondClick.addEventListener( "click", function() {

        secondClick.setAttribute("display", "none");
 
 
//  Jumlah 
 
        let trBody = document.createElement("tr");
        let jumlah = document.createElement("th");
        let isiJumlah = document.createTextNode("Jumlah");
        jumlah.appendChild(isiJumlah);
        trBody.appendChild(jumlah);
        tBody.appendChild(trBody);
        table.appendChild(tBody);
 
        arrY = document.querySelectorAll("input.Y");
        arrX = document.querySelectorAll("input.X");
 
 
// jumlah Y
        let arrayY = [];
        let totalJmlArrY = 0;
 
        for(let i = 0; i < arrX.length; i++) {
            if(parseInt(arrY[i].value)){
                arrayY.push(parseInt(arrY[i].value));
                totalJmlArrY += parseInt(arrY[i].value);
            }else {
                totalJmlArrY += 0;
                arrayY.push(totalJmlArrY);
            }
        }
        console.log("============================== Y:");
        console.log(arrayY);
 
        console.log("============================== Jumlah Y:");
        console.log(totalJmlArrY);
 
 
// mengisi tabel jumlah Y
        let tdJumlahY = document.createElement("td");
        let isiTdJumlahY = document.createTextNode(totalJmlArrY);
        tdJumlahY.appendChild(isiTdJumlahY);
        trBody.appendChild(tdJumlahY);
 
 
// jumlah X
        let arrayX = [];
        let totalJmlArrX = 0;
 
        for(let i = 0; i < arrX.length; i++) {
            if(parseInt(arrX[i].value)) {
                arrayX.push(parseInt(arrX[i].value));
                totalJmlArrX += parseInt(arrX[i].value);
            }else {
                totalJmlArrX += 0;
                arrayX.push(totalJmlArrX);
            }
        }
        console.log("============================== X:");
        console.log(arrayX);
 
        console.log("============================== Jumlah X:");
        console.log(totalJmlArrX);
 
 
// mengisi tabel jumlah X
        let tdJumlahX = document.createElement("td");
        let isiTdJumlahX = document.createTextNode(totalJmlArrX);
        tdJumlahX.appendChild(isiTdJumlahX);
        trBody.appendChild(tdJumlahX);
 
 
// XY
        let thHead3 = document.createElement("th");
        let th3 = document.createTextNode("XY");
        thHead3.appendChild(th3);
        trHead.appendChild(thHead3);
        tHead.appendChild(trHead);
        table.appendChild(tHead);
 
        let arrXY = [];
 
        for(let i = 0; i < arrX.length; i++) {
            let Y = parseInt(arrY[i].value) ? parseInt(arrY[i].value) : 0;
            let X = parseInt(arrX[i].value) ? parseInt(arrX[i].value) : 0;
            let hasilXY = X * Y;
            let td = document.querySelector("tr.no" + i);
            let tdBaru = document.createElement("td");
            let isiTdBaru = document.createTextNode(hasilXY);
            tdBaru.appendChild(isiTdBaru);
            td.appendChild(tdBaru);
            arrXY.push(hasilXY);
        }
        console.log("============================== XY:");
        console.log(arrXY);
 
 
        // jumlah XY
        let totalJmlXY = 0;
 
        for(let i = 0; i < arrX.length; i++) {
            totalJmlXY += arrXY[i];
        }
        console.log("============================== Jumlah XY:");
        console.log(totalJmlXY);
 
    // mengisi tabel XY
        let tdJumlahXY = document.createElement("td");
        let isiTdJumlahXY = document.createTextNode(totalJmlXY);
        tdJumlahXY.appendChild(isiTdJumlahXY);
        trBody.appendChild(tdJumlahXY);
 
 
 
//  create X^2
        let elementTHeadX2 = document.createElement("th");
        let teksTHeadX2 = document.createTextNode("X^2");
        elementTHeadX2.appendChild(teksTHeadX2);
        trHead.appendChild(elementTHeadX2);
        tHead.appendChild(trHead);
        table.appendChild(tHead);
 
        arrX2 = [];
 
        for(let i = 0; i < arrX.length; i++) {
            let X2 = parseInt(arrX[i].value) ? parseInt(arrX[i].value) : 0;
            let hasilX2 = Math.pow(X2,2);
            let td2 = document.querySelector("tr.no" + i);
            let tdBaru2 = document.createElement("td");
            let isiTdBaru2 = document.createTextNode(hasilX2);
            tdBaru2.appendChild(isiTdBaru2);
            td2.appendChild(tdBaru2);
            arrX2.push(hasilX2);
        }
        console.log("============================== X^2:");
        console.log(arrX2);
 
    // jumlah X^2
        let totalJmlX2 = 0;
 
        for(let i = 0; i < arrX.length; i++) {
            totalJmlX2 += arrX2[i];
        }
        console.log("============================== Jumlah X^2:");
        console.log(totalJmlX2);
 
    // mengisi X^2
        let tdJumlahX2 = document.createElement("td");
        let isiTdJumlahX2 = document.createTextNode(totalJmlX2);
        tdJumlahX2.appendChild(isiTdJumlahX2);
        trBody.appendChild(tdJumlahX2);
 
 
 
 
 
// create Y^2
        let elementTHeadY2 = document.createElement("th");
        let teksTHeadY2 = document.createTextNode("Y^2");
        elementTHeadY2.appendChild(teksTHeadY2);
        trHead.appendChild(elementTHeadY2);
 
        arrY2 = [];
 
        for(let i = 0; i < arrX.length; i++) {
            let Y2 = parseInt(arrY[i].value) ? parseInt(arrY[i].value) : 0;
            let hasilY2 = Math.pow(Y2,2);
            let td3 = document.querySelector("tr.no" + i);
            let tdBaru3 = document.createElement("td");
            let isiTdBaru3 = document.createTextNode(hasilY2);
            tdBaru3.appendChild(isiTdBaru3);
            td3.appendChild(tdBaru3);
            arrY2.push(hasilY2);
        }
        console.log("============================== Y^2:");
        console.log(arrY2);
 
    // jumlah Y^2
        let totalJmlY2 = 0;
 
        for(let i = 0; i < arrX.length; i++){
            totalJmlY2 += arrY2[i];
        }
        console.log("============================== Jumlah Y^2:");
        console.log(totalJmlY2);
 
    // mengisiisi Y^2
        let tdJumlahY2 = document.createElement("td");
        let isiTdJumlahY2 = document.createTextNode(totalJmlY2);
        tdJumlahY2.appendChild(isiTdJumlahY2);
        trBody.appendChild(tdJumlahY2);
 
 
 
 
 
 
 
 
// create nilai Y prediksi
        let elementTHeadYpred = document.createElement("th");
        let teksTHeadYpred = document.createTextNode("Ypred");
        elementTHeadYpred.appendChild(teksTHeadYpred);
        trHead.appendChild(elementTHeadYpred);
 
        // let n = document.querySelector("input#n");
 
        let n = arrY.length;
        console.log("============================== n:");
        console.log(n);
 
        let b = ((n * totalJmlXY) - (totalJmlArrX * totalJmlArrY)) / ((n * totalJmlX2) - Math.pow(totalJmlArrX, 2));
        console.log("============================== nilai b:");
        console.log(b);
 
        let a = (totalJmlArrY - (b * totalJmlArrX)) / n;
        console.log("============================== nilai a:");
        console.log(a);
 
        let Ypred = [];
 
    // jumlah nilai Y prediksi
        for(let i = 0; i < arrX.length; i++) {
            hasilYpred =  a + (1.497 * parseInt(arrX[i].value));
            Ypred.push(hasilYpred);
            let td4 = document.querySelector("tr.no" + i);
            let tdBaru4 = document.createElement("td");
            let isiTdBaru4 = document.createTextNode(Ypred[i]);
            tdBaru4.appendChild(isiTdBaru4);
            td4.appendChild(tdBaru4);
        }
        console.log("============================== Ypred:");
        console.log(Ypred);
 
 
        let totalJmlYpred = 0;
 
        for(let i = 0; i < arrX.length; i++) {
            totalJmlYpred += Ypred[i];
        }
        console.log("============================== Jumlah Ypred:")
        console.log(totalJmlYpred);
 
    // mengisi Y prediksi
        let tdJumlahYpred = document.createElement("td");
        let isiTdJumlahYpred = document.createTextNode(totalJmlYpred);
        tdJumlahYpred.appendChild(isiTdJumlahYpred);
        trBody.appendChild(tdJumlahYpred);
 
 
 
 
 
 
 
 
 
  // create (Y-Ypred)^2
        let YYpred = [];
 
        for(let i = 0; i < arrX.length; i++) {
            let YYpred1 = parseInt(arrY[i].value);
            let YYpred2 = Ypred[i];
            let YYpred3 = Math.pow((YYpred1 - YYpred2),2);
            YYpred.push(YYpred3);
        }
        console.log("============================== (Y-Ypred)^2:")
        console.log(YYpred);
 
 
        let elementTHeadYYpred = document.createElement("th");
        let teksTHeadYYpred = document.createTextNode("(Y-Ypred)^2");
        elementTHeadYYpred.appendChild(teksTHeadYYpred);
        trHead.appendChild(elementTHeadYYpred);
 
// jumlah (Y-Ypred)^2
        for( i=0;i<arrX.length;i++){
            let td5 = document.querySelector("tr.no"+i);
            let tdBaru5 = document.createElement("td");
            let isiTdBaru5 = document.createTextNode(YYpred[i]);
            tdBaru5.appendChild(isiTdBaru5);
            td5.appendChild(tdBaru5);
        }
 
        let totalJmlYYpred = 0;
 
        for(let i=0;i<arrX.length;i++){
            totalJmlYYpred += YYpred[i];
        }
        console.log("============================== Jumlah (Y-Ypred)^2:")
        console.log(totalJmlYYpred);
 
    // mengisi (Y-Ypred)^2
        let tdJumlahYYpred = document.createElement("td");
        let isiTdJumlahYYpred = document.createTextNode(totalJmlYYpred);
        tdJumlahYYpred.appendChild(isiTdJumlahYYpred);
        trBody.appendChild(tdJumlahYYpred);
 
 
 
 
 
 
 
// create (Y-Yrata)^2
        let elementTHeadYYrata = document.createElement("th");
        let teksTHeadYYrata = document.createTextNode("(Y-Yrata)^2");
        elementTHeadYYrata.appendChild(teksTHeadYYrata);
        trHead.appendChild(elementTHeadYYrata);
 
 
 
        let YYrata = [];
 
        for(let i = 0; i < arrX.length; i++) {
            let YYrata1 = parseInt(arrY[i].value);
            let YYrata2 = totalJmlArrY / n;
            let YYrata3 = Math.pow((YYrata1 - YYrata2),2);
            YYrata.push(YYrata3);
        }
        console.log("============================== (Y-Yrata)^2:")
        console.log(YYrata);
 
    // jumlah (Y-Yrata)^2
        for( i=0;i<arrX.length;i++){
            let td6 = document.querySelector("tr.no"+i);
            let tdBaru6 = document.createElement("td");
            let isiTdBaru6 = document.createTextNode(YYrata[i]);
            tdBaru6.appendChild(isiTdBaru6);
            td6.appendChild(tdBaru6);
        }
 
 
        let totalJmlYYrata = 0;
 
        for(let i=0;i<arrX.length;i++){
            totalJmlYYrata += YYrata[i];
        }
        console.log("============================== Jumlah (Y-Yrata)^2:")
        console.log(totalJmlYYrata);
 
    // mengisi (Y-Yrata)^2
        let tdJumlahYYrata = document.createElement("td");
        let isiTdJumlahYYrata = document.createTextNode(totalJmlYYrata);
        tdJumlahYYrata.appendChild(isiTdJumlahYYrata);
        trBody.appendChild(tdJumlahYYrata);
 
    // koefisien determinasi / R^2
        let R2 = 1 - (totalJmlYYpred / totalJmlYYrata);
        console.log("============================== Koefisien Dererminasi / R^2:");
        console.log(R2);
 
    // koefisien determinasi disesuaikan (adjusted)
        let Radj = R2 - ((1 * (1 - R2)) / (n - 1 - 1));
        console.log("============================== Koefisien d disesuaikan (adjusted) / Radj:");
        console.log(Radj);
 
    // kesalahan baku estimasi
        let Se = Math.sqrt(totalJmlYYpred / (n - 2));
        console.log("============================== Se:");
        console.log(Se);
 
    // standar error koefisien regresi
        let Sb = Se / (Math.sqrt(totalJmlX2 - (Math.pow(totalJmlArrX, 2) / n)));
        console.log("============================== Sb:");
        console.log(Sb);
 
    // uji f
        // k = letiabel
        let F = (R2 / (2 -1)) / ((1 - R2) / (n - 2));
        console.log("============================== F:");
        console.log(F);
 
    // uji t
        let Thitung = b / Sb;
        console.log("============================== T:");
        console.log(Thitung);
 
 
    });
 
});