# TypeSpeed Pro - CS/Math Edition

A typing trainer application designed for Computer Science and Mathematics students, featuring progressive difficulty levels and technical vocabulary.
Features

    Progressive Learning: 6 difficulty levels (Easy → Grandmaster)
    Technical Content: CS/Math terminology and concepts
    Visual Feedback: Real-time typing visualization with 3D keyboard
    Progress Tracking: Star-based progression system with localStorage persistence
    Responsive Design: Works across desktop, tablet, and mobile devices

Tech Stack

    React 18.3.1
    Vite (build tool)
    CSS3 with animations
    JavaScript ES6+
    Local Storage for persistence

Quick Start

# Clone repository
git clone https://github.com/GamteniKarabo/typespeed-pro.git

# Install dependencies
cd typespeed-pro
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Project Structure
```text
typespeed-pro/
├── src/
│   ├── assets/               # Static assets (images, fonts)
│   ├── components/           # Reusable UI components
│   │   ├── core/            # Fundamental components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── Modal/
│   │   ├── features/        # Feature components
│   │   │   ├── LevelSelector/
│   │   │   ├── TypingTest/
│   │   │   ├── Keyboard3D/
│   │   │   └── ProgressTracker/
│   │   └── layout/          # Layout components
│   │       ├── Header/
│   │       └── Footer/
│   ├── contexts/            # React contexts
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Route-based pages
│   ├── services/            # API/services
│   ├── styles/              # Global styles
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── public/                  # Static public files
├── tests/                   # Test files
└── config/                  # Build/config files
```

Stars awarded based on accuracy (70-100%) and words per minute.
Performance Metrics

    WPM: Real-time words per minute calculation
    Accuracy: Character-level precision tracking
    Error Rate: Mistakes per minute
    Progress: Completion status across levels

Contributing

    Fork the repository
    Create feature branch: git checkout -b feature/feature-name
    Commit changes: git commit -m 'Add feature'
    Push to branch: git push origin feature/feature-name
    Open Pull Request

Development Guidelines

    Follow existing code style
    Ensure responsive design compatibility
    Test across different screen sizes
    Update documentation for new features

License

MIT License - see LICENSE file for details.

Contact: gamtenikarabo@gmail.com
