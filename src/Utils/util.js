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