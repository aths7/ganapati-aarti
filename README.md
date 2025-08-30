# Ganapati Aarti 🕉️

# Download - [Link](https://drive.google.com/file/d/1KZkqWivaJWqA7YJRw4dchvMGpBkrwuTo/view?usp=sharing)

A beautiful React Native mobile app for displaying Hindu devotional songs (aartis) dedicated to Lord Ganesha. The app features elegant typography for Devanagari script and an intuitive navigation system.

## Features

- 📱 Cross-platform mobile app (iOS & Android)
- 🕉️ Traditional Ganapati aartis in authentic Devanagari script
- 🎨 Beautiful UI with gradient backgrounds and custom typography
- 📖 Easy navigation between different aartis
- 🔄 Swipe gestures and dot indicators for seamless browsing
- 💫 Smooth animations and haptic feedback

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **NativeWind** - Tailwind CSS for React Native
- **Expo Router** - File-based navigation

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd ganapati-aarti
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npx expo start
   ```

4. Run on your preferred platform:
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Physical Device**: Scan QR code with Expo Go app

## Project Structure

```
ganapati-aarti/
├── app/                    # App screens and navigation
│   ├── (tabs)/
│   │   ├── _layout.tsx    # Tab navigation layout
│   │   └── index.tsx      # Main aarti display screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
├── data/                 # Aarti content and data
│   └── aartiData.js      # Collection of aartis
├── types/               # TypeScript type definitions
└── globals.css          # Global styles
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

_Built with devotion for the spiritual community_ 🙏
