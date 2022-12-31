export const mergeArray = (...arrays) => {
    const merged = {};
    arrays.forEach(data =>
        data.forEach(o => {
            let res = Object.assign(merged[o.id] ??= {}, o)
            return res;
        })
    );
    return Object.values(merged);
}

export const checkStatus = (response) => {
    if (response.status === 200) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const pareJSON = async (response) => {
    return await response.json();
}

export const req = async ({url, method, payload}) => {
    let reqObj = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(payload) {
        reqObj.body = JSON.stringify(payload); 
    }
    let response = await fetch(url, reqObj);
    response = checkStatus(response);
    response = await pareJSON(response);
    return response;
}