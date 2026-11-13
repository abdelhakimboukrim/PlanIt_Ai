export function loadDemoData() {
    
        return fetch('./demo.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw new Error(`Failed to load demo data: ${error.message}`)})
        }
 console.log(loadDemoData())

