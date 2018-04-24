export const resourcesNames = {
    electricity: 'electricity',
    credits: 'credits',
    stone: 'stone',
    food: 'food',
    manpower: 'manpower',
    rawMetal: 'rawMetal',
    rawCopper: 'rawCopper',
    rawGold: 'rawGold',
    metal: 'metal',
    copper: 'copper',
    gold: 'gold'
}

const resources = {
    [resourcesNames.electricity]: 0,
    [resourcesNames.credits]: 0.0,
    [resourcesNames.stone]: 0,
    [resourcesNames.food]: 0,
    [resourcesNames.manpower]: 0,
    [resourcesNames.rawMetal]: 0,
    [resourcesNames.rawCopper]: 0,
    [resourcesNames.rawGold]: 0,
    [resourcesNames.metal]: 0,
    [resourcesNames.copper]: 0,
    [resourcesNames.gold]: 0,
}

function resourcesNamesArr() {
    let names = []
    Object.keys(resourcesNames).map( key => {
        const item = resourcesNames[key]
        names.push(item)
    })
    return names
}

export default resources