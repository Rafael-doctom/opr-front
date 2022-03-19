import ActionTypes from './actionTypes';

export const saveRequirements = (requirementsData) => ({
    type: ActionTypes.SAVE_REQUIREMENTS,
    payload: requirementsData
});

export const saveRequirement = (requirementData) => ({
    type: ActionTypes.SAVE_REQUIREMENT,
    payload: requirementData
});

export const updateRequirement = (requirementData) => ({
    type: ActionTypes.UPDATE_REQUIREMENT,
    payload: requirementData
});