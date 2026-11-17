import { loadDemoData } from "./api.js";
import { renderprojects, renderTasks } from "./ui.js";





const settingsBTN = document.getElementById('settingsBTN')
const dashboard = document.querySelector('.projectsBox')

const demoProjects = JSON.parse(localStorage.getItem('demoData'))

renderprojects(demoProjects, dashboard)
console.log(demoProjects)

settingsBTN.addEventListener('click', (e) => {

   loadDemoData()
console.log("yay")


})