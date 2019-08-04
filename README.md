# Instagram App

This project is similar to an Instagram application with the ability to post images, like and unlike posts, and make comments on them.

## How to Run

1. After cloning, fill in `Config/keys.dev.js` with your database connection details and `secretOrKey`.

2. Run `npm install` to get server dependencies.

3. Run `npm run client-install` to get client dependencies.

4. Run `npm run dev` to start the application on the dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## How to Use 

Sign up or sign in to create a profile and start sharing images. This site uses Gravatar so if you want a profile image, use a Gravatar email.

- Dashboard: Edit, view, or delete your profile on this page.
- Home/Feed: Create posts and/or view, like, and comment on everyone's posts.
- Profiles: View all the users of the application, and click on one to see their individual posts, like/unlike, and/or comment.