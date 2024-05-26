# Hooks Store

Hooks Store is an online platform where users can purchase religious books. The project leverages a modern technology stack to provide a seamless and dynamic user experience.

## Features

- **Admin Control**: Admins have the ability to create products and manage users.
- **Tags Filtering**: Users can filter products by tags to find what they are looking for more efficiently.
- **Two-Factor Authentication**: Enhanced security through two-factor authentication.
- **Order Status**: Users can track the status of their orders.
- **Dynamic Content**: All content is dynamically rendered to ensure up-to-date information.
- **Best Animations**: High-quality animations to enhance user interaction.
- **Variant Selection**: Users can choose from different product variants.

## Technology Stack

- **Next.js**: React framework for building server-side rendered and statically generated web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.
- **Shadcn**: Shadcn integration for enhanced styling.
- **Framer Motion**: Library for creating animations and micro-interactions.
- **Algolia Search**: Instant search and discovery capabilities.
- **NextAuth.js**: Authentication for Next.js applications.
- **Nodemailer**: Module to send emails from Node.js.
- **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.
- **Neon**: Postgres database management.
- **Express**: Web framework for Node.js.
- **Drizzle**: Database ORM for TypeScript.
- **Zustand**: State management library for React.
- **Zod**: TypeScript-first schema declaration and validation library.
- **Stripe**: Payment processing platform for online payments.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node package manager) or Yarn
- PostgreSQL (Neon)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/piyushyadav0191/Hooks-Store.git
   cd Hooks-Store
    ```

2. Install dependencies

Using yarn:
 ```bash
   yarn
 ```

3. Set up environment variables

Create a .env.local file in the root of the project and add your environment variables:
 ```bash
POSTGRES_URL=""
STRIPE_SECRET=""
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_PUBLISH_KEY=""
NEXT_PUBLIC_ALGOLIA_ID=""
NEXT_PUBLIC_ALGOLIA_SEARCH=""
ALGOLIA_ADMIN=""
AUTH_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_ID=""
GITHUB_SECRET=""
VERCEL_URL=""
DOMAIN_URL=""
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
SERVICE=""
USER=""
PASS=""
  
 ```


4. Push Schema to Neon Database

 ```bash
   yarn db:generate && yarn db:push
 ```

 5. Run the development server
 ```bash
   yarn dev
 ```

Open http://localhost:3000 with your browser to see the result.

## Admin Access
To access the admin control panel, navigate to /admin and log in with your admin credentials. Here, you can create products and manage users.

## Contributing
If you want to contribute to this project, please fork the repository and create a pull request. For major changes, please open an issue first to discuss what you would like to change.


