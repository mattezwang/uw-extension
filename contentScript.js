    const courseSelected = () => {
        //Getting the course title
        var courseTitle = document.getElementsByClassName("course-title")[0];
        if (courseTitle) { courseTitle = courseTitle.innerHTML; }
        //Madgrades 


        //Getting the professors

        //Rate My Professor
    }
    
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log("Message received! Yippee!");
        const { message } = obj;
        if (message === 'NEW'){
            courseSelected();
        }
    });