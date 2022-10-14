import "bootstrap/dist/css/bootstrap.min.css"
 /* const circle_1_true = document.querySelector('.circle-1-true');
const circle_2_true = document.querySelector('.circle-2-true');
const circle_3_true = document.querySelector('.circle-3-true');
const circle_4_true = document.querySelector('.circle-4-true');
const circle_1_false = document.querySelector('.circle-1-false');
const circle_2_false = document.querySelector('.circle-2-false');
const circle_3_false = document.querySelector('.circle-3-false');
const circle_4_false = document.querySelector('.circle-4-false');
const circle_5 = document.querySelector('.circle-5');
const question_1 = document.querySelector('.question-1-wrapper');
const question_2 = document.querySelector('.question-2-wrapper');
const question_3 = document.querySelector('.question-3-wrapper');
const question_4 = document.querySelector('.question-4-wrapper');
const question_5 = document.querySelector('.question-5-wrapper');
const parent_clas = circle_1_true.closest('.question'); */
var question_1_point = 0;
var question_2_point = 0;
var question_3_point = 0;
var question_4_point = 0;
var question_1_completion = 0;
var question_2_completion = 0;
var question_3_completion = 0;
var question_4_completion = 4;
var question_completion = question_1_completion + question_2_completion + question_3_completion + question_4_completion;
var question_point = question_1_point + question_2_point + question_3_point + question_4_point;
if (question_completion = 1) {
    document.querySelector('.progress-bar-fill').style.width = "25px"
} else if (question_completion = 2) {
    document.querySelector('.progress-bar-fill').style.width = "50px"
} else if (question_completion = 3) {
    document.querySelector('.progress-bar-fill').style.width = "75px"
} else if (question_completion = 4) {
    document.querySelector('.progress-bar-fill').style.width = "100px"
}
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
option_11.addEventListener("click", function() { 
    question_1_point = 5;
});
option_12.addEventListener("click", function() { 
    question_1_point = 4;
    console.log(question_1_point)
});
option_13.addEventListener("click", function() { 
    question_1_point = 5;
    console.log(question_1_point)
});
option_14.addEventListener("click", function() { 
    question_1_point = 5;
    console.log(question_1_point)
});
option_15.addEventListener("click", function() { 
    question_1_point = 5;
    console.log(question_1_point)
});
option_16.addEventListener("click", function() { 
    question_1_point = 5;
    console.log(question_1_point)
});
option_17.addEventListener("click", function() { 
    question_1_point = 5;
    console.log(question_1_point)
});
option_18.addEventListener("click", function() { 
    question_1_point = 5;
    console.log(question_1_point)
});
option_19.addEventListener("click", function() { 
    question_1_point = 5;
    console.log(question_1_point)
});
option_21.addEventListener("click", function() { 
    question_2_point = 5;
});
option_22.addEventListener("click", function() { 
    question_2_point = 4;
});
option_23.addEventListener("click", function() { 
    question_2_point = 5;
});
option_24.addEventListener("click", function() { 
    question_2_point = 5;
});
option_25.addEventListener("click", function() { 
    question_2_point = 5;
});
option_26.addEventListener("click", function() { 
    question_2_point = 5;
});
option_27.addEventListener("click", function() { 
    question_2_point = 5;
});
option_28.addEventListener("click", function() { 
    question_2_point = 5;
});
option_29.addEventListener("click", function() { 
    question_2_point = 5;
});
