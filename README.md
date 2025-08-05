# 🎮 TypeSpeed Pro - CS/Math Edition

<div align="center">

![TypeSpeed Pro Logo](https://img.shields.io/badge/TypeSpeed-Pro-8B5CF6?style=for-the-badge&logo=keyboard&logoColor=white)

**Master Typing for Computer Science & Mathematics Students**

*University of Limpopo Edition*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

</div>

---

## 🌟 Overview

TypeSpeed Pro is an immersive, gamified typing trainer specifically designed for Computer Science and Mathematics students at the University of Limpopo. Experience the thrill of mastering technical vocabulary while enjoying stunning visual effects, interactive 3D elements, and progressive skill development.

### ✨ Key Features

🎯 **Six Progressive Difficulty Levels**
- Easy → Intermediate → Advanced → Expert → Master → Grandmaster
- Each level requires mastery before progression (3-7 stars)

🎮 **Gamified Learning Experience**
- Interactive 3D on-screen keyboard with real-time key highlighting
- Particle effects and animations for every keystroke
- Star-based progression system with achievement tracking

📚 **CS/Math Focused Content**
- Programming concepts and algorithms
- Data structures and complexity theory
- Advanced topics like quantum computing and cryptography
- Research-level content for true masters

🎨 **Stunning Visual Design**
- Black and purple smoke theme with animated gradients
- Floating particle systems and neon glow effects
- Glass-morphism UI with smooth micro-interactions

📱 **Responsive & Accessible**
- Works perfectly on desktop, tablet, and mobile
- Keyboard navigation support
- High contrast ratios for readability

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/GamteniKarabo/typespeed-pro.git

# Navigate to project directory
cd typespeed-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 🎮 How to Play

### 🌟 Star System & Progression

Each level requires completing **10 typing challenges** with specific star requirements:

| Level | Required Stars | Total Possible | Unlock Requirement |
|-------|---------------|----------------|-------------------|
| Easy | 3⭐ | 7⭐ | Always unlocked |
| Intermediate | 4⭐ | 7⭐ | Complete Easy with 3⭐ |
| Advanced | 4⭐ | 7⭐ | Complete Intermediate with 4⭐ |
| Expert | 4⭐ | 7⭐ | Complete Advanced with 4⭐ |
| Master | 4⭐ | 7⭐ | Complete Expert with 4⭐ |
| Grandmaster | 4⭐ | 7⭐ | Complete Master with 4⭐ |

### ⭐ Star Rating System

Stars are awarded based on your performance:
- **7⭐**: Perfect accuracy (100%) + High WPM
- **6⭐**: Excellent accuracy (95-99%) + Good WPM
- **5⭐**: Great accuracy (90-94%) + Average WPM
- **4⭐**: Good accuracy (85-89%) + Decent WPM
- **3⭐**: Fair accuracy (80-84%) + Basic WPM
- **2⭐**: Poor accuracy (70-79%) + Low WPM
- **1⭐**: Needs improvement (<70% accuracy)

### 🎯 Gameplay Tips

1. **Start with Easy**: Master basic programming terminology
2. **Focus on Accuracy**: Speed comes naturally with practice
3. **Use the 3D Keyboard**: Visual feedback helps muscle memory
4. **Follow Finger Placement**: Use the tutorial guides
5. **Practice Daily**: Consistency beats intensity

---

## ⌨️ 3D Keyboard Features

### Real-Time Key Highlighting
- Keys light up as you type with purple glow effects
- Visual feedback for correct and incorrect keystrokes
- Smooth animations and transitions

### Finger Placement Guide
- Color-coded finger zones for proper typing technique
- Interactive tutorial showing optimal hand positioning
- Tips for improving typing ergonomics

### Keyboard Shortcuts
- `Escape`: Return to level selection
- `Tab`: Focus typing input
- `Enter`: Restart current challenge
- `Space`: Pause/Resume (when available)

---

## 🎨 Visual Effects & Animations

### Particle Systems
- **Floating Particles**: Ambient background animation
- **Typing Particles**: Success/error feedback on keystrokes
- **Level Completion**: Celebration effects

### Interactive Elements
- **Letter Pop-ups**: Scale and glow animations
- **Progress Bars**: Smooth filling animations
- **Card Hover Effects**: 3D transforms and glows
- **Button Interactions**: Ripple and scale effects

### Theme Colors
```css
Primary Purple: #8B5CF6
Secondary Purple: #A855F7
Accent Purple: #9333EA
Dark Purple: #7C3AED
Deep Purple: #6D28D9
Royal Purple: #5B21B6
Success Green: #22C55E
Error Red: #EF4444
Warning Yellow: #F59E0B
```

---

## 📚 Educational Content

### Level Progression

**🟢 Easy (Level 1)**
- Basic programming concepts
- Variable declarations and data types
- Simple function definitions
- *Example*: "Variables store data values in computer memory for later use in programs."

**🟡 Intermediate (Level 2)**
- Object-oriented programming
- Algorithms and data structures
- Database concepts
- *Example*: "Hash tables provide constant-time average case lookup using key-value pair associations."

**🟠 Advanced (Level 3)**
- Machine learning algorithms
- Distributed computing systems
- Cryptographic concepts
- *Example*: "Neural networks consist of interconnected nodes that process information through weighted connections."

**🔴 Expert (Level 4)**
- Blockchain technology
- Quantum computing principles
- Advanced system architectures
- *Example*: "Microservices architecture decomposes monolithic applications into independently deployable services."

**🟣 Master (Level 5)**
- Category theory foundations
- Formal verification methods
- Advanced compiler techniques
- *Example*: "Type theory foundations encompass dependent types, linear types, and effect systems."

**⚫ Grandmaster (Level 6)**
- Homomorphic encryption
- Topological quantum computing
- Zero-knowledge proof systems
- *Example*: "Quantum error correction codes protect quantum information through stabilizer formalism."

---

## 🛠️ Technical Architecture

### Project Structure
```
src/
├── components/
│   ├── LevelSelector.jsx      # Level selection interface
│   ├── TypingTest.jsx         # Main typing test component
│   ├── OnScreenKeyboard.jsx   # 3D keyboard component
│   ├── TutorialGuide.jsx      # Finger placement tutorial
│   └── StarProgress.jsx       # Star rating system
├── data/
│   └── content.js             # Typing content by difficulty
├── utils/
│   ├── starCalculator.js      # Star rating logic
│   └── progressTracker.js     # Progress persistence
├── styles/
│   ├── App.css                
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
├── index.css                  # Fundamental styles and animations that apply globally (base styles)
├── components.css             # Reusable UI components like buttons, cards, etc.
├── typing-test.css            # Styles specific to the typing test functionality
└──modals.css                  # Styles for overlays, modals, and popups
```

### Key Technologies
- **React 18**: Modern hooks and concurrent features
- **CSS3**: Advanced animations and transforms
- **Local Storage**: Progress persistence
- **Vite**: Fast development and building
- **ESLint**: Code quality and consistency

---

## 🎯 Performance Metrics

### Typing Statistics Tracked
- **Words Per Minute (WPM)**: Real-time calculation
- **Accuracy Percentage**: Character-level precision
- **Error Rate**: Mistakes per minute
- **Consistency**: WPM variance over time
- **Progress**: Stars earned per level

### Performance Optimizations
- Component memoization for smooth animations
- Efficient re-rendering with React hooks
- CSS transforms for hardware acceleration
- Debounced input handling for responsiveness

---

## 🤝 Contributing

We welcome contributions from the University of Limpopo community and beyond!

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎓 University of Limpopo

<div align="center">

**Proudly developed for Computer Science & Mathematics students**

*Empowering the next generation of tech leaders in South Africa*

---

### 🏆 Achievements System

Unlock special badges as you progress:
- 🥉 **Bronze Typist**: Complete Easy level
- 🥈 **Silver Coder**: Complete Intermediate level  
- 🥇 **Gold Programmer**: Complete Advanced level
- 💎 **Diamond Expert**: Complete Expert level
- 👑 **Master Typist**: Complete Master level
- 🌟 **Grandmaster Legend**: Complete Grandmaster level

---

*"The keyboard is mightier than the pen in the digital age"*

**Happy Typing! 🚀**

</div>

---

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/GamteniKarabo/typespeed-pro/issues)
- **Discussions**: [GitHub Discussions](https://github.com/GamteniKarabo/typespeed-pro/discussions)
- **Email**: [gamtenikarabo@gmail.com](mailto:gamtenikarabo)
- **University**: University of Limpopo CS Department

---

<div align="center">

**Made with ❤️ for the University of Limpopo Community**

![University Badge](https://img.shields.io/badge/University-of%20Limpopo-green?style=for-the-badge)

</div>#   T y p e r S p e e d  
 