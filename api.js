export function loadDemoData() {
    
        return fetch('./demo.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return response.json();
        })
        
        .catch((error) => {
            throw new Error(`Failed to load demo data: ${error.message}`)})
        }
 

