import Token from './Token'
import AppStorage from './AppStorage'
class User {
    login(form) {
        axios.post('/api/auth/login', form)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token
        const user = res.data.user
        if(Token.isValid(access_token)) {
            AppStorage.store(user, access_token);
        }
    }
}

export default User = new User();
