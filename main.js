// import { loadDemoData } from "./api.js";
import { renderprojects } from "./ui.js";

 const projects = JSON.parse(localStorage.getItem('projects'))
  
 const settingsBTN= document.getElementById('settingsBTN')
 const dashboard =document.querySelector('.projectBox')

 settingsBTN.addEventListener('click', (e)=>{
    renderprojects(projects,dashboard)
 })

 

