const projects =JSON.parse(localStorage.getItem('projects'))

 function renderprojects(projects, conainer){
    for(let i=0; i<projects.length ;i++){
        const article  =document.createElement('article')
        article.classList.add('projectCard')
        article.setAttribute('id', projects[i].projectName + '-'+i)
        article.innerHTML=`<h2 >${projects[i].projectName} </h2>
                <p>${projects[i].description}</p>
                <div class="stats">
                    <span></span>
                    <span>devs </span>
                    <span>level</span>
                </div>
                <div class=" flex taskprogress">
                    <span><h5>done </h5>  <p >5</p> </span>
                    <span><h5>total </h5>  <p>5</p> </span>
                    <span> <h5>not done </h5> <p>5</p> </span>
                </div>
                <div class="progressBar"></div>
                <button>task board </button>`
        
        
        
        
        
        
        
        
        
        
    }

}
console.log(projects)