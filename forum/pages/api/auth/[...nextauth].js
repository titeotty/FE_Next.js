import { connectDB } from "@/util/database";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liWISQXMznjhrDXm',
      clientSecret: 'b31d7fcbd12757639ce0adb41bb77f0fafd17044',
    }),

    CredentialsProvider({
        name: "credentials",
          credentials: {
            email: { label: "email", type: "text" },
            password: { label: "password", type: "password" },
        },
  

        async authorize(credentials) {
          let db = (await connectDB).db('forum');
          let user = await db.collection('user_cred').findOne({email : credentials.email})
          if (!user) {
            console.log('이메일 x');
            return null
          }
          const pwcheck = await bcrypt.compare(credentials.password, user.password);
          if (!pwcheck) {
            console.log('wrong pass');
            return null
          }
          return user
        }
      })
    ],
  

    session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60 
    },
  
  
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.user = {};
          token.user.name = user.name
          token.user.email = user.email
        }
        return token;
      },

      session: async ({ session, token }) => {
        session.user = token.user;  
        return session;
      },
    },
  
  secret : "dohyeony1234",
  // adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 