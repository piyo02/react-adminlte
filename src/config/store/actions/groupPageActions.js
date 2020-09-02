export const _create = (data) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("groups")
            .add({
                name: data.name,
                description: data.description,
            })
            .then(() => {
                dispatch({type: "CREATE_GROUP", data});
            })
            .catch(err => {
                dispatch({type: "CREATE_GROUP_ERR", err})
            })
    }
}

export const _update = (data) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("groups")
            .doc(data.id)
            .set(
                {
                    name: data.name,
                    description: data.description
                }
            )
            .then(() => {
                dispatch({type: "UPDATE_GROUP", data})        
            })
            .catch(err => {
                dispatch({type: "UPDATE_GROUP_ERR", err})
            })
    }
}

export const _delete = (data) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("groups")
            .doc(data)
            .delete()
            .then(() => {
                dispatch({type: "DELETE_GROUP", data})        
            })
            .catch(err => {
                dispatch({type: "DELETE_GROUP_ERR", err})
            })
    }
}
