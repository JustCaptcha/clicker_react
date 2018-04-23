export const BuildMelter = (consume, value) => {
    return {
        type: 'BUILD_MELTER',
        payload: {
            consume,
            value
        }
    }
}