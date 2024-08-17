import conf from '../conf/conf';
import { Client , Account , ID } from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(client);
    }

    async createAccount({email , password , name}) {
        try{
            const userAccount = await this.account.create( ID.unique() , email , password , name );
            if(userAccount){
                // call another method
                this.login(email,password);
            }else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
            // Logged in
        } catch (err) {
            console.log("Appwirte Service :: getCurrentUser ::error" , err);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwirte Service :: logout :: error" , err);
        }
    }

}

const authService = new AuthService();

export default authService;