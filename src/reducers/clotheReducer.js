

export const clotheReducer = (state, action) => {

    switch (action.type) {
        case 'add':
            return state.map((c) => c.id === action.payload.id ? {...c, isInCar: true } : c )
        case 'remove':
            return state.map((c) => c.id === action.payload.id ? {...c, isInCar: false } : c )
        case 'resetCar':
            return state.map((c) => 1 === 1 ? {...c, isInCar: false } : c )
    
        default:  // it is called when the reducer is created
            return state;
    }
}