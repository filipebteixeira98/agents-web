# Agents Web

Agents Web is a classroom assistant frontend where users can create rooms, record class audio, ask questions, and receive concise AI-generated answers based on the class transcription. The app is designed to keep class discussions organized by room and make it easier to revisit key explanations after a lesson.

## Technologies

- **React 19** - UI library
- **TypeScript 6** - Static typing for JavaScript
- **Vite 8** - Development server and build tool
- **Tailwind CSS 4** - Utility-first styling
- **React Router DOM 7** - Client-side routing
- **TanStack React Query 5** - Server state and cache management
- **React Hook Form** - Form state management
- **Zod** - Form schema validation
- **Base UI and Radix UI** - Accessible UI primitives
- **shadcn/ui** - Component system
- **Lucide React** - Icon library

## Project Patterns

- **Component-based architecture** - Reusable React components
- **Route-based pages** - Pages composed with React Router
- **Server state management** - API data handled with React Query hooks
- **Variant-based components** - UI variants powered by CVA
- **Composition pattern** - Component composition with primitive render APIs
- **Path aliasing** - `@/` points to `src/`

## Project Setup

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app at `http://localhost:5173`.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Generate a production build
- `npm run preview` - Preview the production build
- `npm run check` - Run Ultracite checks
- `npm run fix` - Apply Ultracite fixes

### Backend

The frontend expects an API running at `http://localhost:3333`. Start and configure the backend before using room creation, room listing, question submission, and audio upload features.

## Project Structure

```text
src/
├── components/      # Reusable application and UI components
├── http/            # API hooks and response/request types
├── lib/             # Shared utilities and configuration
├── pages/           # Application pages
├── app.tsx          # Root router and providers
└── main.tsx         # React entry point
```
