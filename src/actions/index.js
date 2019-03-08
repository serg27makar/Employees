export const setActionAdminId = (adminId) => {
    return {
        type: 'SET_ADMINID',
        adminId: adminId
    }
};
export const setActionAdminName = (adminName) => {
    return{
        type: 'SET_ADMINNAME',
        adminName: adminName
    }
};
export const setActionUserId = (userId) => {
    return {
        type: 'SET_USERID',
        userId: userId
    }
};
export const setActionUserName = (userName) => {
    return{
        type: 'SET_USERNAME',
        userName: userName
    }
};
export const setActionDepartment = (department) => {
    return {
        type: 'SET_DEPARTMENT',
        department: department
    }
};
export const setActionUsersList = (usersList) => {
    return {
        type: 'SET_USERSLIST',
        usersList: usersList
    }
};
export const setActionVisible = (visibleBar) => {
    return {
        type: 'SET_VISIBLEBAR',
        visibleBar: visibleBar
    }
};
