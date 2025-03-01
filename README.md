# NextAuth.js sample
This is the OAuth sample using `NextAuth.js`.

## Commit log
### 1. Created basic GitHub authentication

In the first commit, the following was done

- Set up the development environment for Next.js and NextAuth.js (including configuration of NEXTAUTH_SECRET and GitHub credentials)
- Configured the provider for GitHub OAuth using GitHubProvider
- Set up and exported HTTP methods for handlers in the App Router

Authentication Endpoint:
``` http://localhost:3000/api/auth/signin ```


### 2. Implemented protected route using useSession

In this commit, I learned the following:
- With NextAuth.js, simply importing/exporting SessionProvider allows you to specify the `use client` directive.
- With useSession, you can always retrieve the current session from that SessionProvider when you're in a client component (this is a feature of Next.js 🙂).
- Using sessions in RSC, you can build pages that are accessible or inaccessible based on the session state (i.e., whether the user is logged in).

Protected Route Endpoint
http://localhost:3000/protected

