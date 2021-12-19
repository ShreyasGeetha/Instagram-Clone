import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
   providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    //  GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],
  // Configure one or more authentication providers
  // providers: [
  //   Providers.GitHub({
  //     clientId: process.env.GITHUB_CLIENT_ID,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
  //   }),
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_CLIENT_ID,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //   }),
  //   // ...add more providers here
  // ],
  // pages: {
  //   signIn: "/auth/signin",
    
  // },
  // callbacks: {
  //   async session({ session, token, user }) {
  //      //session.user.username = session.user.name
         
      
  //     // session.user.uid = token.sub
  //     session.user.username= session.user.name.split(' ')[0]
  //     session.user.uid = token.sub
  //     return session;
  //   }
  // }
  // // theme: {
  // //   logo: 'https://links.papareact.com/sq0',
  // //   brandColor: '#F13287',
  // //   colorScheme: 'auto'
  // // }
})