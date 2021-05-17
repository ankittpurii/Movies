import Config from "./Config";

export const executeGetRequest = async (endpoint) => {

    try {
        const res = await fetch(endpoint, {
            method: 'GET',
        });

        if (res.status != 200) {
            throw res
        }
        const response = await res.json();
        console.log(response)
        return response
    }
    catch (err) {
        return err
    }
};


