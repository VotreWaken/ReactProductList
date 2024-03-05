export const TodoReducer = (state, action) => { 
    switch (action.type) {
        case 'create':
            return [1,2,3]
    
        default:
            break;
    }

    return state;
}