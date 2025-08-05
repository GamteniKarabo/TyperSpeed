import React, { useState, useEffect, useRef } from 'react';
import OnScreenKeyboard from './OnScreenkeyboard';
import StarProgress from './StarProgress';
import { testContent } from '../data/content';
import { calculateStars, getStarDescription } from '../utils/starCalculator';
import { saveProgress, getLevelProgress } from '../utils/progressTracker';

const TypingTest = ({ level, onComplete, onBack }) => {
    const [currentText, setCurrentText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [stats, setStats] = useState({
        wpm: 0,
        accuracy: 100,
        correctChars: 0,
        totalChars: 0,
        timeElapsed: 0
    });
    const [isComplete, setIsComplete] = useState(false);
    const [animatingChars, setAnimatingChars] = useState(new Set());
    const [particles, setParticles] = useState([]);
    const [lastTypedChar, setLastTypedChar] = useState('');
    const [isCorrectChar, setIsCorrectChar] = useState(true);
    const [currentChallenge, setCurrentChallenge] = useState(1);
    const [levelProgress, setLevelProgress] = useState({ totalStars: 0, challengesCompleted: 0 });
    const [earnedStars, setEarnedStars] = useState(0);

    const inputRef = useRef(null);
    const intervalRef = useRef();
    const textRef = useRef(null);

    useEffect(() => {
        const texts = testContent[level.id];
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        setCurrentText(randomText);

        const progress = getLevelProgress(level.id);
        setLevelProgress(progress);
        setCurrentChallenge(progress.challengesCompleted + 1);

        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    }, [level]);

    useEffect(() => {
        if (startTime && !isComplete) {
            intervalRef.current = setInterval(() => {
                const elapsed = (Date.now() - startTime) / 1000;
                setTimeElapsed(elapsed);
                updateStats(elapsed);
            }, 100);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startTime, isComplete, userInput]);

    const updateStats = (elapsed) => {
        const correctChars = userInput.split('').filter((char, i) => char === currentText[i]).length;
        const totalChars = userInput.length;
        const wpm = elapsed > 0 ? Math.round((correctChars / 5) / (elapsed / 60)) : 0;
        const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;

        setStats({
            wpm,
            accuracy,
            correctChars,
            totalChars,
            timeElapsed: elapsed
        });
    };

    const createParticle = (x, y, isCorrect) => {
        const particle = {
            id: Date.now() + Math.random(),
            x,
            y,
            type: isCorrect ? 'success' : 'error',
            opacity: 1
        };

        setParticles(prev => [...prev, particle]);

        setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== particle.id));
        }, 1000);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;

        if (!startTime) {
            setStartTime(Date.now());
        }

        if (value.length > currentText.length) {
            return;
        }

        const newIndex = value.length - 1;

        if (newIndex >= 0 && newIndex < currentText.length) {
            const isCorrect = value[newIndex] === currentText[newIndex];
            setLastTypedChar(value[newIndex]);
            setIsCorrectChar(isCorrect);

            const charElement = textRef.current?.children[newIndex];

            if (charElement) {
                const rect = charElement.getBoundingClientRect();
                const testRect = textRef.current.getBoundingClientRect();
                createParticle(
                    rect.left - testRect.left + rect.width / 2,
                    rect.top - testRect.top + rect.height / 2,
                    isCorrect
                );
            }

            setAnimatingChars(prev => new Set([...prev, newIndex]));
            setTimeout(() => {
                setAnimatingChars(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(newIndex);
                    return newSet;
                });
            }, 300);
        }

        setUserInput(value);
        setCurrentIndex(value.length);

        if (value === currentText) {
            setIsComplete(true);

            const finalStats = { ...stats, timeElapsed };
            const stars = calculateStars(finalStats.wpm, finalStats.accuracy, finalStats.timeElapsed, currentText.length);
            setEarnedStars(stars);

            // Save progress
            const updatedProgress = saveProgress(level.id, stars, finalStats);

            setTimeout(() => {
                onComplete({
                    level: level.id,
                    completed: true,
                    ...finalStats,
                    stars
                });
            }, 1000);
        }
    };

    const getCharClass = (index) => {
        let className = 'char';

        if (index < userInput.length) {
            className += userInput[index] === currentText[index] ? ' correct' : ' incorrect';
        } else if (index === currentIndex) {
            className += ' current';
        }

        if (animatingChars.has(index)) {
            className += ' animating';
        }

        return className;
    };

    const progress = (userInput.length / currentText.length) * 100;

    return (
        <div className="typing-test">
            <div className="floating-particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`particle particle-${i % 3}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${8 + Math.random() * 12}s`
                        }}
                    />
                ))}
            </div>

            <div className="test-header">
                <button className="back-button" onClick={onBack}>
                    <span>←</span> Back to Levels
                </button>
                <div className="level-info">
                    <h2 className="level-title">{level.name}</h2>
                    <div className="level-badge">{level.description}</div>
                </div>
            </div>

            <StarProgress
                currentStars={levelProgress.totalStars}
                totalStars={7}
                challengesCompleted={levelProgress.challengesCompleted}
                totalChallenges={10}
                level={level.id}
            />

            <div className="stats-panel">
                <div className="stat-item">
                    <div className="stat-value">{stats.wpm}</div>
                    <div className="stat-label">WPM</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">{stats.accuracy}%</div>
                    <div className="stat-label">Accuracy</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">{Math.round(timeElapsed)}s</div>
                    <div className="stat-label">Time</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">#{currentChallenge}</div>
                    <div className="stat-label">Challenge</div>
                </div>
            </div>

            <div className="progress-container">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="progress-text">{Math.round(progress)}% Complete</div>
            </div>

            <div className="text-container">
                <div className="text-display" ref={textRef}>
                    {particles.map(particle => (
                        <div
                            key={particle.id}
                            className={`typing-particle ${particle.type}`}
                            style={{
                                left: particle.x,
                                top: particle.y
                            }}
                        />
                    ))}
                    {currentText.split('').map((char, index) => (
                        <span
                            key={index}
                            className={getCharClass(index)}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </div>

            <div className="input-container">
                <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    className="typing-input"
                    placeholder="Start typing..."
                    disabled={isComplete}
                    autoComplete="off"
                    spellCheck="false"
                />
            </div>

            <OnScreenKeyboard
                currentChar={currentText[currentIndex]}
                lastTypedChar={lastTypedChar}
                isCorrect={isCorrectChar}
            />

            {isComplete && (
                <div className="completion-overlay">
                    <div className="completion-content">
                        <div className="completion-title">Challenge Complete! 🎉</div>
                        <div className="stars-earned">
                            <div className="earned-stars">
                                {[...Array(7)].map((_, i) => (
                                    <span key={i} className={`completion-star ${i < earnedStars ? 'earned' : ''}`}>
                                        ⭐
                                    </span>
                                ))}
                            </div>
                            <div className="star-description">
                                {getStarDescription(earnedStars)}
                            </div>
                        </div>
                        <div className="final-stats">
                            <div className="final-stat">
                                <span className="final-stat-value">{stats.wpm}</span>
                                <span className="final-stat-label">Words Per Minute</span>
                            </div>
                            <div className="final-stat">
                                <span className="final-stat-value">{stats.accuracy}%</span>
                                <span className="final-stat-label">Accuracy</span>
                            </div>
                            <div className="final-stat">
                                <span className="final-stat-value">{Math.round(stats.timeElapsed)}s</span>
                                <span className="final-stat-label">Time Taken</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TypingTest;