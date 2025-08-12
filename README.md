# Auth Web - Frontend Application

React.js frontend application for user authentication with modern UI design.

## Features

- User registration form with validation
- User login form with validation
- Protected home page showing user details
- Responsive design that works on all devices
- Modern UI with clean styling
- Client-side form validation
- Automatic redirection after authentication
- Logout functionality

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Running auth-api backend server

## Installation

1. Install dependencies:
```bash
npm install
```

2. Ensure the backend API is running on `http://localhost:5000`

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
Ready for deployment with optimized performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Usage

### Registration Flow
1. Navigate to `http://localhost:3000`
2. Click "Register" link
3. Fill in your name, email, and password
4. Click "Sign up"
5. You'll be redirected to login page

### Login Flow
1. Enter your registered email and password
2. Click "Login"
3. You'll be redirected to the home page

### Home Page
- Displays welcome message with your name
- Shows your registered email
- Click "Logout" to return to login

## Form Validation

The application includes client-side validation:
- **Required Fields**: All fields must be filled
- **Visual Feedback**: Empty fields are highlighted in red
- **Error Messages**: Clear error text appears below invalid fields
- **Real-time Validation**: Errors are checked when you try to submit

## Project Structure

```
auth-web/
├── public/
│   ├── index.html       # Main HTML template
│   └── ...             # Static assets
├── src/
│   ├── pages/
│   │   ├── Login.js     # Login page component
│   │   ├── Register.js  # Registration page component
│   │   ├── Home.js      # Home page component
│   │   └── AuthStyles.css # Shared styling
│   ├── api.js          # Axios configuration
│   ├── App.js          # Main app component
│   ├── index.js        # React entry point
│   └── ...
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Dependencies

- **react**: UI library
- **react-dom**: DOM rendering
- **react-router-dom**: Client-side routing
- **axios**: HTTP client for API requests
- **react-scripts**: Build tools and development server

## API Configuration

The app is configured to connect to the backend API at `http://localhost:5000`.

If you need to change the API URL, update `src/api.js`:
```javascript
export default axios.create({
  baseURL: "http://your-api-url:port/api"
});
```

## Styling

The application uses custom CSS with:
- Modern card-based layout
- Responsive design for mobile and desktop
- Clean color scheme with blue accents
- Smooth transitions and hover effects
- Form validation styling

### Color Palette
- Background: Light blue gradient
- Cards: White with subtle shadows
- Primary: Blue (#3b82f6)
- Text: Dark gray (#1f2937)
- Errors: Red (#ef4444)

## Browser Compatibility

Supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

To deploy the application:

1. Build the production version:
```bash
npm run build
```

2. The `build` folder contains the static files ready for deployment

3. Deploy to any static hosting service (Netlify, Vercel, etc.)

## Troubleshooting

### Common Issues

**"Network Error" when logging in/registering:**
- Ensure the backend API is running on `http://localhost:5000`
- Check that CORS is enabled in the backend

**Page not loading:**
- Clear browser cache
- Check console for JavaScript errors
- Ensure all dependencies are installed

**Styling issues:**
- Hard refresh the page (Ctrl+F5)
- Check that CSS files are loading properly

### Development Tips

- Use browser developer tools to debug API calls
- Check the Network tab for API request/response details
- Use React Developer Tools browser extension for component debugging