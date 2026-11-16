import { loadDemoData } from "./api.js";
import { renderprojects } from "./ui.js";
loadDemoData()
 const demoProjects = JSON.parse(localStorage.getItem('demoData'))

 const settingsBTN= document.getElementById('settingsBTN')
 const dashboard =document.querySelector('.projectsBox')

 settingsBTN.addEventListener('click', (e)=>{
    renderprojects(demoProjects,dashboard)
 })

 renderprojects(projects,dashboard)

 
// let data = JSON.parse(localStorage.getItem('data'))
console.log(data ,'reeeee')