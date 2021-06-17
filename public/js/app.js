const projectList = {
    "Python" : [
        {
            Name: "Mail Service",
            Date: "Dec,2020",
            Description: "A simple mail service developed using flask and google API. To send mails to anyone from my mail id in particular format.<br>Technology - Python - Flask",
            link1: "https://srujana-mail-service.herokuapp.com/",
            link2: "https://github.com/SRUJANA-PENUGONDA13/Srujana-Mail-Service"
        }
        // ,
        // {
        //     Name: "IFT Automation",
        //     Date: "JAN,2021",
        //     Description: "1. Processing of DDTSUTF files and generating DTMU outbound files report over mail <br>2. Analysis of IFT layouts and generating IFT files <br> Technology - Python",
        //     link1: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld",
        //     link2: "https://github.com/SRUJANA-PENUGONDA13/AffliateWorld"
        // }
    ],
    
    "Node JS" : [
        {
            Name: "Know Me",
            Date: "Mar,2021",
            Description: "Portofolio to showcase skills, projects through responsive website<br>Frontend - HTML,CSS,JS<br>Backend - Node.js, Express.js",
            link1: "https://srujana-penugonda-v1.herokuapp.com/",
            link2: "https://github.com/SRUJANA-PENUGONDA13/PortfolioV1"
        },
        {
            Name: "Catch Me",
            Date: "May,2021",
            Description: "A simple game to play with your friends without any registration and bunch of people can play together<br>2. Technology - Node.js,Socket.io,Express.js",
            link1: "https://srujana-catch-me.herokuapp.com/",
            link2: "https://github.com/SRUJANA-PENUGONDA13/CatchMe"
        }
    ],
    "API" : [
        {
            Name: "Task Manager API",
            Date: "APR,2021",
            Description: "To track and manage our tasks easily.<br>Features</br>1. JWT Authentication and Securely storing passwords on MongoDB using bcrypt</br>2. Testing using JEST<br>Technology - Nodejs,Mongodb,Jest",
            link1: "https://srujana-task-manager.herokuapp.com/",
            link2: "https://github.com/SRUJANA-PENUGONDA13/Task-Manager-API"
        },
        {
            Name: "Task Manger API Docs",
            Date: "May,2021",
            Description: "Swagger Documentation for Task Manager API <br> Technology - Nodejs,YAML",
            link1: "https://srujana-task-manager-api-docs.herokuapp.com/swagger/",
            link2: "https://github.com/SRUJANA-PENUGONDA13/TaskMangerApiDocs"
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
            htmlEle+=' target="_blank"><b>Visit Live</b></a>';
            htmlEle+='</div>';
            htmlEle+='<div class="project-link2">';
            htmlEle+='<a href=';
            htmlEle+=projects[i]['link2'];
            htmlEle+=' target="_blank"><b>View Code On Github</b></a>';
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
    if(projectName == "nodejs")
    {
        projectDetails(projectList['Node JS'])
    }
    if(projectName == "api")
    {
        projectDetails(projectList['API'])
    }   
    // if(projectName == "cli")
    // {
    //     projectDetails(projectList['CLI'])
    // }      
}