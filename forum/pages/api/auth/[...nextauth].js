import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liWISQXMznjhrDXm',
      clientSecret: 'b31d7fcbd12757639ce0adb41bb77f0fafd17044',
    }),
  ],
  secret : 'dohyeony1234'
};
export default NextAuth(authOptions); 