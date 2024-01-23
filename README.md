This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Bandage Ecommerce is a test project I built following the guide for Nextbasket Senior frontend interview. I utilized advanced cutting edge technologies for this project. My reason for using ShadcnUI over Material UI is that I got to see the interview assignment 3 days after it's been sent, and I had to use a component library that has full support for tailwindcss so I can take control over styling this project in the smallest time possible.

- I used React Query to get data.
- I used Redux Toolkit to create a cart and wishlist state, manage it, and created basic cart operations.
- I used Redux Persisit to store the cart in local storage so when the user refreshes, they still have their wishlist and cart intact.
- I used Typescript to ensure my code is type safe.
- I used Tailwindcss for styling
- I Utilized ShadcnUI, a highly customizable Nextjs/React component library optimized for tailwindcss. 

First, run the development server:

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
