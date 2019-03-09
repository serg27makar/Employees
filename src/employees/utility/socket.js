import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3001');

function userIns (data){
    let user = {
        userName: data.userName,
        department: data.department,
        notes: data.notes,
    };

    socket.on('userInsRes', (res, err)=>{
        console.log(err);
    });
    socket.emit('userIns', user);
}
export {userIns};

function userUpdate (data){
    let user = {
        userId: data.userId,
        userName: data.userName,
        department: data.department,
        notes: data.notes,
    };
    socket.on('userUpdateRes', (res, err)=>{
        console.log(err);
    });
    socket.emit('userUpdate', user);
}
export {userUpdate};


function usersAll (call){
    socket.on('usersAllRes', (res, err)=>{
        call(res);
        console.log(err);
    });
    socket.emit('usersAll');
}
export {usersAll};

function findUser (user, call){
    socket.on('allFindUser', (res, err)=>{
        call(res);
        console.log(err);
    });
    socket.emit('findUser', user);
}
export {findUser};

function findDouble (user, call){
    socket.on('allFindDouble', (res, err)=>{
        call(res);
        console.log(err);
    });
    socket.emit('findDouble', user);
}
export {findDouble};

function findUserDep (user, call){
    socket.on('allFindUserDep', (res, err)=>{
        call(res);
        console.log(err);
    });
    socket.emit('findUserDep', user);
}
export {findUserDep};

function userDell (data){

    socket.on('allUserDell', (res, err)=>{
        console.log(err);
    });
    socket.emit('userDell', data);
}
export {userDell};

