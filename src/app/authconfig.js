
export const authConfig = {
   
    providers: [],
    pages: {
        signIn: "/Logging",
    },
    callbacks: {
        async authorized({ auth, request:{nextUrl} }) {
            const isLoggedIn = auth?.user;
             console.log("jiomkwc<idsv");
            const isOnDashboard = nextUrl.pathname.startsWith("/Dashboard");
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/Dashboard", nextUrl));
            }
            return true;
        }
    }
};
