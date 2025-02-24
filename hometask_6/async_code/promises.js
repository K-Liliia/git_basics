function getJSONresponse() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()
        .then(responseData => { showJSONresponse(responseData);}))
        .catch(dataError => {
            console.error("Error with data receiving:", dataError);
        });
};

function showJSONresponse(response) {
    console.log("Response is: " + JSON.stringify(response, null, 2));
};

getJSONresponse();
