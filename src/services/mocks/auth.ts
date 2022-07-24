
class AuthenticationMocker {
    static RES_LOGIN_SUCCESS = {
        status: {
            isLoading: false,
            errorMsg: ''
        },
        authKey: '1232141dfsa4223',
        user: {
            id: '1',
            name: 'Arnab Kar',
            phone: '9876543210'
        }
    };
    static RES_LOGIN_FAILURE = {
        status: {
            isLoading: false,
            errorMsg: 'Wrong Username/Password'
        },
        authKey: '',
    };
}


export default AuthenticationMocker;