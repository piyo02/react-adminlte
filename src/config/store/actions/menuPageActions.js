export const _create = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "CREATE_MENU", data})
    }
}

export const _update = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "UPDATE_MENU", data})
    }
}

export const _delete = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "DELETE_MENU", data})
    }
}



export const _getMenu = (id) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const data = [];
        return new Promise((resolve, reject) => {
            firestore
                .collection("menus")
                .where("is_active", "==", true)
                .where("group_id", "==", id)
                .get()
                .then((snaps) => {
                    snaps.docs.map(value => {
                        return data.push({id: value.id,  ...value.data()})
                    });
                    data.sort(function(a,b){
                        return a.position - b.position
                    });
                    const parents = data.filter(function(parent){
                        return parent.ref_id === ""
                    })
                    parents.map(parent => {
                        return parent.child = data.filter(function(menu){
                            return menu.ref_id === parent.id
                        })
                    })
                    dispatch({type: "GET_MENU", data:parents})
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }
}