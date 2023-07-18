var buttons = document.getElementsByClassName("ng-star-inserted");
var instructors = document.getElementsByClassName("instructor ng-star-inserted");
var instructorPage = document.getElementsByClassName("ng-tns-c164-1 ng-star-inserted");
var prevCourseNum = null;
var counter = 0;

for (let i = 0; i < buttons.length; i++) {

// CAN ADD IF STATEMENT FOR IF THE USER IS PRESSING THE BACK BUTTON
// ENAHNCE / OPTIMAIZE THIS FOR LOOP

    buttons[i].addEventListener("click", () => { courseSelected(); professorRating();});
    
}

    const courseSelected = () => {
        var courseNum = document.getElementsByClassName("catalog-ref")[0]
        if (courseNum != prevCourseNum) {
            //Getting the course title
            var courseTitle = document.getElementsByClassName("course-title")[0];
            var catalogRef = document.getElementsByClassName("catalog-ref")[0];
            var url;
            if (courseTitle) { courseTitle = courseTitle.innerHTML; }
            if (catalogRef) { catalogRef = catalogRef.innerHTML; }
            var search = courseTitle + " " + catalogRef;
            counter = 0;
            prevCourseNum = courseNum;


            // WHEN YOU BACK OUT OF THE PAGE, IT OUTPUTS THE FETCHED DATA TWICE
            //Madgrades API 
            fetch("https://api.madgrades.com/v1/courses?" + new URLSearchParams({ query: search }).toString(), {
                method: 'GET',
                headers: {
                    'Authorization' : "Token token=6cd3473136464c3d854e2f7c5372807c",
                }
            }).then(response => response.json()).then(json => console.log(json))
        }

        //Getting the professors
            
        //Rate My Professor
    }

    const professorRating = () => {
        for (let element of instructors) {
            console.log(counter + " counter");
            if (counter < instructors.length){alert(element.innerHTML.match(/> (.*?) </gi)); element.innerHTML = element.innerHTML + "<p>Hi...</p>"; counter++;}
        }
    }
    
    // chrome.runtime.onMessage.addListener((obj, sender, response) => {
    //     // console.log("Message received! Yippee!");
    //     const { message } = obj;
    //     if (message === 'NEW'){
    //         courseSelected();
    //     }
    // });