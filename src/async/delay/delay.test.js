const delay = require('./delay')

describe('delay', () => {

    test('delay should return correct data', async () => {
        const sum = await delay(() => 2 + 2, 1000)
        expect(sum).toBe(4)
    })
})