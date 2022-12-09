// enahced object Literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id:uId
    }
}

console.log(newUser("anyilojr", 26, "Vzla", 1))