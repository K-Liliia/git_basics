async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userDataJSON = await response.json();
        return userDataJSON;
    } catch (dataError) {
        console.error("Error with data receiving:", dataError);
        throw dataError;
    }

};

async function showUserData() {
    try {
        const userData = await getUserData();
        console.log("Response is: " + JSON.stringify(userData, null, 2));
    } catch (error) {
        console.error("Error displaying user data:", error);
    }
};

(async () => {
    await showUserData();
})();
