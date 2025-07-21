
Built by https://www.blackbox.ai

---

# Tagumu Learning Platform

## Project Overview

The **Tagumu Learning Platform** is a web application designed to facilitate modern learning methodologies. It utilizes a combination of React and Next.js along with Supabase for backend services. This project aims to provide an intuitive and interactive platform for users, focusing on learning management, user authentication, and content delivery.

## Installation

To install this project, follow the steps below:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tagumu-learning-platform.git
   cd tagumu-learning-platform
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the necessary environment variables:
   ```env
   NEXTAUTH_URL=your_auth_url
   NEXTAUTH_SECRET=your_auth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:8000` to view the app.

## Usage

Once the application is running, you can explore various features offered by the platform. This includes user authentication via Google, accessing learning materials, and engaging with interactive content.

## Features

- **User Authentication**: Secure login and signup options using NextAuth with Google.
- **Learning Management**: Users can access different learning materials based on their registered courses.
- **API Integration**: The application uses Supabase for backend functionalities such as database management.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Dependencies

The project relies on the following dependencies:

- `next`: "^14.0.0" - React framework for server-side rendering and generating static websites.
- `react`: "^18.3.1" - JavaScript library for building user interfaces.
- `react-dom`: "^18.3.1" - Provides DOM-specific methods for React.
- `@supabase/supabase-js`: "^2.38.0" - JavaScript client for Supabase.
- `axios`: "^1.6.0" - Promise-based HTTP client for the browser and Node.js.
- `next-auth`: "^4.24.0" - Authentication for Next.js applications.
- `jsonwebtoken`: "^9.0.2" - JSON Web Token implementation.
- `bcryptjs`: "^2.4.3" - Library to hash passwords.

### Development Dependencies

- `eslint`: "^8" - Linter for JavaScript and JSX.
- `eslint-config-next`: "14.0.0" - ESLint configuration for Next.js.

## Project Structure

Here's an overview of the project's structure:

```
tagumu-learning-platform/
│
├── package.json              # Project metadata and dependency definitions
├── package-lock.json         # Exact versions of the installed packages
├── next.config.js            # Configuration for Next.js application
├── .env                       # Environment variables for the application
├── pages/                    # Next.js pages
│   ├── api/                  # API routes
│   ├── _app.js               # Custom App component
│   ├── index.js              # Home page
│   └── [...other pages...]   # Other page components
│
└── public/                   # Static assets directory
    ├── images/               # Image assets
    └── styles/               # CSS and style files
```

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your enhancements or bug fixes.

---

For any questions or issues, feel free to reach out via [GitHub Issues](https://github.com/yourusername/tagumu-learning-platform/issues).