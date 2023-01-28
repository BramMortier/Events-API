const generateQuery = (queryObj, allowedQueryParams) => {
    const transformedQuery = {};
    for (let [key, value] of Object.entries(queryObj)) {
        if (allowedQueryParams.includes(key)) {
            transformedQuery[key] = new RegExp(`.*${value}.*`, "i");
        }
    }
    return transformedQuery;
};

module.exports = generateQuery;
