import {ChangeResource} from '../actions/actions';
import {resourcesNames} from './resources';

const actions = {
    dinamo: {
        title: 'Get electricity from dinamo',
        show: true,
        time: 1000,
        action: ChangeResource(resourcesNames.electricity, 5)
    },
    drillMetal: {
        title: 'Drill for metal',
        show: true,
        time: 5000,
        preAction: ChangeResource(resourcesNames.electricity, -10),
        action: ChangeResource(resourcesNames.rawMetal, 1)
    },
    drillCopper: {
        title: 'Drill for copper',
        show: true,
        time: 5000,
        preAction: ChangeResource(resourcesNames.electricity, -10),
        action: ChangeResource(resourcesNames.rawCopper, 1)
    },
    drillGold: {
        title: 'Drill for gold',
        show: true,
        time: 5000,
        preAction: ChangeResource(resourcesNames.electricity, -10),
        action: ChangeResource(resourcesNames.rawGold, 1)
    },
    meltMetal: {
        title: 'Melt metal',
        show: true,
        time: 5000,
        preAction: ChangeResource(resourcesNames.rawMetal, -10),
        action: ChangeResource(resourcesNames.metal, 1)
    },
    meltCopper: {
        title: 'Melt copper',
        show: true,
        time: 5000,
        preAction: ChangeResource(resourcesNames.rawCopper, -10),
        action: ChangeResource(resourcesNames.copper, 1)
    },
    meltGold: {
        title: 'Melt gold',
        show: true,
        time: 5000,
        preAction: ChangeResource(resourcesNames.rawGold, -10),
        action: ChangeResource(resourcesNames.gold, 1)
    }
}

export default actions