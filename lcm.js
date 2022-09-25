const body = document.querySelector("body");
const lcmBtn = document.querySelector("#lcmBtn");
const box = document.querySelector(".box");
const resultboxLcm = document.querySelector(".resultboxLcm");
const numLcm1 = document.querySelector("#numLcm1");
const numLcm2 = document.querySelector("#numLcm2")
const lcm = document.querySelector("#lcm");
const evenLcm = document.querySelector(".evenLcm");
const oddLcm = document.querySelector(".oddLcm");
const resultLcm = document.querySelector(".resultLcm");
const resultnum1 = document.querySelector(".resultnum1");

lcmBtn.textContent = "เริ่มโปรแกรมการหา ค.ร.น.";

$(document).ready(function() {
    $(".box").hide();
    body.style.display = "flex";
    $(".resultBtn").mouseover(function() {
        $(".resultBtn").css("color", "white")
    })
    $(".resultBtn").mouseout(function() {
        $(".resultBtn").css("color", "black")
    })
})

const findLcm = () => {
    $(".resultboxLcm").slideToggle("slow");
    $(".resultboxHcf").slideUp();
    
    lcm.addEventListener("click", (e) => {
        e.preventDefault();
        const num1 = numLcm1.value ;
        const num2 = numLcm2.value;

        let min = (num1 < num2) ? num1 : num2;
        while(true){
            if(min % num1 == 0 && min % num2 == 0){
                resultLcm.innerHTML = `lcm(${num1},${num2}) คือ ${min}`;
                break;
            }
            min++;

        };
    });
};

lcmBtn.addEventListener("click", findLcm)