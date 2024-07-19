import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {authConfig} from './authconfig' 
import {connectTOdb} from '../app/lib/utils'
import {User} from '../app/lib/models'
import bcrypt from "bcrypt"

const login = async (credentials)=>{
    try {
       connectTOdb();
        const user = await User.findOne({ username: credentials.username });
        if (!user) throw new Error("fuck you ");
        const isPaswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPaswordCorrect) throw new Error("fuck you ");
        return user;

    } catch (error) {
        console.log("FFFFFFFFFFF");
    }
}
export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    console.log(user);
                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ]
});
