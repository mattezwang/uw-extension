    const courseSelected = () => {
        //Getting the course title
        var courseTitle = document.getElementsByClassName("course-title")[0];
        if (courseTitle) { courseTitle = courseTitle.innerHTML; }

        //Madgrades API 
        fetch("https://api.madgrades.com/v1/courses?" + new URLSearchParams({ query: courseTitle }).toString, {
            method: 'GET',
            headers: {
                'Authorization' : "Token token=6cd3473136464c3d854e2f7c5372807c",
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))

        //Getting the professors

        //Rate My Professor
    }
    
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        // console.log("Message received! Yippee!");
        const { message } = obj;
        if (message === 'NEW'){
            courseSelected();
        }
    });