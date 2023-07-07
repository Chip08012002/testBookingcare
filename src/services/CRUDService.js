import db from '../models';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPasswordByBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,  
                password: hashPasswordByBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })
            resolve('ok!, create new user succeed')
        }
        catch(e) {
            reject(e)
        }
    })
} 

let getAllUser = () => {
   
    return new Promise(async(resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,                
            })
            resolve(users);
        }
        catch(e) {
            reject(e)
        }
    })  
}

let getUserInfoById = (userId) => {
   
    return new Promise(async(resolve, reject) => {
        try {
            let user = db.User.findOne({
                raw: true,
                where: {id: userId}
            })
            if (user) {
                resolve(user)
            }
           else {
            resolve({s})
           }
        }
        catch(e) {
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
        let user = await db.User.update( data, {
                where: {id: data.id},
            })
            resolve(user);
        }
        catch(e) {
            reject(e)
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassword =  await bcrypt.hashSync("password", salt);
            resolve(hashPassword);
        }
        catch(e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData
}