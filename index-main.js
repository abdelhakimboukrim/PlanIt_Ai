import { loadDemoData } from "./javaScript/api.js";
import { renderprojects } from "./javaScript/ui.js";





const settingsBTN = document.getElementById('settingsBTN')
const dashboard = document.querySelector('.projectsBox')
const slosesetteings=document.getElementById('close_settings')
const demoProjects = JSON.parse(localStorage.getItem('demoData'))
const current_projects = JSON.parse(localStorage.getItem('realdata')||'[]')
const modal=document.getElementById('APImodal')
if  (current_projects.length===0){console.log('no projects')
   dashboard.innerHTML='<p class ="text-3xl m-52"> pas de projects !!!!!! </p>'
}
renderprojects(current_projects, dashboard)
console.log(demoProjects)

settingsBTN.addEventListener('click', (e) => {

//    loadDemoData()
// console.log("yay")


modal.showModal()


})
slosesetteings.addEventListener('click', (e) => {
   console.assert('modal close ')
   modal.close()})