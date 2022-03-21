import ActionTypes from './actionTypes';

export const saveUser = (userData) => ({
    type: ActionTypes.SAVE_USER,
    payload: userData
});

export const updateUser = (userData) => ({
    type: ActionTypes.UPDATE_USER,
    payload: userData
});