export default function AuthHeader(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.accessToken){
        return {Authorization: 'x-access-token' + user.accessToken};
    }else{
        return {};
    }
}