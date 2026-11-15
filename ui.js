const projects =JSON.parse(localStorage.getItem('projects'))

 function renderprojects(projects, conainer){
 
    for(let i=0; i<projects.length ;i++){
    const doneTsks = projects[i].tasks.filter(item=> item.status==='Done' )
        const article  =document.createElement('article')
        article.classList.add('projectCard')
        article.setAttribute('id', projects[i].projectName + '-'+i)
        article.innerHTML=`<h2 >${projects[i].projectName} </h2>
                <p>${projects[i].description}</p>
                <div class="stats">
  "
                    <span> ${projects[i].totalEstimatedHours}</span>
                    <span>${projects[i].Ndevs} devlopers }   </span>
                    <span>${projects[i].difficulty } </span>
                </div>
                <div class=" flex taskprogress">
                    <span><h5>total</h5>  <p>  ${projects[i].tasks.length} </p> </span>
                    <span><h5>done </h5>  <p> ${doneTsks.length}</p> </span>
                    <span> <h5>not done </h5> <p> ${projects[i].tasks.length - doneTsks.length }</p>  </span>
                </div>
                <div class="progressBar"></div>
                <button>task board </button>`
        
        
        
        
        
        
        
        
        
        
    }

}
console.log(projects)