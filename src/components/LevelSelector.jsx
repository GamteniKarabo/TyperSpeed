import React from 'react';

const LevelSelector = ({ levels, onSelectLevel, progress, onShowTutorial }) => {
    return (
        <div className="level-selector">
            <div className="floating-particles">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className={`particle particle-${i % 5}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${10 + Math.random() * 20}s`
                        }}
                    />
                ))}
            </div>

            <div className="header-section">
                <h1 className="main-title">
                    <span className="gradient-text">TypeSpeed</span>
                    <span className="highlight-text">Pro</span>
                    <div className="title-glow"></div>
                </h1>
                <p className="subtitle">Master typing for Computer Science & Mathematics</p>
                <div className="university-badge">
                    <span>University of Limpopo</span>
                    <div className="badge-glow"></div>
                </div>

                <button className="tutorial-button" onClick={onShowTutorial}>
                    <span>📚</span> Tutorial Guide
                </button>
            </div>

            <div className="levels-grid">
                {levels.map((level, index) => {
                    const levelProgress = progress[level.id] || { totalStars: 0, challengesCompleted: 0 };
                    const requiredStars = level.id === 'easy' ? 3 : 4;
                    const canProgress = levelProgress.totalStars >= requiredStars && levelProgress.challengesCompleted >= 10;

                    return (
                        <div
                            key={level.id}
                            className={`level-card ${!level.unlocked ? 'locked' : ''} ${canProgress ? 'completed' : ''}`}
                            onClick={() => level.unlocked && onSelectLevel(level)}
                        >
                            <div className="card-glow"></div>
                            <div className="level-number">{index + 1}</div>
                            <div className="level-info">
                                <h3 className="level-name">{level.name}</h3>
                                <p className="level-description">{level.description}</p>

                                <div className="level-progress">
                                    <div className="progress-stars">
                                        {[...Array(7)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`mini-star ${i < levelProgress.totalStars ? 'filled' : ''}`}
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                    <div className="progress-text">
                                        {levelProgress.challengesCompleted}/10 challenges
                                    </div>
                                </div>

                                <div className="level-stats">
                                    <div className="difficulty-stars">
                                        {[...Array(6)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`star ${i < level.difficulty ? 'filled' : ''}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {!level.unlocked && (
                                <div className="lock-overlay">
                                    <div className="lock-icon">🔒</div>
                                    <div className="lock-text">
                                        Complete previous level with {level.id === 'mid' ? '3' : '4'}⭐
                                    </div>
                                </div>
                            )}
                            {canProgress && (
                                <div className="completion-badge">
                                    <div className="check-icon">✓</div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LevelSelector;