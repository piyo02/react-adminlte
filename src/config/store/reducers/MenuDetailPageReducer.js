const initialState = {
    namePage: "Manajemen Menu",
    defaultValueForm: {
        name: "",
        link: "",
        icon: "home",
        position: 100,
        is_active: true,
    },
    form: {
        name: "",
        link: "",
        icon: "home",
        position: 100,
        is_active: true,
    },
    label: {
        name: "Nama Menu",
        link: "Link",
        icon: "Icon",
        position: "Posisi",
        is_active: true,
    },
    show: null,
}

const menuDetailPageReducer = (state = initialState, action) => {
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

        case "GET_MENU":
            return {
                ...state,
                menus: action.data
            }
    
        default:
            break;
    }
    return state;
}

export default menuDetailPageReducer;