const initialState = {
    namePage: "Manajemen Menu",
    table: {
        name: "Nama Group",
    },
}

const menuPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_MENU':
            console.log('create menu', action.data)
            break;
        
        case 'UPDATE_MENU':
            console.log('update menu: ', action.data);
            break;

        case 'DELETE_MENU':
            console.log('delete menu: ', action.data)
            break;
        
        default:
            break;
    }
    return state;
}

export default menuPageReducer;