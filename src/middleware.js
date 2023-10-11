import { withAuth } from "next-auth/middleware";
export default withAuth(
  async function middleware(req) {
    // console.log("req.nextauth.token", req.nextauth.token);
  }
  // {
  //   callbacks: {
  //     authorized: ({ token }) => {
  //       if (!token) {
  //         return false;
  //       }
  //     },
  //   },
  // }
);
export const config={
    matcher:["/Dashboard","/Blog/Addblog"]
}