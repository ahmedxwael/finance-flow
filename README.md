# Finance Flow

Finance Flow is a comprehensive platform for managing your finances. Track expenses, manage budgets, set goals, and achieve financial freedom - all in one simple, beautiful platform.

## Features

- 📊 **Dashboard** - Get a comprehensive overview of your financial health with interactive charts and insights
- 💰 **Transaction Tracking** - Easily record and categorize your incomes and expenses to understand your cash flow
- 🏦 **Smart Allocations** - Organize your finances by allocating funds to different categories and budgets
- 🎯 **Financial Goals** - Set and track your financial goals, whether it's saving for a vacation or paying off debt
- 👤 **User Management** - Secure authentication and profile management
- 📱 **Responsive Design** - Beautiful, modern UI that works on all devices

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives with custom design system
- **Routing**: React Router 7
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React
- **Database ORM**: Drizzle ORM
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd forntend
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   # Create a .env file in the root directory
   # Add your environment variables (database connection, API keys, etc.)
   ```

4. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   # or
   pnpm dev
   ```

The application will open at `http://localhost:5173` (or the next available port).

## Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn preview` - Preview the production build locally
- `yarn lint` - Run ESLint to check code quality

## Project Structure

```text
src/
├── assets/              # Static assets (images, fonts, etc.)
├── design-system/       # Reusable UI components and design system
│   ├── components/      # Base components (Button, Card, Form inputs, etc.)
│   ├── icons/           # Icon exports
│   └── ui/              # UI component library
├── drizzle/             # Database schema and configuration
│   └── schema/          # Database table schemas
├── lib/                 # Utility functions
├── modules/             # Feature modules
│   ├── auth/            # Authentication module
│   ├── dashboard/       # Dashboard pages
│   ├── home/            # Home page and components
│   ├── layouts/         # Layout components (Header, Footer, etc.)
│   ├── settings/        # Settings pages
│   ├── shared/          # Shared utilities
│   └── user/            # User management
└── shared/              # Shared configuration and utilities
```

## Key Features Implementation

### Home Page

- Hero section with call-to-action
- Features showcase
- Getting started guide
- Responsive design with modern UI

### Authentication

- Sign in/Sign up functionality
- User session management
- Protected routes (ready for implementation)

### Dashboard

- Financial overview
- Interactive charts and visualizations
- Quick access to key features

### Transactions

- Income tracking
- Expense tracking
- Category management

### Goals & Allocations

- Financial goal setting
- Budget allocation
- Progress tracking

## Development

### Code Style

The project uses:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Design System

The application uses a custom design system built on:

- Radix UI primitives for accessibility
- Tailwind CSS for styling
- Consistent color scheme and typography
- Reusable component patterns

### Type Safety

The project is fully typed with TypeScript. All components, utilities, and data structures have proper type definitions.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=your_database_url

# API
API_URL=your_api_url

# Other environment variables
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure all tests pass and linting is clean
4. Submit a pull request

## License

This project is private and proprietary.

## Support

For issues, questions, or contributions, please contact the development team.

---

Made with ❤️ for better financial management
