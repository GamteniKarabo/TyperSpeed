import React, { useState, useEffect } from 'react';
import LevelSelector from './components/LevelSelector';
import TypingTest from './components/TypingTest';
import TutorialGuide from './components/TutorialGuide';
import { createTestLevel } from './types';
import { levelDescriptions } from './data/content';
import { getProgress, updateLevelUnlocks } from './utils/progressTracker';

function App() {
    const [currentView, setCurrentView] = useState('levels');
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [levels, setLevels] = useState([]);
    const [showTutorial, setShowTutorial] = useState(false);
    const [progress, setProgress] = useState({});

    useEffect(() => {
        const savedProgress = getProgress();
        setProgress(savedProgress);

        const initialLevels = [
            createTestLevel('easy', 'Easy', 1, levelDescriptions.easy, '#8B5CF6', savedProgress.easy?.unlocked || true),
            createTestLevel('mid', 'Intermediate', 2, levelDescriptions.mid, '#A855F7', savedProgress.mid?.unlocked || false),
            createTestLevel('hard', 'Advanced', 3, levelDescriptions.hard, '#9333EA', savedProgress.hard?.unlocked || false),
            createTestLevel('expert', 'Expert', 4, levelDescriptions.expert, '#7C3AED', savedProgress.expert?.unlocked || false),
            createTestLevel('master', 'Master', 5, levelDescriptions.master, '#6D28D9', savedProgress.master?.unlocked || false),
            createTestLevel('grandmaster', 'Grandmaster', 6, levelDescriptions.grandmaster, '#5B21B6', savedProgress.grandmaster?.unlocked || false)
        ];

        setLevels(initialLevels);

        // Show tutorial for first-time users
        const hasSeenTutorial = localStorage.getItem('typespeed-tutorial-seen');
        if (!hasSeenTutorial) {
            setShowTutorial(true);
        }
    }, []);

    const handleSelectLevel = (level) => {
        setSelectedLevel(level);
        setCurrentView('test');
    };

    const handleTestComplete = (result) => {
        // Progress is now handled in TypingTest component
        const updatedProgress = getProgress();
        setProgress(updatedProgress);

        // Update level unlocks
        setLevels(prevLevels =>
            prevLevels.map(level => ({
                ...level,
                unlocked: updatedProgress[level.id]?.unlocked || level.id === 'easy'
            }))
        );

        setTimeout(() => {
            setCurrentView('levels');
            setSelectedLevel(null);
        }, 3000);
    };

    const handleBackToLevels = () => {
        setCurrentView('levels');
        setSelectedLevel(null);
    };

    const handleCloseTutorial = () => {
        setShowTutorial(false);
        localStorage.setItem('typespeed-tutorial-seen', 'true');
    };

    const handleShowTutorial = () => {
        setShowTutorial(true);
    };

    // Creator signature (hidden)
    const creatorSignature = "Created by Gamteni Karabo";

    return (
        <div className="app" title={creatorSignature}>
            {currentView === 'levels' ? (
                <LevelSelector
                    levels={levels}
                    onSelectLevel={handleSelectLevel}
                    progress={progress}
                    onShowTutorial={handleShowTutorial}
                />
            ) : (
                <TypingTest
                    level={selectedLevel}
                    onComplete={handleTestComplete}
                    onBack={handleBackToLevels}
                />
            )}

            <TutorialGuide
                isVisible={showTutorial}
                onClose={handleCloseTutorial}
            />

            {/* Hidden creator signature */}
            <div style={{ display: 'none' }} data-creator="Gamteni Karabo">
                {creatorSignature}
            </div>
        </div>
    );
}

export default App;