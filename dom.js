function result(){

    let inputData=document.getElementById("inputText").value;
   document.getElementById('text').textContent=inputData;

//    if(inputData>18){
    // alert("valid data");
//    }
//    else{
    // alert("not valid");
//    }


    let changeColor=document.getElementById('text');
    changeColor.style.color="red";


    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="skyblue"; 
}

let para=document.getElementById("paratext");
function changetextColor() {
    para.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);

}
para.addEventListener("mouseover".changetextColor);