

export function renderprojects(projects, container) {

    for (let i = 0; i < projects.length; i++) {

        const doneTsks = projects[i].tasks.filter(item => item.status === 'Done')

        const percentage = projects[i].tasks.length === 0 ? 0 : Math.floor(doneTsks.length * 100 / projects[i].tasks.length)+60
        const TailwindPercentage=`w-[${percentage}%]`
        const article = document.createElement('article')


        article.classList.add('projectCard')
        article.setAttribute('id', projects[i].projectName + '-' + i)
        article.innerHTML = `<h2 >${projects[i].projectName} </h2>
                <p>${projects[i].description}</p>
                <div class="stats">
  
                    <span>  ${projects[i].totalEstimatedHours} heures </span>
                    <span>${projects[i].Ndevs} Développeurs    </span>
                    <span>${projects[i].difficulty} </span>
                </div>
                <div class=" taskprogress">
                    <span><h5>Tâches</h5>  <p>  ${projects[i].tasks.length} </p> </span>
                    <span><h5>Terminées </h5>  <p> ${doneTsks.length}</p> </span>
                    <span> <h5>Restantes</h5> <p> ${projects[i].tasks.length - doneTsks.length}</p>  </span>
                </div>
                    <p class="font-bold text-2xl mb-[-30px] self-end" > ${percentage}%</p>
                <div class = "progressBar">
                <div class=" h-[100%] bg-[#0f766e] ${TailwindPercentage}  rounded-xl" id="innerBar" > </div> 
                </div>
                


                <button class = "btn-main" >Ouvrir le Task Board  </button>`
               console.log(TailwindPercentage)




        container.appendChild(article)











    }

}

export renderTasks(tasks ){

for(let item of tasks ){
    const taskCard=document.createElement('article')
        taskCard.classList.add('taskCard')


    )  
}

}