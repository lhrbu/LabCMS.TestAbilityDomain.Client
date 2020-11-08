import sha256 from 'crypto-js/sha256';

export default class LoginCheckService
{
    private static _instance:LoginCheckService = new LoginCheckService();
    private constructor(){}
    public static Instance(){return this._instance;}

    private _loginFlag:boolean = false;
    
    public get LoginFlag() : boolean {
        return this._loginFlag;
    }
    
    public ValidateLogin(values:any)
    {
        const sha256User = sha256(values.User).toString();
        const sha256Password = sha256(values.Password).toString();
        if(sha256User!=="55db364a5348163e021144ba0090590933fcfaec6058599e8e9850ce7aab1ca0" ||
            sha256Password !=="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855")
        {
            window.alert("Wrong login information!");
        }else{
            this._loginFlag = true;
            window.alert("Login Successful!");
        }
        return this._loginFlag;
    }
}