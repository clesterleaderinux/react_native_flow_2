# React Native Authentication App

A React Native TypeScript application with authentication flow including login, main content, and sign-out functionality.

## Components

### LoginComponent
- **Location**: `src/components/LoginComponent.tsx`
- **Purpose**: Handles user authentication with username and password
- **Features**:
  - Form validation
  - Loading states
  - Error handling
  - Responsive design
  - TypeScript interfaces

### MainContent
- **Location**: `src/components/MainContent.tsx`
- **Purpose**: Main dashboard displayed after successful login
- **Features**:
  - Dashboard cards with statistics
  - Recent activity feed
  - Quick action buttons
  - Pull-to-refresh functionality
  - Sign out functionality

### SignOutComponent
- **Location**: `src/components/SignOutComponent.tsx`
- **Purpose**: Handles user sign-out with confirmation
- **Features**:
  - Confirmation dialog
  - Modal overlay design
  - Inline button variant
  - Alert-based confirmation

## Project Structure

```
src/
├── components/
│   ├── LoginComponent.tsx
│   ├── MainContent.tsx
│   ├── SignOutComponent.tsx
│   └── index.ts
├── types/
│   └── index.ts
└── constants/
    ├── theme.ts
    └── index.ts
```

## Key Features

1. **TypeScript Support**: Full TypeScript implementation with proper interfaces
2. **Authentication Flow**: Complete login/logout cycle
3. **Responsive Design**: Works on different screen sizes
4. **Modern UI**: Clean, modern interface with proper spacing and colors
5. **Error Handling**: Proper error states and user feedback
6. **Loading States**: Loading indicators for better UX

## Usage

The app starts with a login screen. Use any non-empty username and password to log in. After authentication, the main dashboard is displayed with sample data and the ability to sign out.

## Dependencies

- React Native
- TypeScript
- react-native-safe-area-context

## Running the App

```bash
# Install dependencies
npm install

# Run on iOS
npm run ios

# Run on Android
npm run android

# Start Metro bundler
npm start
```