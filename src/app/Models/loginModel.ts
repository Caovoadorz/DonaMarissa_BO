export class LoginModel {
    token: string;
    token_type: string;
    expires_seconds:number;
    username:string;
    emited_date:Date;
    expires_date:Date;

    public setLoginModel(resposta):void{
        this.token= resposta.access_token;
        this.token_type=resposta.token_type;
        this.expires_seconds=resposta.expires_in;
        this.username=resposta.userName;
    }
  
}