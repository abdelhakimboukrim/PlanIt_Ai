export function modal_hundler(){
const modal=document.getElementById('APImodal')
const slosesetteings=document.getElementById('close_settings')
const settingsBTN = document.getElementById('settingsBTN')
const form=document.getElementById('key-form') 


settingsBTN.addEventListener('click', (e) => {

//    loadDemoData()
// console.log("yay")


modal.showModal()


})




form.addEventListener('submit',(e)=>{
    e.preventDefault()
const input =document.getElementById('api-key').value.trim()
if(input.length===0) return

console.log(input)
localStorage.setItem('API_key',JSON.stringify(input))
 setTimeout(()=>modal.close(),500)
})


slosesetteings.addEventListener('click', (e) => {
   console.assert('modal close ')
   modal.close()})
}

