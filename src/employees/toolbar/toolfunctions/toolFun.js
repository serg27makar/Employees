import {userUpdate, usersAll, findDouble, findUserDep, findUser, userIns} from "../../utility/socket"
import {setActionBody, setActionUsersList} from "../../../actions/index"

export function edit (user, dispatch, call){
    if (user.userName){
        if(user.department !== ''){
            let userUp = {
                userId: user.userId,
                userName: user.userName,
                department: user.department,
                notes: user.notes,
            };
            userUpdate(userUp);
            usersAll((res) => {
                dispatch(setActionUsersList(res));
            });
            dispatch(setActionBody(''));
        }else {
            call('выберите отдел')
        }
    }else {
        call('введите имя')
    }
}

export function search (user,dispatch){
    if(user.sele !== '' && user.name !== '') {
        let userDoub = {
            userName: user.name,
            department: user.sele,
        };
        findDouble(userDoub,(res) => {
            dispatch(setActionUsersList(res))
        })
    }else if(user.sele === '' && user.name !== '') {
        findUser(user.name, (res) => {
            dispatch(setActionUsersList(res))
        })
    }else if(user.sele !== '' && user.name === '') {
        findUserDep(user.sele, (res) => {
            dispatch(setActionUsersList(res))
        })
    }else if(user.sele === '' && user.name === '') {
        usersAll((res)=>{
            dispatch(setActionUsersList(res))
        });
    }
}

export function createUser(user, dispatch, call){
    if (user.name){
        if(user.sele !== ''){
            let userCreate = {
                userName: user.name,
                department: user.sele,
                notes: user.notes,
            };
            userIns(userCreate);
            usersAll((res) => {
                dispatch(setActionUsersList(res))
            });
            dispatch(setActionBody(''));
        }else {
            call('выберите отдел')
        }
    }else {
        call('введите имя')
    }
}



