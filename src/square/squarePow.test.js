const squarePow = require('./squarePow')

describe('squarePow', () => {

    const mockValue = 4

    test('squarePow should correct data', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')

        expect(squarePow(mockValue)).toBe(16)
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('squarePow should correct data when 1 was passed in', () => {
        const mockValue = 1
        const spyMathPow = jest.spyOn(Math, 'pow')

        expect(squarePow(mockValue)).toBe(1)
        expect(spyMathPow).not.toBeCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})