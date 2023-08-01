var buttons = document.getElementsByClassName("ng-star-inserted");
var instructors = document.getElementsByClassName("instructor ng-star-inserted");
var instructorPage = document.getElementsByClassName("ng-tns-c164-1 ng-star-inserted");
var styleHead = document.head;
var prevCourseNum = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => { courseSelected(); professorRating();});
}

<<<<<<< HEAD
const courseSelected = () => {
    var courseNum = document.getElementsByClassName("catalog-ref")[0]
    if (courseNum != prevCourseNum) {
        //Getting the course title
        var courseTitle = document.getElementsByClassName("course-title")[0];
        var catalogRef = document.getElementsByClassName("catalog-ref")[0];
        if (courseTitle) { courseTitle = courseTitle.innerHTML; }
        if (catalogRef) { catalogRef = catalogRef.innerHTML; }
        prevCourseNum = courseNum;
    }
}
=======
    const courseSelected = () => {
        var courseNum = document.getElementsByClassName("catalog-ref")[0]
        if (courseNum != prevCourseNum) {
            //Getting the course title
            var courseTitle = document.getElementsByClassName("course-title")[0];
            var catalogRef = document.getElementsByClassName("catalog-ref")[0];
            if (courseTitle) { courseTitle = courseTitle.innerHTML; }
            if (catalogRef) { catalogRef = catalogRef.innerHTML; }
            var search = courseTitle + " " + catalogRef;
            counter = 0;
            prevCourseNum = courseNum;
        }
    }

>>>>>>> 5041744f97accabf51a346a2a28cdae8eb381820
    //Getting the professors
    const professorRating = () => {
        var counter = 0;
        for (let element of instructors) {
            console.log(counter + " counter");
<<<<<<< HEAD
            if (counter < instructors.length){element.innerHTML.match(/> (.*?) </gi); element.innerHTML = element.innerHTML + "<p style=\"background-color: #6bcc5c; border: 5px solid #a7fc9a; border-radius: 10px; color: #c6f5d3; max-width: 50px; padding: 7px 10px; text-align: center;\">★: 4.3</p>"; counter++;}
=======
            if (counter < instructors.length){alert(element.innerHTML.match(/> (.*?) </gi)); element.innerHTML = element.innerHTML + "<p style=\"background-color: #6bcc5c; border: 5px solid #a7fc9a; border-radius: 10px; color: #c6f5d3; max-width: 50px; padding: 7px 10px; text-align: center;\">★: 4.3</p>"; counter++;}
>>>>>>> 5041744f97accabf51a346a2a28cdae8eb381820
        }
    }