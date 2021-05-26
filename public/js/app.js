const projectList = {
    "React" : [
        {
            Name: "React Project",
            Date: "May,2021",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            link1: "",
            link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        }
    ],
    
    "API" : [
        {
            Name: "API Project",
            Date: "May,2021",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            link1: "",
            link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        },
        {
            Name: "Do you know me",
            Date: "May,2021",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            link1: "",
            link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        }
    ],
    "Python" : [
        {
            Name: "Python Project Python",
            Date: "May,2021",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            link1: "",
            link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        },
        {
            Name: "Do you know me",
            Date: "May,2021",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            link1: "",
            link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        }
    ],
    "CLI" : [
        {
            Name: "CLI Project",
            Date: "May,2021",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            link1: "",
            link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        },
        {
            Name: "Do you know me",
            Date: "May,2021",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            link1: "",
            link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        }
    ]

}

var index = 0
const projectDetails = (projects)=>
{
    document.querySelectorAll('.project-card').forEach(function(ele){
    ele.remove()
    })
    var n = projects.length;
    for (var i = 0; i < n ; i++)    
    {
        projectInfo = document.getElementById('card');
        var htmlEle = "";
        for (i = 0; i < projects.length; i++) 
        {
            htmlEle+="<div class='project-card'>";
            htmlEle+='<div class="project-area">';
            htmlEle+='<div class="project-head">';
            htmlEle+='<b>';
            htmlEle+=projects[i]['Name'];
            htmlEle+='</b>';
            htmlEle+='</div>';
            htmlEle+='<div class="project-date">';
            htmlEle+=projects[i]['Date'];
            htmlEle+='</div>';
            htmlEle+='<div class="project-description">';
            htmlEle+=projects[i]['Description'];
            htmlEle+='</div>';
            htmlEle+='<div class="project-link1">';
            htmlEle+='<a href=';
            htmlEle+=projects[i]['link1'];
            htmlEle+='><b>Visit Live</b></a>';
            htmlEle+='</div>';
            htmlEle+='<div class="project-link2">';
            htmlEle+='<a href=';
            htmlEle+=projects[i]['link2'];
            htmlEle+='><b>View Code On Github</b></a>';
            htmlEle+='</div>';
            htmlEle+='</div>';
            htmlEle+='</div>';

        } 
        projectInfo.innerHTML = htmlEle;
    }

}


function performAction(projectName)
{
    if(projectName == "python")
    {
        projectDetails(projectList['Python'])
    }
    if(projectName == "react")
    {
        projectDetails(projectList['React'])
    }
    if(projectName == "api")
    {
        projectDetails(projectList['API'])
    }   
    if(projectName == "cli")
    {
        projectDetails(projectList['CLI'])
    }      
}