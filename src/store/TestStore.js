import { createStore } from 'redux'

const initialState = {
    name: 'Anon',
    secondName: 'Anonov'
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'FIRST':
            return { ...state, name: action.payload }
        case 'SECOND':
            return {}
    }
}

const store = createStore(reducer);