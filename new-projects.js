const projectForm=document.getElementById('projetForm')
//inputs

const newtitle       = document.querySelector('#title');
const newdescription = document.querySelector('#description');
const newbrief       = document.querySelector('#Brief');
const newdevs        = document.querySelector('#devs');
const newtechs       = document.querySelector('#techs');
const newdays        = document.querySelector('#days');
const newdifficulty  = document.querySelector('#difficulty');

// projectForm.addEventListener()

projectForm.addEventListener('submit' ,(e)=>{

   e.preventDefault()
    const isvalid =$(projectForm).parsley().isValid()
    const new_project={}
  if (!isvalid) return
  confirm("make sure all infos are correct then hit ok")
  new_project.title=newtitle.value.trim()
  new_project.description=newdescription.value.trim()
  new_project.brief=newbrief.value.trim()
  new_project.techs=newtechs.value.trim().split(',')
  new_project.days=newdays.value.trim()
  new_project.difficulty=newdifficulty.value.trim()
  projectForm.remove()
  localStorage.setItem('new-project',JSON.stringify(new_project) )
  window.location.href="index.html"


})



