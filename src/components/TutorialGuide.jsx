import React, { useState } from 'react';

const TutorialGuide = ({ isVisible, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const tutorialSteps = [
        {
            title: "Welcome to TypeSpeed Pro! 🎮",
            content: "Master typing with Computer Science content designed for University of Limpopo students.",
            image: "🎯",
            tips: [
                "Practice daily for best results",
                "Focus on accuracy over speed initially",
                "Use all 10 fingers for optimal performance"
            ]
        },
        {
            title: "Proper Hand Positioning 🤲",
            content: "Place your fingers on the home row keys for optimal typing efficiency.",
            image: "⌨️",
            tips: [
                "Left hand: A, S, D, F (index finger on F)",
                "Right hand: J, K, L, ; (index finger on J)",
                "Thumbs rest on the spacebar",
                "Keep wrists straight and relaxed"
            ]
        },
        {
            title: "Finger Assignment Guide 🎨",
            content: "Each finger is responsible for specific keys. Follow the color coding!",
            image: "🌈",
            tips: [
                "🔴 Pinkies: Q, A, Z (left) | P, ;, / (right)",
                "🟡 Ring fingers: W, S, X (left) | O, L, . (right)",
                "🟢 Middle fingers: E, D, C (left) | I, K, , (right)",
                "🔵 Index fingers: R, T, F, G, V, B (left) | Y, U, H, J, N, M (right)"
            ]
        },
        {
            title: "Star Rating System ⭐",
            content: "Earn stars based on your performance to unlock new levels!",
            image: "🏆",
            tips: [
                "7⭐: Perfect accuracy (100%) + High WPM",
                "4-6⭐: Good accuracy (85-99%) + Decent WPM",
                "1-3⭐: Needs improvement (<85% accuracy)",
                "Complete 10 challenges per level to progress"
            ]
        },
        {
            title: "Pro Typing Tips 💡",
            content: "Advanced techniques to boost your typing speed and accuracy.",
            image: "🚀",
            tips: [
                "Look at the screen, not the keyboard",
                "Maintain steady rhythm, avoid bursts",
                "Use the 3D keyboard for visual feedback",
                "Take breaks to avoid fatigue",
                "Practice difficult letter combinations"
            ]
        }
    ];

    const nextStep = () => {
        if (currentStep < tutorialSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const closeTutorial = () => {
        setCurrentStep(0);
        onClose();
    };

    if (!isVisible) return null;

    const step = tutorialSteps[currentStep];

    return (
        <div className="tutorial-overlay">
            <div className="tutorial-content">
                <div className="tutorial-header">
                    <h2 className="tutorial-title">{step.title}</h2>
                    <button className="tutorial-close" onClick={closeTutorial}>×</button>
                </div>

                <div className="tutorial-body">
                    <div className="tutorial-image">
                        <span className="tutorial-emoji">{step.image}</span>
                    </div>

                    <p className="tutorial-description">{step.content}</p>

                    <div className="tutorial-tips">
                        {step.tips.map((tip, index) => (
                            <div key={index} className="tutorial-tip">
                                <span className="tip-bullet">•</span>
                                <span className="tip-text">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tutorial-footer">
                    <div className="tutorial-progress">
                        {tutorialSteps.map((_, index) => (
                            <div
                                key={index}
                                className={`progress-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                            />
                        ))}
                    </div>

                    <div className="tutorial-buttons">
                        <button
                            className="tutorial-btn secondary"
                            onClick={prevStep}
                            disabled={currentStep === 0}
                        >
                            Previous
                        </button>

                        {currentStep === tutorialSteps.length - 1 ? (
                            <button className="tutorial-btn primary" onClick={closeTutorial}>
                                Start Typing! 🚀
                            </button>
                        ) : (
                            <button className="tutorial-btn primary" onClick={nextStep}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialGuide;