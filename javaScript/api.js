import prompto from "./prompt.js";



export function loadDemoData() {

    fetch('./demo.json')
        .then((response) => {
            if (!response.ok) {
                localStorage.setItem('demoData', JSON.stringify([]))
                throw new Error(`HTTP ${response.status}`);

            }

            return response.json();
        })
        .then((data) => {
            localStorage.setItem('demoData', JSON.stringify(data))
        })
        .catch((error) => {
            localStorage.setItem('demoData', JSON.stringify([]))
            throw new Error(`Failed to load demo data: ${error.message}`)
        })
}


// faaaaaaailure 
export async function AIdata(Ai_model, key, project) {
    await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${Ai_model}:generateContent?key=${key}`, {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json',
            'Authorization': 'x-goog-api-key: none '
        },


        body: {
            contents: [
                {
                    
                    parts:[{ text: prompt(project)}]
                },

            ],



        }})
    .then((response)=>{
        if(!response.ok){
        throw new Error(`HTTP ${response.status}`);  }
        return   response.JSON
        
    })
    .then((data)=>{
        console.log(data)
        localStorage.setItem('realdata',JSON.stringify(data))
    })
    .catch((error) => {
            
            throw new Error(`Failed to load demo data: ${error.message}`)
        })
    
    }


//workiiiiiing 
export async function AIdata2(Ai_model, key, project, storage_key){

    const resp= await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${Ai_model}:generateContent?key=${key}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          
        },


        body:JSON.stringify({
            contents: [
                {
                    parts:[ { text: prompto(project) }]
                },

            ],
            generationConfig: {
                    responseMimeType: 'application/json',}

         

        })})
        if (resp.status === 401 || resp.status === 403) {
  alert("Your API key is not correct or lacks permission.");
   return
}
        console.log(resp.status)
     


if (!resp.ok){
    console.error('API Error:');
     throw new Error(`request failed with : ${resp.status}`);

}
   const data= await resp.json()
    const cleanData=JSON.parse(data.candidates[0].content.parts[0].text)

    //stooriiiiiiiiing the daata 
    const current_data= JSON.parse(localStorage.getItem('realdata'))||[]
    current_data.push(cleanData)
    localStorage.setItem('realdata', JSON.stringify(current_data))

console.log(project)

    console.log('responseee',resp)    
    console.log('data' , cleanData)

}