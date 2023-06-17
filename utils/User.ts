export default class User {
    static isLoggedIn(): boolean {
       let expires: any = localStorage.getItem("expires") || 0;
       let currentTimeStamp: any = Date.now();
       if(expires > currentTimeStamp){
            return true;
       }else{
            localStorage.clear();
            return false;
       }
    }
}