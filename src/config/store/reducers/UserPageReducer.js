const initialState = {
    users: [
        {
            id: 1, 
            username: "Administrator", 
            password: "12345",
            email: "admin@gmail.com",
            ipAddress: '192.0.0.1',
            createdOn: "03-01-2000",
            lastLogin: "07-08-2020",
            active: "Aktif",
            firstName: "Admin",
            lastName: "",
            phone: "081234567890",
            image: "path/image",
            address: "Jln. Admin",
        },
    ],
    state: {
        show: null,
        hasAction: true,
        namePage: "Manajemen User",
        label: {
            username: "Username",
            password: "Password",
            email: "Email",
            active: "Aktif",
        },
        table: {
            username: "Username",
            email: "Email",
            active: "Aktif",
        },
        form: {
            username: "",
            email: "xxx@gmail.com",
            password: "12345",
            active: true,
        },
        defaultValueForm: {
            username: "",
            email: "xxx@gmail.com",
            password: "12345",
            active: true,
        },
    }
}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            console.log('create user', action.data)
            break;
        
        case 'UPDATE_USER':
            console.log('update user: ', action.data);
            break;

        case 'DELETE_USER':
            console.log('delete user: ', action.data)
            break;
    
        default:
            break;
    }
    return state;
}

export default userPageReducer;