import { loadDemoData } from "./javaScript/api.js";
import { renderprojects } from "./javaScript/ui.js";





const settingsBTN = document.getElementById('settingsBTN')
const dashboard = document.querySelector('.projectsBox')

const demoProjects = JSON.parse(localStorage.getItem('demoData'))

renderprojects(demoProjects, dashboard)
console.log(demoProjects)

settingsBTN.addEventListener('click', (e) => {

   loadDemoData()
console.log("yay")


})