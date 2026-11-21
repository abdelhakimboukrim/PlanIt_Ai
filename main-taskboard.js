
import { loadDemoData } from "./javaScript/api.js";
import { renderprojects, renderTasks } from "./javaScript/ui.js";




const demoProjects = JSON.parse(localStorage.getItem('demoData'))

const current_projects = JSON.parse(localStorage.getItem('realdata')||'[]')


renderTasks(current_projects[Number([window.location.search.split('=')[1]])])
//  dashboard.addEventListener('click', (e)=>{
//    if(e.target.classList.contains('taskBoardBTN')){
//       const data_index=Number(e.target.dataset.index)

//       renderTasks(demoProjects[data_index])
//    }
//  })

//  renderprojects(demoProjects,dashboard)


// let data = JSON.parse(localStorage.getItem('data'))
// console.log(data ,'reeeee')

console.log(Number([window.location.search.split('=')[1]])) 

