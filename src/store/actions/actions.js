export const ElectricityInc = value => {
    return {
        type: 'ELECTRICITY_INC',
        payload: value
    }
}

export const Drill = (consume, value) => {
    return {
        type: 'DRILL',
        payload: {
            consume,
            value
        }
    }
}
