import prompto from './javaScript/prompt.js'
import { AIdata2 } from './javaScript/api.js';


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
 let new_project={}
   e.preventDefault()
    const isvalid =$(projectForm).parsley().isValid()
   
  if (!isvalid) return
  confirm("make sure all infos are correct then hit ok")
  new_project.title=newtitle.value.trim()
  new_project.description=newdescription.value.trim()
  new_project.brief=newbrief.value.trim()
  new_project.techs=newtechs.value.trim().split(',')
  new_project.devs=newdevs.value.trim()
  new_project.days=newdays.value.trim()
  new_project.difficulty=newdifficulty.value.trim()

  localStorage.setItem('new-project',JSON.stringify(new_project) )
    projectForm.reset()
  // window.location.href="index.html"
console.log(prompt(new_project))


})
const new_project=JSON.parse(localStorage.getItem('new-project'))

AIdata2('gemini-3.5-flash-lite','',new_project)


