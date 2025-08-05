TypeSpeed Pro - CS/Math Edition

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

Project Structure

src/
├── components/
│   ├── LevelSelector.jsx      # Level selection interface
│   ├── TypingTest.jsx         # Main typing component
│   ├── OnScreenKeyboard.jsx   # 3D keyboard with highlighting
│   └── StarProgress.jsx       # Progress tracking
├── data/
│   └── content.js             # Typing content by difficulty
├── utils/
│   ├── starCalculator.js      # Performance evaluation
│   └── progressTracker.js     # Progress persistence
└── styles/                    # Component-specific CSS

Progression System

| Level | Required Stars | Content Focus | |-------|---------------|---------------| | Easy | 3/7 | Basic programming concepts | | Intermediate | 4/7 | OOP, algorithms, data structures | | Advanced | 4/7 | ML, distributed systems, cryptography | | Expert | 4/7 | Blockchain, quantum computing | | Master | 4/7 | Category theory, formal verification | | Grandmaster | 4/7 | Advanced research topics |

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
