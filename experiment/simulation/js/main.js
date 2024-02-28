//Your JavaScript goes in here
var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var weightSelection = document.getElementById("weightSelect")
var count=0
window.appData = window.appData || {};
window.appData.powerFlag = false;

// get the id for the flow of water
var w1=document.getElementById("Water_1")
var w2=document.getElementById("Water_2_00000178177592295888132300000003812885317886448053_")
var w3=document.getElementById("Water_3")
var w4=document.getElementById("Water_4_00000018221326492914578470000014473808141724045220_")
var w5=document.getElementById("Water_5_00000121246892066337760400000013494994064657416380_")
var w6=document.getElementById("Water_6_00000168117311549382392820000000397660189640725679_")
var w7=document.getElementById("Water_8_00000181053212070445114170000008715850457176008092_")
var w8 = document.getElementById("Water_7")
var w9 = document.getElementById("Water_8")

var drops = document.getElementById("Drops")
var sW1=document.getElementById("Spear-Water")
var sW2=document.getElementById("Main_Jet")
var turbine = document.getElementById("turbine")

var rpmText = document.getElementById("rpm-text")
var w1Text = document.getElementById("w1-text")
var w2Text = document.getElementById("w2-text")
var qText = document.getElementById("q-text")
var headText = document.getElementById("head-text")

// power button
function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1
        waterFlow1()

    // }else{
    //     enableButton.style.backgroundColor = "#ca2222"
    //     document.getElementById("steps").innerHTML = "Step1: Turn Power On"
    //     enableButton.textContent = "POWER ON"
    //     count = 0 
    // }

    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}

function waterFlow1(){
    w1.style.opacity="1"
    var currentwidth = parseFloat(w1.getAttribute("width"))
    // if(shouldStop){
    //     return;
    // }else{
    if (currentwidth < 140.1) {
        // Increment the current height by 2
        currentwidth += 3;
        // Set the new height to the element
        w1.setAttribute("width", currentwidth);
        // Call the function recursively to continue increasing the height
        setTimeout(waterFlow1, 100); 
    }
    waterFlow2()
}

function waterFlow2(){
    w2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "22.6");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    animateElement.setAttribute("values", "0;22.6");
    animateElement.setAttribute("keyTimes", "0;1");
    animateElement.setAttribute("calcMode", "spline");
    animateElement.setAttribute("keySplines", "0.42 0 0.58 1");

    w2.appendChild(animateElement)


    const animateOpacity = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateOpacity.setAttribute("attributeName", "opacity");
    animateOpacity.setAttribute("from", "1");
    animateOpacity.setAttribute("to", "1");
    animateOpacity.setAttribute("dur", "1s");
    animateOpacity.setAttribute("begin", "0s");
    animateOpacity.setAttribute("values", "0;1");
    animateOpacity.setAttribute("keyTimes", "0;1");
    w2.appendChild(animateOpacity);

    animateElement.addEventListener("input", function () {
        const currentHeight = parseFloat(w2.getAttribute("height"));
        if (currentHeight >= 22.6) {
            w2.setAttribute("opacity", "1");
        }
    
    });
    animateElement.beginElement();

    setTimeout(function(){
        waterFlow3()

    },2000);
}

function waterFlow3(){
    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "285.6");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)


    const animateOpacity = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateOpacity.setAttribute("attributeName", "opacity");
    animateOpacity.setAttribute("from", "1");
    animateOpacity.setAttribute("to", "1");
    animateOpacity.setAttribute("dur", "3s");
    animateOpacity.setAttribute("begin", "0s");
    animateOpacity.setAttribute("values", "0;1");
    animateOpacity.setAttribute("keyTimes", "0;1");
    w3.appendChild(animateOpacity);

    animateElement.addEventListener("input", function () {
        const currentHeight = parseFloat(w3.getAttribute("height"));
        if (currentHeight >= 285.6) {
            w3.setAttribute("opacity", "1");
        }
    
    });
    animateElement.beginElement();

    setTimeout(function(){
        // waterFlow4()
        purzeButton.disabled = false;
        document.getElementById("steps").innerHTML = "Click On Flow Valve On."

    },3000);
}

function waterFlow4(){
    w4.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "137");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)

    animateElement.beginElement();

    setTimeout(function(){
    waterFlow5()
    },2000);
 }


function purzeAction(){
    waterFlow4()
}


function waterFlow5(){
    w5.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "128.4");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w5.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "979.4");
    animateX.setAttribute("to", "851");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        // document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
        // valvePositioning.disabled = false
    waterFlow6()

    }, 1500);
    
}
// rotateImage()
function waterFlow6(){
    w6.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "447.6");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("fill","freeze");

    w6.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "698.9");
    animateX.setAttribute("to", "251.3");
    animateX.setAttribute("dur", "3s");
    animateX.setAttribute("fill","freeze");

    w6.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        // document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
        // valvePositioning.disabled = false
    waterFlow7()

    }, 3000);
    
}

function waterFlow7(){
    w7.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "455");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w7.appendChild(animateElement)


    const animateOpacity = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateOpacity.setAttribute("attributeName", "opacity");
    animateOpacity.setAttribute("from", "1");
    animateOpacity.setAttribute("to", "1");
    animateOpacity.setAttribute("dur", "3s");
    animateOpacity.setAttribute("begin", "0s");
    animateOpacity.setAttribute("values", "0;1");
    animateOpacity.setAttribute("keyTimes", "0;1");
    w7.appendChild(animateOpacity);

    animateElement.addEventListener("input", function () {
        const currentHeight = parseFloat(w3.getAttribute("height"));
        if (currentHeight >= 455) {
            w3.setAttribute("opacity", "1");
        }
    
    });
    animateElement.beginElement();

    setTimeout(function(){
        // waterFlow4()
        // purzeButton.disabled = false;
        // document.getElementById("steps").innerHTML = "Set the value of spear positoining."
        waterFlow8()


    },3000);


}




function waterFlow8(){
    sW1.setAttribute("opacity","1")
    sW2.setAttribute("opacity","1")
    var currentwidth = parseFloat(sW2.getAttribute("width"))
    // // if(shouldStop){
    // //     return;
    // // }else{
        if (currentwidth < 61.4) {
            currentwidth += 5;
            sW2.setAttribute("width", currentwidth);
            setTimeout(waterFlow8, 200); 
        }
    setTimeout(function() {
            rotateImage()
            drops.setAttribute("opacity","1")
            waterFlow9()
          }, 2000)
}

function waterFlow9(){
    w8.style.opacity="1"
    var currentwidth = parseFloat(w8.getAttribute("width"))
    // if(shouldStop){
    //     return;
    // }else{
        if (currentwidth < 95.6) {
            currentwidth += 3;
            w8.setAttribute("width", currentwidth);
            setTimeout(waterFlow9, 100); 
        }
        setTimeout(function() {
            waterFlow10()
          }, 500);
    // }
}

function waterFlow10(){
    var currentHeight = parseFloat(w9.getAttribute("height"))
    // if(shouldStop){
    //     return;
    // }else{
        if (currentHeight < 38.2) {
            currentHeight += 3;
            w9.setAttribute("height", currentHeight);
            setTimeout(waterFlow10, 100); 
        }
        setTimeout(function() {
            rpmText.textContent = "1200"
            weightSelection.disabled = false;
            document.getElementById("steps").innerHTML = "Select the value of brake weight."
        }, 1000);
    // }
    // }
}

function rotateImage() {
    turbine.style.transformOrigin = `465px 615px`; 
    turbine.style.animation = "rotate 5s linear infinite";

    const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`, styleSheet.cssRules.length);

}


function updateValvePositioning(){
    moveRight()
    if(valvePositioning.value == 1){
        headText.textContent="26"
        qText.textContent = "3.251 X 10"
        document.getElementById("steps").innerHTML = "Now, again change the value of brake weight. "
    }if(valvePositioning.value == 2){
        headText.textContent="32"
        qText.textContent = "4.597 X 10"
        document.getElementById("steps").innerHTML = "Now, again change the value of brake weight. "
    }if(valvePositioning.value == 3){
        headText.textContent="37"
        qText.textContent = "3.251 X 10"
        document.getElementById("steps").innerHTML = "Now, again change the value of brake weight. "
    }if(valvePositioning.value == 4){
        headText.textContent="42"
        qText.textContent = "4.597 X 10"
        document.getElementById("steps").innerHTML = "Now, again change the value of brake weight. "
    }if(valvePositioning.value == 5){
        headText.textContent="41"
        qText.textContent = "5.597 X 10"    
        document.getElementById("steps").innerHTML = "Now, again change the value of brake weight. "
    }if(valvePositioning.value == 0){
        document.getElementById("steps").innerHTML = "Please select the value of spear positioning, according to instructions."
    }
    valvePositioning.disabled = true;
    weightSelection.disabled = false;
    rpmText.textContent = "1000"
}

// weightSelection.addEventListener("change",function(){
//     updateBrakeWeight()
// })

function updateBrakeWeight(){
    var selectedWeight = weightSelection.value;
    // w1Text = selectedWeight;
    moveLeft()
    if(selectedWeight == 5){
        rpmText.textContent = "900"
        w1Text.textContent = "5.0";
        w2Text.textContent = "0.5";
        document.getElementById("steps").innerHTML = "Set the value of spear positioning for 5kg brake weight to 1. "
    }if(selectedWeight == 7){
        rpmText.textContent = "850"
        w2Text.textContent = "0.9"; 
        w1Text.textContent = "7.0";
        document.getElementById("steps").innerHTML = "Set the value of spear positioning for 7kg brake weight to 2."

    }if(selectedWeight == 9){
        rpmText.textContent = "800"
        w2Text.textContent = "1.4";
        w1Text.textContent = "9.0";
        document.getElementById("steps").innerHTML = "Set the value of spear positioning for 9kg brake weight to 3."

    }if(selectedWeight == 11){
        rpmText.textContent = "750"
        w2Text.textContent = "2.2";
        w1Text.textContent = "11.0";
        document.getElementById("steps").innerHTML = "Set the value of spear positioning for 11kg brake weight to 4."

    }if(selectedWeight == 13){
        rpmText.textContent = "750"
        w2Text.textContent = "3.0";
        w1Text.textContent = "13.0";
        document.getElementById("steps").innerHTML = "Set the value of spear positioning for 13kg brake weight to 5."

    }if(selectedWeight == 0){
        rpmText.textContent = "0"
        // w2Text = "3";
        document.getElementById("steps").innerHTML = "Set the value of brake weight greater than 0."
    }
    valvePositioning.disabled= false;
    weightSelection.disabled = true;

}

let currentPosition = 0;
        const moveLeft = () => {
            currentPosition -= 10; // Adjust this value based on how much you want to move
            document.getElementById('movingGroup').setAttribute('transform', `translate(${currentPosition}, 0)`);
        }

        const moveRight = () => {
            currentPosition += 10; // Adjust this value based on how much you want to move
            document.getElementById('movingGroup').setAttribute('transform', `translate(${currentPosition}, 0)`);
        }