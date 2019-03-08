import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3001');

function userIns (data){
    let user = {
        userName: data.userName,
        department: data.department,
    };

    socket.on('userInsRes', (res, err)=>{
        console.log(err);
    });
    socket.emit('userIns', user);
}
export {userIns};


function usersAll (call){
    socket.on('usersAllRes', (res, err)=>{
        call(res)
    });
    socket.emit('usersAll');
}
export {usersAll};

function userDell (data){

    socket.on('allUserDell', (res, err)=>{
        console.log(err);
    });
    socket.emit('userDell', data);
}
export {userDell};

