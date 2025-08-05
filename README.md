# 🎮 TyperSpeed Pro - CS/Math Edition

<div align="center">

![TyperSpeed Pro Logo](https://img.shields.io/badge/TyperSpeed-Pro-8B5CF6?style=for-the-badge&logo=keyboard&logoColor=white)

**A gamified typing trainer for Computer Science & Mathematics students**

*University of Limpopo Edition*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

</div>

---

## ✨ Features

 **Progressive Learning**: 6 difficulty levels (Easy → Grandmaster) with CS/Math content  
 **3D Interactive Keyboard**: Real-time key highlighting and finger placement guide  
 **Star Progression System**: Earn 1-7 stars per challenge, unlock levels with requirements  
 **Gamified Experience**: Particle effects, animations, and achievement tracking  
 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile  
 **Progress Persistence**: Your achievements saved locally  

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/GamteniKarabo/TyperSpeed-pro.git

# Install dependencies
cd TyperSpeed-pro
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🎮 How It Works

### Level Progression
- **Easy**: 3⭐ required (basic programming concepts)
- **Intermediate - Grandmaster**: 4⭐ required (advanced CS topics)
- **10 challenges per level** must be completed
- **Maximum 7⭐** possible per challenge

### Star Rating
Stars awarded based on **accuracy** (70-100%) and **words per minute**:
- 7⭐: Perfect accuracy + High WPM
- 4-6⭐: Good accuracy + Decent WPM  
- 1-3⭐: Needs improvement

---

## 📁 Project Structure

```
typespeedpro/
├── src/
│   ├── components/          # React components
│   │   ├── LevelSelector.jsx
│   │   ├── TypingTest.jsx
│   │   ├── OnScreenKeyboard.jsx
│   │   ├── TutorialGuide.jsx
│   │   └── StarProgress.jsx
│   ├── data/
│   │   └── content.js       # Typing content by difficulty
│   ├── utils/
│   │   ├── starCalculator.js
│   │   └── progressTracker.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   ├── typing-test.css
│   ├── App.css
│   ├── modals.css
│   └── components.css
├── public/                  # Static files
└── package.json             # Dependencies
```

---

## 🎯 Performance Metrics

- **WPM**: Real-time words per minute calculation
- **Accuracy**: Character-level precision tracking  
- **Progress**: Star-based completion across levels
- **Challenges**: Track completed typing exercises

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/feature-name`
5. Open Pull Request

### Development Guidelines
- Follow existing code style and structure
- Ensure responsive design compatibility
- Test across different screen sizes
- Update documentation for new features

---

## 📄 License

MIT License - see LICENSE file for details.

---

<div align="center">

**Contact**: gamtenikarabo@gmail.com / +27 76 300 4531

![University Badge](https://img.shields.io/badge/University-of%20Limpopo-green?style=for-the-badge)

*Made with ❤️ for CS/Math students*

</div>
