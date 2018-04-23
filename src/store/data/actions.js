import {ElectricityInc, DrillMetal, DrillCopper, DrillGold, MeltMetal, MeltCopper, MeltGold} from '../actions/actions';

const actions = {
    dinamo: {
        title: 'Get electricity from dinamo',
        show: true,
        time: 1000,
        action: ElectricityInc(5)
    },
    drillMetal: {
        title: 'Drill for metal',
        show: true,
        time: 5000,
        action: DrillMetal(10, 1)
    },
    drillCopper: {
        title: 'Drill for copper',
        show: true,
        time: 5000,
        action: DrillCopper(10, 1)
    },
    drillGold: {
        title: 'Drill for gold',
        show: true,
        time: 5000,
        action: DrillGold(10, 1)
    },
    meltMetal: {
        title: 'Melt metal',
        show: true,
        time: 5000,
        action: MeltMetal(10, 1)
    },
    meltCopper: {
        title: 'Melt copper',
        show: true,
        time: 5000,
        action: MeltCopper(10, 1)
    },
    meltGold: {
        title: 'Melt gold',
        show: true,
        time: 5000,
        action: MeltGold(10, 1)
    }
}

export default actions