import {BuildMelter} from '../actions/buldings'

const buildings = {
    melter: {
        title: 'Build melter',
        show: true,
        time: 5000,
        count: 0,
        action: BuildMelter(1, 1)
    }
}

export default buildings