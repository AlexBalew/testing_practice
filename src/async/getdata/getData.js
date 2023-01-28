const axios = require('axios')
const mapArrToString = require('../../mapArrToString/mapArrToString')

const getData = async () => {

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = response.map(user => user.id)

        return mapArrToString(userIds)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getData