class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    };
};

function throwCustomError() {
    throw new CustomError("Provided sources are invalid, please check urls: ");
};

async function getDataJSON(link) {
    const response = await fetch(link);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${link}`);
    };
    const dataJSON = await response.json();
    return dataJSON;
};

async function showDataJSON(response) {
    console.log("Response is: " + JSON.stringify(response, null, 2));
};

async function codeExecution() {
    try {
        const response = await getDataJSON('https://catfat.ninja/fat');
        showDataJSON(response);
    } catch (dataError) {
        console.error("Error with data receiving from catfat url:", dataError);
        try {
            const secondResponse = await getDataJSON('https://v2.jokeapi.dev/joke/Programming');
            showDataJSON(secondResponse);
        } catch (error) {
            throwCustomError(error);
        }
    }
}

(async () => {
    await codeExecution();
})();
