document.addEventListener("DOMContentLoaded", function(){
    $('body,html').animate({scrollTop:0},800);
    $('body,html').animate({scrollLeft:0},800);
});

let divBlockContentForLesson = document.querySelector(".content-for-lessons");
let divBlockLessonsAllWeek = document.querySelector(".lessons-all-week");

let radioArray = document.getElementsByClassName("menu-lesson-radio");
for(let i = 0; i < radioArray.length; i++){
    if(radioArray[i].childNodes[1].checked){
        radioArray[i].classList.add("mlr-chk");
    }

    radioArray[i].addEventListener("click", function (){
        for(let i = 0; i < radioArray.length; i++){
            if(radioArray[i].classList.contains("mlr-chk")){
                radioArray[i].classList.remove("mlr-chk");
            }

            this.classList.add("mlr-chk");
            if(this.childNodes[3].textContent == 'Занятия'){
                divBlockContentForLesson.style.visibility = 'visible';
                divBlockContentForLesson.style.opacity = '1';
                divBlockContentForLesson.style.height = 'auto';
                divBlockLessonsAllWeek.style.marginTop = '30px';
            }else if(this.childNodes[3].textContent == 'Сессия'){
                divBlockContentForLesson.style.visibility = 'hidden';
                divBlockContentForLesson.style.opacity = '0';
                divBlockContentForLesson.style.height = '0';
                divBlockLessonsAllWeek.style.marginTop = '0';
            }
        }
        }, false);
}

// --------------------------------------------------------------------------------

let divBlockStudent = document.querySelector(".student-content");
let divBlockTeacher = document.querySelector(".teacher-content");
let divBlockLessons = document.querySelector(".block-lessons");

let divBlockInfoTeacher = document.querySelector(".block-info-teacher");
let divBlockFindTeacher = document.querySelector(".block-find-teacher");

let divBlockInfoStudent = document.querySelector(".block-info-student");
let divBlockFindStudent = document.querySelector(".block-find-student");

let fieldFindTeacher = document.querySelector(".find-teacher");
let fieldFindStudent = document.querySelector(".find-student");

let radioArray2 = document.getElementsByClassName("menu-displays-radio");
for(let i = 0; i < radioArray.length; i++){
    radioArray2[i].addEventListener("click", function (){
            for(let i = 0; i < radioArray2.length; i++){
                if((this.childNodes[3].textContent == 'Расписание занятий для преподавателей') && (!(this.childNodes[1].checked))){
                    $('body,html').animate({scrollTop:0},800);
                    divBlockStudent.style.transform = 'translate(0,0)';
                    divBlockStudent.style.otransform = 'translate(0,0)';
                    divBlockStudent.style.webkitTransform = 'translate(0,0)';
                    divBlockStudent.style.mozTransform = 'translate(0,0)';

                    divBlockTeacher.style.transform = 'translate(0,0)';
                    divBlockTeacher.style.otransform = 'translate(0,0)';
                    divBlockTeacher.style.webkitTransform = 'translate(0,0)';
                    divBlockTeacher.style.mozTransform = 'translate(0,0)';
                    if(fieldFindStudent.value.length > 0){
                        fieldFindStudent.value = "";
                    }
                    if(divBlockLessons.style.getPropertyValue("opacity") == 1){
                        divBlockLessons.style.visibility = 'hidden';
                        divBlockLessons.style.opacity = '0';
                        divBlockLessons.style.removeProperty('height');
                        document.body.style.overflow = 'hidden';
                        document.body.style.width = '100%';
                        document.querySelector(".footer").style.width = '100%';
                    }

                    if(divBlockInfoStudent.style.getPropertyValue("opacity") == 1){
                        divBlockFindStudent.style.transform = 'translate(0,0)';
                        divBlockFindStudent.style.otransform = 'translate(0,0)';
                        divBlockFindStudent.style.webkitTransform = 'translate(0,0)';
                        divBlockFindStudent.style.mozTransform = 'translate(0,0)';

                        divBlockInfoStudent.style.opacity = '0';
                        divBlockInfoStudent.style.visibility = 'hidden';
                    }
                }else if((this.childNodes[3].textContent == 'Расписание занятий для студентов') && (!(this.childNodes[1].checked))){
                    $('body,html').animate({scrollTop:0},800);
                    divBlockStudent.style.transform = 'translate(-2000px,0)';
                    divBlockStudent.style.otransform = 'translate(-2000px,0)';
                    divBlockStudent.style.webkitTransform = 'translate(-2000px,0)';
                    divBlockStudent.style.mozTransform = 'translate(-2000px,0)';

                    divBlockTeacher.style.transform = 'translate(-2000px,0)';
                    divBlockTeacher.style.otransform = 'translate(-2000px,0)';
                    divBlockTeacher.style.webkitTransform = 'translate(-2000px,0)';
                    divBlockTeacher.style.mozTransform = 'translate(-2000px,0)';
                    if(fieldFindTeacher.value.length > 0){
                        fieldFindTeacher.value = "";
                    }
                    if(divBlockLessons.style.getPropertyValue("opacity") == 1){
                        divBlockLessons.style.visibility = 'hidden';
                        divBlockLessons.style.opacity = '0';
                        divBlockLessons.style.removeProperty('height');
                        document.body.style.overflow = 'hidden';
                        document.body.style.width = '100%';
                        document.querySelector(".footer").style.width = '100%';
                    }
                    if(divBlockInfoTeacher.style.getPropertyValue("opacity") == 1){
                        divBlockFindTeacher.style.transform = 'translate(0,0)';
                        divBlockFindTeacher.style.otransform = 'translate(0,0)';
                        divBlockFindTeacher.style.webkitTransform = 'translate(0,0)';
                        divBlockFindTeacher.style.mozTransform = 'translate(0,0)';

                        divBlockInfoTeacher.style.opacity = '0';
                        divBlockInfoTeacher.style.visibility = 'hidden';
                    }
                }
            }
        }
    , false);
}


// --------------------------------------------------------------------------------

let btnFindTeacher = document.querySelector(".button-find-teacher");
btnFindTeacher.addEventListener("click", function (){
    if(fieldFindTeacher.value.length > 0){
        btnFindTeacher.style.fontSize = '14px';
        divBlockFindTeacher.style.transform = 'translate(-57%,0)';
        divBlockFindTeacher.style.otransform = 'translate(-57%,0)';
        divBlockFindTeacher.style.webkitTransform = 'translate(-57%,0)';
        divBlockFindTeacher.style.mozTransform = 'translate(-57%,0)';

        divBlockInfoTeacher.style.opacity = '1';
        divBlockInfoTeacher.style.visibility = 'visible';

        divBlockLessons.style.visibility = 'visible';
        divBlockLessons.style.opacity = '1';
        divBlockLessons.style.height = 'auto';
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'visible';
        document.querySelector(".footer").style.width = '100%';
        setTimeout(upFontBthTeacher, 500);
    }
},false);

function upFontBthTeacher(){
    btnFindTeacher.style.fontSize = '18px';
}
// --------------------------------------------------------------------------------

let btnFindStudent = document.querySelector(".button-find-student");
btnFindStudent.addEventListener("click", function (){
    if(fieldFindStudent.value.length > 0){
        btnFindStudent.style.fontSize = '14px';
        divBlockFindStudent.style.transform = 'translate(-56%,0)';
        divBlockFindStudent.style.otransform = 'translate(-56%,0)';
        divBlockFindStudent.style.webkitTransform = 'translate(-56%,0)';
        divBlockFindStudent.style.mozTransform = 'translate(-56%,0)';

        divBlockInfoStudent.style.opacity = '1';
        divBlockInfoStudent.style.visibility = 'visible';

        divBlockLessons.style.visibility = 'visible';
        divBlockLessons.style.opacity = '1';
        divBlockLessons.style.transition = '2.5s';
        divBlockLessons.style.height = 'auto';
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'visible';
        document.body.style.width = '100%';
        document.querySelector(".footer").style.width = '100%';
        setTimeout(upFontBthStudent, 500);
    }
},false);

function upFontBthStudent(){
    btnFindStudent.style.fontSize = '18px';
}
