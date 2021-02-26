/************************************************************
 * Name: Andre Agrippa, Michai Pryce
 * Date: 01/20/2021
 * Description: This file adds functionality to the Home,
 * About Us, Human Resources, Contact Us, Projects and Services
 * pages.
 * Date Completed:
 */

"use strict";


(function(){

    /**
     * Display Nav bar function to display nav and footer
     */
    function DisplayNav()
    {
        let navTextElement = document.getElementById("navHome").textContent = "WEBD 6201";
        navTextElement = document.getElementById("navIndex").textContent = "Home";
        navTextElement = document.getElementById("navAboutItem").textContent = "About Us";

        let navAboutElement = document.getElementById("navAbout");
        let hrListItem = document.createElement("li");
        hrListItem.setAttribute("id", "liHumanResources");
        hrListItem.setAttribute("class", "nav-item");
        let navbar = document.getElementById("ulNav").appendChild(hrListItem);
        hrListItem.innerHTML = `<a class="nav-link" aria-current="page" href="human-resources.html">
        <i id ="navHumanResources" class ="fas fa-project-diagram fa-lg">Human Resources</i></a>`;
        if(document.title === "Human Resources"){
            hrListItem.innerHTML = `<a class="nav-link active" aria-current="page" href="human-resources.html">
            <i id ="navHumanResources" class ="fas fa-project-diagram fa-lg">Human Resources</i></a>`;
        }

        navAboutElement.after(hrListItem);

        navTextElement = document.getElementById("navContact").textContent = "Contact Us";
        navTextElement = document.getElementById("navProjects").textContent = "Projects";
        navTextElement = document.getElementById("navServices").textContent = "Services";
        navTextElement = document.getElementById("navLogin").innerHTML = `<a  class="nav-link " aria-current="page" href="login.html"><i class = "fas fa-map fa-lg"></i>Login</a>`;
        navTextElement = document.getElementById("footer").textContent = "Copyright 2021.";
    }

    /**
     * Display home to display index page
     */
    function displayHome()
    {
        DisplayNav();
        let introText = "This is a simple site to demonstrate the about, contact, human resources, projects and services requirements for Lab 1 WEBD 6201 - Client Side Scripting"; 
        let titleText = "Welcome to WEBD 6201";
        
        let introTextElement = document.getElementById("indexTitle").textContent = titleText;
        introTextElement = document.getElementById("indexParagraph").textContent = introText;

    }
    /**
     * Display about to display about the creators
     */
    function displayAbout()
    {
        DisplayNav();

        //About Andre
        let aboutElement = document.getElementById("aboutTitle").textContent = "About Us";
        aboutElement = document.getElementById("aboutAText");
        aboutElement.innerHTML = `<h1>Andre Agrippa:</h1>
        <p class = "">I'm a 2nd year student at Durham College in the Computer Programming and Analysis program. I've been
        coding for several years now because I enjoy it and always looking to improve in this aspect.</p>
        <a class = "fa-lg" href="./resumes/andre_resume.pdf" download>Resume Download</a></br></br>
        <img src="./images/aa.jpg" alt="" style="width:500px;height:450px;">`;

        //About Michai
        aboutElement.innerHTML += `<h1>Michai Pryce:</h1>
        <p class = ""> Hello, I am in my final year in the Computer Programming Program at Durham College. I love
        to code and learn about the evergrowing advancements in technology. This is the demonstration for our first lab!
        </p>
        <a class = "fa-lg" href="./resumes/Copy_of_Resume.docx" download>Resume Download</a></br></br>
        <img src="./images/m.jpg" alt="" style="width:500px;height:450px;">`;

    }
    /**
     * Display top 3 projects page
     */
    function displayProjects()
    {
        DisplayNav();

        //Projects 1
        let projectsElement = document.getElementById("projectsTitle").textContent = "Projects";
        projectsElement = document.getElementById("projectsText").innerHTML = 
        `<h3>Project One: COBOL Item List</h3>
        <p>This project reads records from a .dat file, performs calculations on the data then outputs it to a .out file neatly formatted.</p>
        <img src="./images/p1.png" alt="" style="width:800px;height:500px;">`;

        //Projects 2
        projectsElement = document.getElementById("projectsText").innerHTML += 
        `<h3>Project Two: C#, XAML, MDF  Preferred Shares and Common Shares</h3>
        <p>This project uses XAML for the windows form and a database to keep track of common and preferred shares.
        The database keeps track of how many shares(common/preferred) are  available and validation is applied.</p>
        <img src="./images/p2.png" alt="" style="width:800px;height:500px;">`;

        //Projects 3
        projectsElement = document.getElementById("projectsText").innerHTML += 
        `<h3>Project Three: ASP.NET and MVC Framework Animal Shelter</h3>
        <p>This project is a web application that keeps track of animals, owners, appointment and login info in a database. 
        Relational database concepts are applied.</p>
        <img src="./images/p3.png" alt="" style="width:800px;height:500px;">`;
        
    }
    /**
     * Display top 3 services page
     */
    function displayServices()
    {
        DisplayNav();

        //Services 1
        let servicesElement = document.getElementById("servicesTitle").textContent = "Services";
        servicesElement = document.getElementById("servicesText").innerHTML = 
        `<h3>Web Development:</h3>
        <p>We offer a variety of different web development (Front-end, Back-end, Databases). Languages (PHP, ASP.NET, JavaScript)</p>
        <img src="./images/s1.jpg" alt="" style="width:800px;height:500px;">`;

        //Services 2
        servicesElement = document.getElementById("servicesText").innerHTML += 
        `<h3>OOP Programming</h3>
        <p>We offer a variety of different Object Oriented Programming. We're experienced with C#, C++, Java etc.
        Whether it be windows forms applications, console applications GUI, etc.</p>
        <img src="./images/s2.png" alt="" style="width:800px;height:500px;">`;

        //Services 3
        servicesElement = document.getElementById("servicesText").innerHTML += 
        `<h3>Database Management System</h3>
        <p>It's been almost 3 years since we've had experience in database development. We've used software such as
        Microsoft SQL Server and PgAdmin4. Experienced with relational database concepts.</p>
        <img src="./images/s3.jpg" alt="" style="width:800px;height:500px;">`;

        
    }
    /**
     * Display contact form page
     */
    function displayContact()
    {
        DisplayNav();

        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function()
        {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger  ";
                messageArea.textContent = "Please enter an appropriate name > 2 characters";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });
            let sendButton = document.getElementById("sendButton");
            sendButton.addEventListener("click", function(event)
            {
                event.preventDefault();
                // //Displays twice?
                
                let contact = new Contact(fullName.value,contactNumber.value, emailAddress.value, shortMessage.value);

                console.log(contact.serialize());
                if(contact.serialize())
                {
                    localStorage.setItem((localStorage.length + 1).toString(),contact.serialize());

                    window.location.href = "index.html";
                }
                   
            });
            
    }
    /**
     * Human resources page
     */
    function displayHumanResources()
    {
        DisplayNav();
    }
    function displayLogin()
    {
        DisplayNav();
        let messageArea = document.getElementById("messageArea");
        $("#loginButton").on("click", function ()
        {
            let username = $("#username");
            let password = $("#password");
            let success = false;
            let newUser = new core.User();

            //user ajax to access the json file
            $.get("./Data/users.json", function(data)
            {
                //Check each user in the users.json file (linear search)
                for (const user of data.users) {
                    if(username.val()== user.Username && password.val() == user.Password)
                    {
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                //If username and password matches - success, then login
                if(success)
                {
                    //Add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());

                    //hide any error messages
                    messageArea.hidden = true;

                    //redirect user to secure area (contact list?)
                    location.href = "index.html";
                }
                else
                {
                    //display error message
                    username.trigger("focus").trigger("select");
                    messageArea.hidden = false;
                    messageArea.className = "alert alert-danger text-center";
                    messageArea.textContent = "Error: Invalid login information";
                    //messageArea.show().addClass("alert alert-danger").text("Error: Invalid login information");
                }
            });
        });
    }
    function displayRegister()
    {
        DisplayNav();
    }

    function toggleLogin()
    {
        //if the user is logged in
        if(sessionStorage.getItem("user"))
        {
            //change login to logout
            $("#navLogin").html(
                `<a id="navLogout" class="nav-link" aria-current="page" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );

            //Add functionality to logout button
            $("#navLogout").on("click", function()
            {
                //terminate session
                sessionStorage.clear();

                //redirect back to login page
                location.href = "login.html";
            });
            
        }
    }
    
    /**
     * Start function, depending on document title will load specific page
     */
    function Start()
    {
        console.log("App Started...");

        //Based of title of html
        switch(document.title)
        {
            case "Index":
                displayHome();
                break;
            case "About Us":
                displayAbout();
                break;
            case "Projects":
                displayProjects();  
                break;
            case "Services":
                displayServices();  
                break;   
            case "Contact Us":
                displayContact();  
                break; 
            case "Contact-List":
                displayContactList();  
                break; 
            case "Human Resources":
                displayHumanResources();  
                break;
            case "Login":
                displayLogin();
                break;
            case "Register":
                displayRegister();
                break;
        }

        toggleLogin();

    }

    window.addEventListener("load", Start);

    core.Start = Start;

})(core || (core={}));