import Token from './Token'
import AppStorage from './AppStorage'
class User {
    login(form) {
        axios.post('/api/auth/login', form)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response))
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token
        const user = res.data.user
        if(Token.isValid(access_token)) {
            AppStorage.store(user, access_token);
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if(storedToken) {
            return Token.isValid(storedToken) ? true : false
        }
        return false
    }

    loggedIn() {
        return this.hasToken()
    }

    logout() {
        AppStorage.clear()
    }

    name() {
        if(this.loggedIn()) {
            return AppStorage.getUser()
        }
    }

    id() {
        if(this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }

}

export default User = new User();
