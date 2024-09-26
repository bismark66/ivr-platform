<!-- @format -->

# An IVR flow buider app created using nextjs

This project showcases an IVR flow builder web application. It leverages the react flow library, redux and firebase for smooth user experience.
It uses react and allows for users to create a flow with four basic nodes, audioNode, transferCallNode, menuNode and voiceRecordNode. It allows for the creation of a flow using these basic nodes, save, edit, reset and simulate flow. It uses the firebase firestore as a database with redux as state management tool. Every part of the project is a sample code which shows how to do the following:

- How to use the nextjs app router
- How to use the nextjs fetch tool for calling api endpoints
- How to use localstorage to handle data
- How to overlay an interface
- How to programmatically route

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started, How to run locally on your machine

1. Clone this project by running `git@github.com:bismark66/ivr-platform.git`
2. Install all dependencies from the project directory by running

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create your public api keys from firebase firestore after creating a project on firebase.
   Get your Public API keys
   Create a .env.local file at the root of your project
   copy the env in the .env file and assign their repective keys to them in the .env.local

As Shown below;

- NEXT_PUBLIC_FIREBASE_KEY=
  -NEXT_PUBLIC_FIREBASE_DOMAIN=
  -NEXT_PUBLIC_FIREBASE_PROJECT_ID=
  -NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
  -NEXT_PUBLIC_FIREBASE_SENDER_ID=
  -NEXT_PUBLIC_MESSAGING_APP_ID=
  -NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

4. Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Hurrayyyy!!! You are all set to make changes to any part of the project!

## Firebase Public API

If you dont already have an account with firebase, create one using this link [firebase](https://firebase.google.com)
Use The Movie Database API to fetch movie data. You can sign up for an API key at [TMDb](https://www.themoviedb.org/)

## Firebase firestore Endpoints controllers Used

- getDoc
- doc
- getDocs
- updateDoc
- addDoc
- deleteDoc

NB: All these controllers are from the firebase firestore cloud
import {
addDoc,
collection,
getDocs,
getDoc,
doc,
deleteDoc,
setDoc,
updateDoc,
} from "firebase/firestore";

## Frameworks

This Projects leverages the use of [ant design](https://ant.design/components/overview/) component libraries for some of it core components
This Projects leverages the use of [firebase ](https://ant.design/components/overview/) component libraries for some of it core components

## Testing

Testing was done using [Cypress](https://docs.cypress.io/guides/continuous-integration/introduction) testing library

## Deployment

App was deployed to vercel https://ivr-platform.vercel.app/

## Find bugs

If you found an issue and would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
