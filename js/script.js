function switchToAreaDiv() {
    document.getElementById("triangle-perimeter-div").hidden = true;
    document.getElementById("triangle-area-div").hidden = false;
    document.getElementById("result-box").innerHTML = "[Result Box]";

    document.getElementById("input-s1").innerHTML = "";
    document.getElementById("input-s2").innerHTML = "";
    document.getElementById("input-s3").innerHTML = "";
}

function switchToPerimeterDiv() {
    document.getElementById("triangle-perimeter-div").hidden = false;
    document.getElementById("triangle-area-div").hidden = true;
    document.getElementById("result-box").innerHTML = "[Result Box]";
}

function calculatePerimeter(){
    let s1 = parseFloat(document.getElementById("s1-input").value);
    let s2 = parseFloat(document.getElementById("s2-input").value);
    let s3 = parseFloat(document.getElementById("s3-input").value);

    let result = s1 + s2 + s3;
    displayResult(`Keliling = ${s1} + ${s2} + ${s3} = ${result} (satuan panjang)`);
}

function calculateArea(){
    let b = parseFloat(document.getElementById("base-input").value);
    let h = parseFloat(document.getElementById("height-input").value);

    let result = 0.5 * b * h;

    displayResult(`Luas = ${1/2} + ${b} + ${h} = ${result} (satuan persegi)`);
}

function displayResult(result){
    document.getElementById("result-box").innerHTML = result;
}

function displayInputException(){
    alert("Masukkan harus berupa angka");
}