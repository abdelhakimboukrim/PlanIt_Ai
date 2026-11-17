export function loadDemoData() {
    
         fetch('./demo.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

             return response.json();
        })
        .then((data) =>{
            localStorage.setItem('demoData' , JSON.stringify(data))
        })
        .catch((error) => {
            throw new Error(`Failed to load demo data: ${error.message}`)})
        }


