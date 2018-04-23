export const ElectricityInc = value => {
    return {
        type: 'ELECTRICITY_INC',
        payload: {value}
    }
}

export const DrillMetal = (consume, value) => {
    return {
        type: 'DRILL_METAL',
        payload: {
            consume,
            value
        }
    }
}

export const DrillCopper = (consume, value) => {
    return {
        type: 'DRILL_COPPER',
        payload: {
            consume,
            value
        }
    }
}

export const DrillGold = (consume, value) => {
    return {
        type: 'DRILL_GOLD',
        payload: {
            consume,
            value
        }
    }
}


export const MeltMetal = (consume, value) => {
    return {
        type: 'MELT_METAL',
        payload: {
            consume,
            value
        }
    }
}

export const MeltCopper = (consume, value) => {
    return {
        type: 'MELT_COPPER',
        payload: {
            consume,
            value
        }
    }
}

export const MeltGold = (consume, value) => {
    return {
        type: 'MELT_GOLD',
        payload: {
            consume,
            value
        }
    }
}