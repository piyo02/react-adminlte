export const _create = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "CREATE_USER", data})
    }
}

export const _update = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "UPDATE_USER", data})
    }
}

export const _delete = (data) => {
    return (dispatch, getState) => {
        dispatch({type: "DELETE_USER", data})
    }
}