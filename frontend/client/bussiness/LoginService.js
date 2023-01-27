const { TRACE_OUTPUT_VERSION } = require("next/dist/shared/lib/constants");

const DUMMY_ACCOUNTS = [{
    email:"test@test.com",
    password:"123456"
}];


function LoginController(email, password) {
    const isLoggedIn = DUMMY_ACCOUNTS.map((user) => {
        if(user.email === email && user.password === password){
            return true;
        }
        return false;
    });
    return isLoggedIn;
}

function SignUp(email, password){
    console.log(email)
    console.log(password)
    user = {email: email, password: password}
    console.log(user)
    DUMMY_ACCOUNTS.push(user)
}

export {LoginController, SignUp};