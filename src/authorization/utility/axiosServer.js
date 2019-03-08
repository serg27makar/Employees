import axios from 'axios'

export const utilityServerLogin = (variant, callback) => {
    let userInfo={
        txt: '',
        adminName:'',
        adminId: '',
    };
    if (variant.Name !== '') {
        if (variant.password.length >= 3) {
            const admin = {
                Password: variant.password,
                adminName: variant.Name,
            };
            axios.post(`http://localhost:3001/`+ variant.direct, admin)
                .then(req => {
                    if(req.data === 'find:1' && variant.direct==="register") {
                        userInfo = {
                            txt: 'такой пользователь уже есть'
                        };
                        callback(userInfo)
                    }else if (req.data === 'find:0' && variant.direct==="login"){
                        userInfo= {
                            txt: 'такой пользователь не найден'
                        };
                        callback(userInfo)
                    }else if (req.data._id.length === 24 ){
                        localStorage.token = req.data._id;
                        userInfo= {
                            txt:'welcom',
                            adminName:req.data.Name,
                            adminId: req.data._id
                        };
                        callback(userInfo)
                    }
                })
        }else {
            userInfo= {
                txt:'пароль должен быть не меньше 3 символов'
            };
            callback(userInfo)
        }
    }else {
        userInfo = {
            txt: 'введите имя'
        };
        callback(userInfo)
    }
};

export const utilityServerGet = (back) => {
    axios
        .get(`http://localhost:3001/`,  {
            headers: {'token': localStorage.token}
        })
        .then(response => {
            if (response){
                back(response.data)
            }else (
                back('scm')
            )
        })
        .catch(error => back(error.request.status));
};
