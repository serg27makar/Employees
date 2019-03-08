const http =require('http');
const cors = require('cors');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
const ObjectId = require("mongodb").ObjectId;
const server = http.createServer(app);
const io = require('socket.io').listen(server);

let dbEmployees;
let admindb;
let usersdb;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((request,response,next)=>{
    if(request.url === '/register' || request.url === '/login' ){
        next();
        return
    }
    const collection = request.app.locals.collection;
    let cookies = request.headers;
    if(!cookies.token){
        response.sendStatus(401);
        response.end();
        return
    }
    collection.findOne(ObjectId(cookies.token),function (err,res) {
        if (res) {
            response.send(res);
            next()
        }else {
            response.sendStatus(401);
            response.end();
        }
    });
});

mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbEmployees = client;
    app.locals.collection = client.db("dbEmployees").collection("admindb");
    admindb = client.db("dbEmployees").collection('admindb');
    usersdb = client.db("dbEmployees").collection('usersdb');
    server.listen(3001, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.get("/", function (request, response) {
    response.end();
});

app.post("/login", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const adminName = request.body.adminName;
    const Password = request.body.Password;
    const admin = {Name: adminName, Password: Password};
    const collection = request.app.locals.collection;
    collection.findOne(admin, function (err, result) {
        if(err) return console.log(err);
        if(!result){
            response.send('find:0');
            response.end()
        }else{
            response.send(result);
            response.end()
        }
    });
});

app.post("/register", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const adminName = request.body.adminName;
    const Password = request.body.Password;
    const admin = {Name: adminName, Password: Password};
    const collection = request.app.locals.collection;
    collection.findOne(admin, function (err, result) {
        if(err) return console.log(err);
        if(!result){
            collection.insertOne(admin, function (err, res) {
                if (err) return console.log(err);
                response.send(res.ops[0]);
                response.end()
            });
        }else{
            response.send('find:1');
            response.end()
        }
    });
});


io.on('connection', (client)=>{
    /*
    client.on('abonents', ()=> {
        ClientChat.find({Us: 'us'}).toArray(function (error, list) {
            client.emit('allAbonents', list)
        });
    });

    client.on('friendslist', (userId)=> {
        ClientChat.find({_id:ObjectId(userId)}).toArray(function (error, list) {
            let arr = list[0].userFriends;
            client.emit('allfriendslist', arr)
        });
    });*/

    client.on('usersAll', function () {
        usersdb.find({Us:'c'}).toArray(function(err, list){
            client.emit('usersAllRes', list)
        });
    });

    client.on('userIns', function (user) {
        const userName =user.userName;
        const notes =user.notes;
        const department = user.department;
        const User = {Us:'c', userName: userName,  department: department, notes: notes };
        usersdb.insertOne( User, function(err, list){
            client.emit('userInsRes', list)
        });
    });

    client.on('userDell', function (userId) {
        usersdb.findOneAndDelete( {_id:ObjectId(userId)}, function(err, result){
            if (err) return console.log(err);
        });
        client.emit('allUserDell')
    });

    client.on('userUpdate', function (user) {
        const userId = user.userId;
        const userName =user.userName;
        const notes =user.notes;
        const department = user.department;
        usersdb.findOneAndUpdate( {_id:ObjectId(userId)},{$set:{ userName: userName, department: department, notes: notes}}, function(err, list){
            client.emit('userUpdateRes', list)
        });
    });

    /*
        client.on('friends', function (file) {
            const userId=file.userId;
            const avatar= file.avatar;
            const userName= file.userName;
            const friendId= file.friendId;
            const friendavatar= file.friendavatar;
            const friendName= file.friendName;
            const usUpdate = { friendId: userId, friendavatar: avatar, friendName: userName };
            const frUpdate = { friendId: friendId, friendavatar: friendavatar, friendName: friendName };
            ClientChat.findOneAndUpdate( {_id:ObjectId(userId)},{$push:{userFriends: frUpdate}} , function(err, result){
                if (err) return console.log(err);
            });
            ClientChat.findOneAndUpdate( {_id:ObjectId(friendId)},{$push:{userFriends: usUpdate}} , function(err, result){
                if (err) return console.log(err);
            });
            client.emit('allFriends')
        });
    */
    console.log('new connect');
});


process.on("SIGINT", () => {
    dbEmployees.close();
    process.exit();
});
