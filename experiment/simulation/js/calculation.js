var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");
var t13=document.getElementById("t13");
var t14=document.getElementById("t14");
var t15=document.getElementById("t15");
var t16=document.getElementById("t16");
var t17=document.getElementById("t17");
var t18=document.getElementById("t18");
var t19=document.getElementById("t19");
var t20=document.getElementById("t20");
var t21=document.getElementById("t21");
var t22=document.getElementById("t22");
var t23=document.getElementById("t23");
var t24=document.getElementById("t24");
var t25=document.getElementById("t25");
var t26=document.getElementById("t26");
var t27=document.getElementById("t27");
var t28=document.getElementById("t28");
var t29=document.getElementById("t29");
var t30=document.getElementById("t30");
var t31=document.getElementById("t31");
var t32=document.getElementById("t32");
var t33=document.getElementById("t33");
var t34=document.getElementById("t34");
var t35=document.getElementById("t35");
var t36=document.getElementById("t36");
var t37=document.getElementById("t37");
var t38=document.getElementById("t38");
var t39=document.getElementById("t39");
var t40=document.getElementById("t40");
var t41=document.getElementById("t41");
var t42=document.getElementById("t42");
var t43=document.getElementById("t43");
var t44=document.getElementById("t44");
var t45=document.getElementById("t45");
function calculate(){

    if(t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value=="" || t7.querySelector("input").value=="" || t8.querySelector("input").value=="" || t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value==""  || t13.querySelector("input").value=="" ||t14.querySelector("input").value=="" ||t15.querySelector("input").value=="" ||t16.querySelector("input").value=="" ||t17.querySelector("input").value=="" ||t18.querySelector("input").value=="" ||t19.querySelector("input").value=="" ||t20.querySelector("input").value=="" ||t21.querySelector("input").value=="" ||t22.querySelector("input").value=="" ||t23.querySelector("input").value=="" ||t24.querySelector("input").value=="" ||t25.querySelector("input").value=="" ||t26.querySelector("input").value=="" ||t27.querySelector("input").value=="" ||t28.querySelector("input").value=="" ||t29.querySelector("input").value=="" ||t30.querySelector("input").value=="" ||t31.querySelector("input").value=="" ||t32.querySelector("input").value=="" ||t33.querySelector("input").value=="" ||t34.querySelector("input").value=="" ||t35.querySelector("input").value=="" ||t36.querySelector("input").value=="" ||t37.querySelector("input").value=="" ||t38.querySelector("input").value=="" ||t39.querySelector("input").value=="" ||t40.querySelector("input").value=="" ||t41.querySelector("input").value=="" ||t42.querySelector("input").value=="" ||t43.querySelector("input").value=="" ||t44.querySelector("input").value=="" ||t45.querySelector("input").value==""){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        // cd1.querySelector("input").value = (qact1.querySelector("input").value/qt1.querySelector("input").value).toFixed(4)

        // cd2.querySelector("input").value = (qact2.querySelector("input").value/qt2.querySelector("input").value).toFixed(4)
    
        // cd3.querySelector("input").value = (qact3.querySelector("input").value/qt3.querySelector("input").value).toFixed(4)
    
        // cdAvg.querySelector("input").value = (((qact1.querySelector("input").value/qt1.querySelector("input").value) + (qact2.querySelector("input").value/qt2.querySelector("input").value) + (qact3.querySelector("input").value/qt3.querySelector("input").value)) / 3).toFixed(4)
    
        document.querySelector("#check-button").disabled = false
    }}

    function checkYourResult(){
        let flag=true
        if(t1.querySelector("input").value!=1000){
            t1.querySelector("input").style.color="red"
            flag=false
        }

        if(t2.querySelector("input").value!=26){
            t2.querySelector("input").style.color="red"
            flag=false
        }
        if(t3.querySelector("input").value!=3.25){
            t3.querySelector("input").style.color="red"
            flag=false
        }

        if(t4.querySelector("input").value!=5){
            t4.querySelector("input").style.color="red"
            flag=false
        }
        if(t5.querySelector("input").value!=0.5){
            t5.querySelector("input").style.color="red"
            flag=false
        }

        if(t6.querySelector("input").value!=4.5){
            t6.querySelector("input").style.color="red"
            flag=false
        }

        if(t7.querySelector("input").value >8.1261  && t7.querySelector("input").value<8.45784 ){
            t7.querySelector("input").style.color = "black"
            flag= true
        }else{
            t7.querySelector("input").style.color = "red"
            flag= false
        }

        if(t8.querySelector("input").value >0.50372  && t8.querySelector("input").value<0.52428 ){
            t8.querySelector("input").style.color = "black"
            flag= true
        }else{
            t8.querySelector("input").style.color = "red"
            flag= false
        }

        if(t9.querySelector("input").value >60.71394  && t9.querySelector("input").value<63.19206){
            t9.querySelector("input").style.color = "black"
            flag= true
        }else{
            t9.querySelector("input").style.color = "red"
            flag= false
        }


        if(t10.querySelector("input").value!=1000){
            t10.querySelector("input").style.color="red"
            flag=false
        }

        if(t11.querySelector("input").value!=32){
            t11.querySelector("input").style.color="red"
            flag=false
        }
        if(t12.querySelector("input").value!=4.59){
            t12.querySelector("input").style.color="red"
            flag=false
        }

        if(t13.querySelector("input").value!=7){
            t13.querySelector("input").style.color="red"
            flag=false
        }
        if(t14.querySelector("input").value!=0.9){
            t14.querySelector("input").style.color="red"
            flag=false
        }

        if(t15.querySelector("input").value!=6.1){
            t15.querySelector("input").style.color="red"
            flag=false
        }

        if(t16.querySelector("input").value!=1.443){
            t16.querySelector("input").style.color="red"
            flag=false
        }

        if(t17.querySelector("input").value!=0.719){
            t17.querySelector("input").style.color="red"
            flag=false
        }

        if(t18.querySelector("input").value!=49.838){
            t18.querySelector("input").style.color="red"
            flag=false
        }

        if(t19.querySelector("input").value!=1000){
            t19.querySelector("input").style.color="red"
            flag=false
        }

        if(t20.querySelector("input").value!=37){
            t20.querySelector("input").style.color="red"
            flag=false
        }
        if(t21.querySelector("input").value!=3.25){
            t21.querySelector("input").style.color="red"
            flag=false
        }

        if(t22.querySelector("input").value!=9){
            t22.querySelector("input").style.color="red"
            flag=false
        }
        if(t23.querySelector("input").value!=1.4){
            t23.querySelector("input").style.color="red"
            flag=false
        }

        if(t24.querySelector("input").value!=7.6){
            t24.querySelector("input").style.color="red"
            flag=false
        }

        if(t25.querySelector("input").value!=1.180){
            t25.querySelector("input").style.color="red"
            flag=false
        }

        if(t26.querySelector("input").value!=0.925){
            t26.querySelector("input").style.color="red"
            flag=false
        }

        if(t27.querySelector("input").value!=78.363){
            t27.querySelector("input").style.color="red"
            flag=false
        }


        if(t28.querySelector("input").value!=1000){
            t28.querySelector("input").style.color="red"
            flag=false
        }

        if(t29.querySelector("input").value!=42){
            t29.querySelector("input").style.color="red"
            flag=false
        }
        if(t30.querySelector("input").value!=4.59){
            t30.querySelector("input").style.color="red"
            flag=false
        }

        if(t31.querySelector("input").value!=11){
            t31.querySelector("input").style.color="red"
            flag=false
        }
        if(t32.querySelector("input").value!=2.2){
            t32.querySelector("input").style.color="red"
            flag=false
        }

        if(t33.querySelector("input").value!=8.8){
            t33.querySelector("input").style.color="red"
            flag=false
        }

        if(t34.querySelector("input").value!=1.894){
            t34.querySelector("input").style.color="red"
            flag=false
        }

        if(t35.querySelector("input").value!=1.130){
            t35.querySelector("input").style.color="red"
            flag=false
        }

        if(t36.querySelector("input").value!=59.670){
            t36.querySelector("input").style.color="red"
            flag=false
        }

        if(t37.querySelector("input").value!=1000){
            t37.querySelector("input").style.color="red"
            flag=false
        }

        if(t38.querySelector("input").value!=41){
            t38.querySelector("input").style.color="red"
            flag=false
        }
        if(t39.querySelector("input").value!=5.59){
            t39.querySelector("input").style.color="red"
            flag=false
        }

        if(t40.querySelector("input").value!=13){
            t40.querySelector("input").style.color="red"
            flag=false
        }
        if(t41.querySelector("input").value!=3){
            t41.querySelector("input").style.color="red"
            flag=false
        }

        if(t42.querySelector("input").value!=10){
            t42.querySelector("input").style.color="red"
            flag=false
        }

        if(t43.querySelector("input").value!=2.251){
            t43.querySelector("input").style.color="red"
            flag=false
        }

        if(t44.querySelector("input").value!=1.336){
            t44.querySelector("input").style.color="red"
            flag=false
        }

        if(t45.querySelector("input").value!=59.332){
            t45.querySelector("input").style.color="red"
            flag=false
        }


        if(flag){
        
            for (let i = 0; i < 5; i++) {
                // document.querySelector(".result-table").style.display = "none"
                confetti();
              }
              window.appData = window.appData || {};
            window.appData.powerFlag=true
            
            alert("Congratulations! You have successfully completed the experiment.");
        }else{
            document.querySelector(".result-table").style.display = "flex"
        }

    }


    