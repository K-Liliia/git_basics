async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userDataJSON = await response.json();
        showUserDataJSON(userDataJSON);
    } catch (dataError) {
        console.error("Error with data receiving:", dataError);
    }

};

async function showUserDataJSON(response) {
    console.log("Response is: " + JSON.stringify(response, null, 2));
};


getUserData();
