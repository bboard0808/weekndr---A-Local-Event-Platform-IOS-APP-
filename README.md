## Changelog

### Version 1.2.0 - March 18 2024
Login Screen (LoginScreen.js)
- Refactored button animations for a smoother transition:
    "Create Account" and "Sign In" now fade out when clicked.
    "Sign in with Phone Number" and "Sign in with Apple" fade in smoothly.

- Added "Return to Create Account" button:
    Clicking it reverses the animation and brings back the original options.

- Implemented vector icons for buttons:
    Integrated react-native-vector-icons for cleaner UI.

Create Account Screen (CreateAccountScreen.js)
- Updated placeholder text for a friendlier user experience.

- Fixed input alignment & spacing:
    Inputs are now slightly raised while keeping the "Sign Up" button in place.
    Reduced margin between fields for better aesthetics.

- Implemented a password show/hide toggle:
    "Show" / "Hide" button appears inside the password input field.
    Uses useState to toggle visibility.

- Refined styling:
    Increased input box padding for better text visibility.
    Adjusted text alignment and color.

GitHub & Documentation Updates
- Improved README.md:
    Added structured summaries for UI/UX changes.
    Included explanations for button animations and authentication logic.
Pushed updates with detailed commit messages.

### Version 1.1.0 - March 16 2025
- Integrated phone authentication
- Fixed navigation bugs

### Version 1.0.0 - March 15 2025
- Initial release with Login & Splash Screen
