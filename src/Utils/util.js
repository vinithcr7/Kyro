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