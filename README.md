# Next.js & nextUI and Clerk template

This is a template for creating applications using Next.js 13 (app directory),NextUI (v2) and Clerk for Authentication with Mock hero section and protected routes.

## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Clerk](https://github.com/clerkinc)

## How to Use

### git clone the template

```bash
git clone https://github.com/Redoxahmii/somethingtemplate
```

### Install dependencies

```bash
npm install
```

After installation Create an account on [Clerk](https://github.com/clerkinc) and copy the authentication tokens provided.

Create an .env file and paste your tokens inside the fields and also add the routes underneath.

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_....
CLERK_SECRET_KEY=sk_test_....


//clerk routes

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### Run the development server

```bash
npm run dev
```

### Have Fun Coding

Enjoy working with this template, and feel free to customize it to suit your project's needs.
