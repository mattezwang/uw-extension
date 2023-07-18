var buttons = document.getElementsByClassName("ng-star-inserted");
var prevCourseNum = null;

for (let i = 0; i < buttons.length; i++) {

// CAN ADD IF STATEMENT FOR IF THE USER IS PRESSING THE BACK BUTTON
// ENAHNCE / OPTIMAIZE THIS FOR LOOP

    buttons[i].addEventListener("click", () => { courseSelected(); });
    
}

    const courseSelected = () => {
        var courseNum = document.getElementsByClassName("catalog-ref")[0]
        if (courseNum != prevCourseNum) {
            //Getting the course title
            var courseTitle = document.getElementsByClassName("course-title")[0];
            if (courseTitle) { courseTitle = courseTitle.innerHTML; 
            console.log(courseTitle);}
            prevCourseNum = courseNum;


            // WHEN YOU BACK OUT OF THE PAGE, IT OUTPUTS THE FETCHED DATA TWICE
            //Madgrades API 
            fetch("https://api.madgrades.com/v1/courses?" + new URLSearchParams({ query: courseTitle }).toString(), {
                method: 'GET',
                headers: {
                    'Authorization' : "Token token=6cd3473136464c3d854e2f7c5372807c",
                }
            }).then(response => response.json()).then(json => console.log(json)) 
        }

        //Getting the professors
            
        //Rate My Professor
    }
    
    // chrome.runtime.onMessage.addListener((obj, sender, response) => {
    //     // console.log("Message received! Yippee!");
    //     const { message } = obj;
    //     if (message === 'NEW'){
    //         courseSelected();
    //     }
    // });