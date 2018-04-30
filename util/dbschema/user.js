const UserSchema = {
    userid:String,
    persona:{
        name:String,
        dob:Date
    },
    auth:{
        username:String,
        passcode:String
    }
};

module.exports = UserSchema;