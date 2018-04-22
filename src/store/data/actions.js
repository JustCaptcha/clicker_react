import {ElectricityInc, Drill} from '../actions/actions';

const actions = {
    dinamo: {
        title: 'Get electricity from dinamo',
        show: true,
        action: ElectricityInc(1)
    },
    drill: {
        title: 'Drill for minerals',
        show: true,
        action: Drill(10, 1)
    }
}

export default actions