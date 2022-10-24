import "bootstrap/dist/css/bootstrap.min.css" 
const allBtn = document.querySelector('.all-button');
const overlay = document.querySelector('.overlay')
allBtn.addEventListener('click', () => {
    overlay.classList.toggle("active");
});
overlay.addEventListener('click', () => {
    overlay.classList.toggle("active")
})
const btn1 = document.querySelector('.button-1');
const btn2 = document.querySelector('.button-2');
const btn3 = document.querySelector('.button-3');
const btn4 = document.querySelector('.button-4');

let question_1_point = 0;
let question_1_point_recheck = 0;
let question_2_point = 0;
let question_2_point_recheck = 0;
let question_3_point = 0;
let question_3_point_recheck = 0;
let question_4_point = 0;
let question_4_point_recheck = 0;
let question_1_completion = 0;
let question_2_completion = 0;
let question_3_completion = 0;
let question_4_completion = 0;
let question_completion = question_1_completion + question_2_completion + question_3_completion + question_4_completion;
if ((question_1_completion + question_2_completion + question_3_completion + question_4_completion) == 1) {
    document.querySelector('.progress-bar-fill').style.width = "25%"
} else if ((question_1_completion + question_2_completion + question_3_completion + question_4_completion) == 2) {
    document.querySelector('.progress-bar-fill').style.width = "50%"
} else if ((question_1_completion + question_2_completion + question_3_completion + question_4_completion) == 3) {
    document.querySelector('.progress-bar-fill').style.width = "75%"
} else if ((question_1_completion + question_2_completion + question_3_completion + question_4_completion) == 4) {
    document.querySelector('.progress-bar-fill').style.width = "100%"
}
var question_point = question_1_point + question_2_point + question_3_point + question_4_point;
const option_11 = document.querySelector('.num-11');
const option_12 = document.querySelector('.num-12');
const option_13 = document.querySelector('.num-13');
const option_14 = document.querySelector('.num-14');
const option_15 = document.querySelector('.num-15');
const option_16 = document.querySelector('.num-16');
const option_17 = document.querySelector('.num-17');
const option_18 = document.querySelector('.num-18');
const option_19 = document.querySelector('.num-19');
const option_21 = document.querySelector('.num-21');
const option_22 = document.querySelector('.num-22');
const option_23 = document.querySelector('.num-23');
const option_24 = document.querySelector('.num-24');
const option_25 = document.querySelector('.num-25');
const option_26 = document.querySelector('.num-26');
const option_27 = document.querySelector('.num-27');
const option_28 = document.querySelector('.num-28');
const option_29 = document.querySelector('.num-29');
const option_31 = document.querySelector('.num-31');
const option_32 = document.querySelector('.num-32');
const option_33 = document.querySelector('.num-33');
const option_34 = document.querySelector('.num-34');
const option_35 = document.querySelector('.num-35');
const option_36 = document.querySelector('.num-36');
const option_37 = document.querySelector('.num-37');
const option_38 = document.querySelector('.num-38');
const option_39 = document.querySelector('.num-39');
const option_41 = document.querySelector('.num-41');
const option_42 = document.querySelector('.num-42');
const option_43 = document.querySelector('.num-43');
const option_44 = document.querySelector('.num-44');
const option_45 = document.querySelector('.num-45');
const option_46 = document.querySelector('.num-46');
const option_47 = document.querySelector('.num-47');
const option_48 = document.querySelector('.num-48');
const option_49 = document.querySelector('.num-49');
option_11.addEventListener("click", function() { 
    question_1_point = 9;
    question_1_completion = 1;  
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_11.style.backgroundColor = "#c5590f";
        option_12.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_12.addEventListener("click", function() { 
    question_1_point = 8;
    question_1_completion = 1;
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_12.style.backgroundColor = "#c5590f";
        option_11.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_13.addEventListener("click", function() { 
    question_1_point = 7;
    question_1_completion = 1;
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_13.style.backgroundColor = "#c5590f";
        option_12.style.backgroundColor = "#ffffff";
        option_11.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_14.addEventListener("click", function() { 
    question_1_point = 6;
    question_1_completion = 1;
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_14.style.backgroundColor = "#c5590f";
        option_12.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_11.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_15.addEventListener("click", function() { 
    question_1_point = 5;
    question_1_completion = 1;
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_15.style.backgroundColor = "#F69C14";
        option_12.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_11.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_16.addEventListener("click", function() { 
    question_1_point = 4;
    question_1_completion = 1;
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_16.style.backgroundColor = "#000000";
        option_12.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_11.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_17.addEventListener("click", function() { 
    question_1_point = 3;
    btn1.classList.add("btn-active")
    question_1_completion = 1;
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_17.style.backgroundColor = "#000000";
        option_12.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_11.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_18.addEventListener("click", function() { 
    question_1_point = 2;
    question_1_completion = 1;
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_18.style.backgroundColor = "#000000";
        option_12.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_11.style.backgroundColor = "#ffffff";
        option_19.style.backgroundColor = "#ffffff";
    }
});
option_19.addEventListener("click", function() { 
    question_1_point = 1;
    question_1_completion = 1;
    btn1.classList.add("btn-active")
    if (question_1_point != question_1_point_recheck) {
        question_1_point_recheck = question_1_point;
        option_19.style.backgroundColor = "#000000";
        option_12.style.backgroundColor = "#ffffff";
        option_13.style.backgroundColor = "#ffffff";
        option_14.style.backgroundColor = "#ffffff";
        option_15.style.backgroundColor = "#ffffff";
        option_16.style.backgroundColor = "#ffffff";
        option_17.style.backgroundColor = "#ffffff";
        option_18.style.backgroundColor = "#ffffff";
        option_11.style.backgroundColor = "#ffffff";
    }
});
option_21.addEventListener("click", function() { 
    question_2_point = 9;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_21.style.backgroundColor = "#c5590f";
        option_22.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_22.addEventListener("click", function() { 
    question_2_point = 8;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_22.style.backgroundColor = "#c5590f";
        option_21.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_23.addEventListener("click", function() { 
    question_2_point = 7;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_23.style.backgroundColor = "#c5590f";
        option_22.style.backgroundColor = "#ffffff";
        option_21.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_24.addEventListener("click", function() { 
    question_2_point = 6;
    btn2.classList.add("btn-active")
    question_2_completion = 1;
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_24.style.backgroundColor = "#c5590f";
        option_22.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_21.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_25.addEventListener("click", function() { 
    question_2_point = 5;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_25.style.backgroundColor = "#F69C14";
        option_22.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_21.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_26.addEventListener("click", function() { 
    question_2_point = 4;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_26.style.backgroundColor = "#000000";
        option_22.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_21.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_27.addEventListener("click", function() { 
    question_2_point = 3;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_27.style.backgroundColor = "#000000";
        option_22.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_21.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_28.addEventListener("click", function() { 
    question_2_point = 2;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_28.style.backgroundColor = "#000000";
        option_22.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_21.style.backgroundColor = "#ffffff";
        option_29.style.backgroundColor = "#ffffff";
    }
});
option_29.addEventListener("click", function() { 
    question_2_point = 1;
    question_2_completion = 1;
    btn2.classList.add("btn-active")
    if (question_2_point != question_2_point_recheck) {
        question_2_point_recheck = question_2_point;
        option_29.style.backgroundColor = "#000000";
        option_22.style.backgroundColor = "#ffffff";
        option_23.style.backgroundColor = "#ffffff";
        option_24.style.backgroundColor = "#ffffff";
        option_25.style.backgroundColor = "#ffffff";
        option_26.style.backgroundColor = "#ffffff";
        option_27.style.backgroundColor = "#ffffff";
        option_28.style.backgroundColor = "#ffffff";
        option_21.style.backgroundColor = "#ffffff";
    }
});
option_31.addEventListener("click", function() { 
    question_3_point = 9;
    btn3.classList.add("btn-active")
    question_3_completion = 1;
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_31.style.backgroundColor = "#c5590f";
        option_32.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_32.addEventListener("click", function() { 
    question_3_point = 8;
    question_3_completion = 1;
    btn3.classList.add("btn-active")
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_32.style.backgroundColor = "#c5590f";
        option_31.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_33.addEventListener("click", function() { 
    question_3_point = 7;
    question_3_completion = 1;
    btn3.classList.add("btn-active")
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_33.style.backgroundColor = "#c5590f";
        option_32.style.backgroundColor = "#ffffff";
        option_31.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_34.addEventListener("click", function() { 
    question_3_point = 6;
    question_3_completion = 1;
    btn3.classList.add("btn-active")
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_34.style.backgroundColor = "#c5590f";
        option_32.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_31.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_35.addEventListener("click", function() { 
    question_3_point = 5;
    question_3_completion = 1;
    btn3.classList.add("btn-active")
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_35.style.backgroundColor = "#F69C14";
        option_32.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_31.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_36.addEventListener("click", function() { 
    question_3_point = 4;btn3.classList.add("btn-active")
    question_3_completion = 1;
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_36.style.backgroundColor = "#000000";
        option_32.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_31.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_37.addEventListener("click", function() { 
    question_3_point = 3;btn3.classList.add("btn-active")
    question_3_completion = 1;
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_37.style.backgroundColor = "#000000";
        option_32.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_31.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_38.addEventListener("click", function() { 
    question_3_point = 2;btn3.classList.add("btn-active")
    question_3_completion = 1;
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_38.style.backgroundColor = "#000000";
        option_32.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_31.style.backgroundColor = "#ffffff";
        option_39.style.backgroundColor = "#ffffff";
    }
});
option_39.addEventListener("click", function() { 
    question_3_point = 1;btn3.classList.add("btn-active")
    question_3_completion = 1;
    if (question_3_point != question_3_point_recheck) {
        question_3_point_recheck = question_3_point;
        option_39.style.backgroundColor = "#000000";
        option_32.style.backgroundColor = "#ffffff";
        option_33.style.backgroundColor = "#ffffff";
        option_34.style.backgroundColor = "#ffffff";
        option_35.style.backgroundColor = "#ffffff";
        option_36.style.backgroundColor = "#ffffff";
        option_37.style.backgroundColor = "#ffffff";
        option_38.style.backgroundColor = "#ffffff";
        option_31.style.backgroundColor = "#ffffff";
    }
});
option_41.addEventListener("click", function() { 
    question_4_point = 9;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_41.style.backgroundColor = "#c5590f";
        option_42.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_42.addEventListener("click", function() { 
    question_4_point = 8;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_42.style.backgroundColor = "#c5590f";
        option_41.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_43.addEventListener("click", function() { 
    question_4_point = 7;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_43.style.backgroundColor = "#c5590f";
        option_42.style.backgroundColor = "#ffffff";
        option_41.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_44.addEventListener("click", function() { 
    question_4_point = 6;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_44.style.backgroundColor = "#c5590f";
        option_42.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_41.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_45.addEventListener("click", function() { 
    question_4_point = 5;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_45.style.backgroundColor = "#F69C14";
        option_42.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_41.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_46.addEventListener("click", function() { 
    question_4_point = 4;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_46.style.backgroundColor = "#000000";
        option_42.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_41.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_47.addEventListener("click", function() { 
    question_4_point = 3;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_47.style.backgroundColor = "#000000";
        option_42.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_41.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_48.addEventListener("click", function() { 
    question_4_point = 2;btn4.classList.add("btn-active")
    question_4_completion = 1;
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_48.style.backgroundColor = "#000000";
        option_42.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_41.style.backgroundColor = "#ffffff";
        option_49.style.backgroundColor = "#ffffff";
    }
});
option_49.addEventListener("click", function() { 
    question_4_point = 1;
    question_4_completion = 1;btn4.classList.add("btn-active")
    if (question_4_point != question_4_point_recheck) {
        question_4_point_recheck = question_4_point;
        option_49.style.backgroundColor = "#000000";
        option_42.style.backgroundColor = "#ffffff";
        option_43.style.backgroundColor = "#ffffff";
        option_44.style.backgroundColor = "#ffffff";
        option_45.style.backgroundColor = "#ffffff";
        option_46.style.backgroundColor = "#ffffff";
        option_47.style.backgroundColor = "#ffffff";
        option_48.style.backgroundColor = "#ffffff";
        option_41.style.backgroundColor = "#ffffff";
    }
});