const mapArrToString = (arr) => {

    return Array.isArray(arr)
        ?
        arr
            .filter(item => Number.isInteger(item))
            .map(String)
        : undefined
}

module.exports = mapArrToString