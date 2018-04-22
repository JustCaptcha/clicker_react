import {ElectricityInc, DrillMetal, DrillCopper, MeltMetal, MeltCopper} from '../actions/actions';

const actions = {
    dinamo: {
        title: 'Get electricity from dinamo',
        show: true,
        time: 5000,
        action: ElectricityInc(1)
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
    }
}

export default actions