import { loadDemoData } from "./javaScript/api.js";
import { renderprojects } from "./javaScript/ui.js";
import { modal_hundler } from "./javaScript/settings.js";




const dashboard = document.querySelector('.projectsBox')

const demoProjects = JSON.parse(localStorage.getItem('demoData'))
const current_projects = JSON.parse(localStorage.getItem('realdata')||'[]')

if  (current_projects.length===0){console.log('no projects')
   dashboard.innerHTML='<p class ="text-3xl m-52"> pas de projects !!!!!! </p>'
}
renderprojects(current_projects, dashboard)
console.log(demoProjects)

modal_hundler()