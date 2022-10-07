// do{
//     var value = prompt("input number: ")
// }while(value === 1)

const copyDate = document.querySelector('.year');
copyDate.innerHTML  += new Date().getFullYear();


// navigation functionality


// spawn projects card 
var projectContainer = document.querySelector(".projects");

// card Object

const projects =[
    {
        title:"clipboard landing page",
        img:"images/clipboard.jpg",
        description:"a frontendmentor challenge on a clipboard landing page",
        github:"https://github.com/Jahswill-web-dev/clipboard-landing-page",
        live:"https://jahswill-web-dev.github.io/clipboard-landing-page/",
        specialClass:"clip-class",
        flexR:"d-flex-row-reverse",
        techStack:"<div><p>html</p></div> <div><p>css</p></div>"
     
    },
    {
        title:"huddle landing page",
        img:"images/huddle.jpg",
        description:"a frontendmentor challenge, landing page on a platform for a communnities ",
        github:"https://github.com/Jahswill-web-dev/huddle-landing-page",
        live:"https://jahswill-web-dev.github.io/huddle-landing-page/",
        specialClass:"huddle-class",
        flexR:"d-flex-row",
        techStack:" <p>html</p> <p>css</p>"
    },
    {
        title:"tinDog",
        img:"images/tindog-1.png",
        description:"a landing page for meetup website for dogs",
        github:"https://github.com/Jahswill-web-dev/tindog",
        live:"https://jahswill-web-dev.github.io/tindog/",
        specialClass:"tindog-class",
        flexR:"d-flex-row-reverse",
        techStack:" <p>html</p> <p>css</p> <p>Bootstrap</p>"
    }





]




const spawn = () => {

      projects.map( project =>{
    projectContainer.innerHTML +=
`<div class="project-card flex ${project.specialClass} ${project.flexR}">
   <div class="project-image">
      <a href="${project.live}" target=”_blank”> <img src="${project.img}" alt=""> </a>
   </div>
    <div class="project-info">
      <h2 class="title">${project.title}</h2>
        <p class="description">${project.description}</p>
        <div class='techs'>
        DEVELOPMENT TOOLS
        ${project.techStack}
        </div>
        <div class="projects-icons">
            <a href="${project.github}" target=”_blank”  class="btn btn-icon"><i class="fa-brands fa-github"></i> view code</a>
            <a href="${project.live}" target=”_blank” class="btn btn-icon"><i class="fa-solid fa-arrow-up-right-from-square"></i> view live site</a>    
        </div>
        </div>
 </div>`;}
 
 );
}

spawn();


//mobile  NavBar

const navBtn = document.querySelector(".nav-hamburger");
const closeBtn = document.querySelector(".fa-x");
const navListB = document.querySelector(".nav-list-b");
const nav = document.querySelector(".nav-list");
const showNav = () =>{
    navListB.classList.toggle("show");
    nav.classList.toggle("show");
    closeBtn.classList.toggle("show");

    console.log("click")
}


navBtn.addEventListener('click',showNav);
closeBtn.addEventListener('click',showNav);