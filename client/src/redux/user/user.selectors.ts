import { createSelector } from 'reselect';

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

export const selectUserError = createSelector(
    [selectUser],
    (user) => user.error
);

export const selectUserStatus = createSelector(
    [selectUser],
    (user) => user.status
);
