const initialState = {
    namePage: "Manajemen Group",
    label: {
        name: "Nama Group",
        description: "Deskripsi"
    },
    hasAction: true,
    formValue: {
        name: "",
        description: "-"
    },
    defaultValueForm: {
        name: "",
        description: "-"
    },
    show: null,
}

const groupPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_GROUP':
            console.log('create group', action.data)
            break;
        
        case 'UPDATE_GROUP':
            console.log('update group: ', action.data);
            break;

        case 'DELETE_GROUP':
            console.log('delete group: ', action.data)
            break;
    
        default:
            break;
    }
    return state;
}

export default groupPageReducer;