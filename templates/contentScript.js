var instructors = document.getElementsByClassName("instructor ng-star-inserted");
var instructorPage = document.getElementsByClassName("ng-tns-c164-1 ng-star-inserted");
var mainDoc = document.querySelector("mat-sidenav-container");
var prevCourseNum = null;
let counter = 0;
var courseTitleGlobal = "";
var professorListGlobal = null;

function buttonListener () {

    const startTime = performance.now();

    mainDoc.addEventListener("click", () => {
        courseSelected();
        professorRating();
    });

    const duration = performance.now() - startTime;
    console.log(`buttonListener took ${duration}ms`);

}

function courseSelected () {

    const startTime = performance.now();

    var courseNum = document.getElementsByClassName("catalog-ref")[0]
    if (courseNum != prevCourseNum) {
        //Getting the course title
        var courseTitle = document.getElementsByClassName("course-title")[0];
        var catalogRef = document.getElementsByClassName("catalog-ref")[0];
        if (courseTitle) {
            courseTitle = courseTitle.innerHTML;
            courseTitleGlobal = courseTitle;
        }
        if (catalogRef) { catalogRef = catalogRef.innerHTML; }
        prevCourseNum = courseNum;
    }

    const duration = performance.now() - startTime;
    console.log(`startTime took ${duration}ms`);

}

    //Getting the professors
    const professorRating = () => {

        const startTime = performance.now();

        for (let element of instructors) {
            console.log(counter + " counter, instructors.length = " + instructors.length);
            let profNameParse = element.innerHTML.matchAll(/> (.*) </gmi);
            if (counter < instructors.length){
                for (const profName of profNameParse){
                    console.log(profName[1]);
                    // name = profName[1];
                }
                professor_list = JSON.stringify(profNameParse);
                professorListGlobal = professor_list;
                element.innerHTML = element.innerHTML + "<p style=\"background-color: #6bcc5c; border: 5px solid #a7fc9a; border-radius: 10px; color: #c6f5d3; max-width: 50px; padding: 7px 10px; text-align: center;\">★: 4.3</p>"; 
                counter++;
            }
        }

        const duration = performance.now() - startTime;
        console.log(`professorRating took ${duration}ms`);

    }

    const observer = new MutationObserver((mutations) => {


        if (mutations[0].attributeName === 'class') {
            console.log('class change seen');
            counter = 0;
        }
        buttonListener();
    })
        .observe(mainDoc, { attributes: true });

    var obj;

    fetch('/', {
        professor_list: professorListGlobal,
        course: courseTitleGlobal
    })