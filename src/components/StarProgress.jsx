import React from 'react';

const StarProgress = ({ currentStars, totalStars, challengesCompleted, totalChallenges, level }) => {
    const getStarClass = (starIndex) => {
        if (starIndex < currentStars) {
            return 'star filled';
        }
        return 'star empty';
    };

    const getRequiredStars = (levelId) => {
        if (levelId === 'easy') return 3;
        return 4;
    };

    const requiredStars = getRequiredStars(level);
    const canProgress = currentStars >= requiredStars && challengesCompleted >= totalChallenges;

    return (
        <div className="star-progress-container">
            <div className="progress-header">
                <h3 className="progress-title">Level Progress</h3>
                <div className="challenge-counter">
                    {challengesCompleted}/{totalChallenges} Challenges
                </div>
            </div>

            <div className="stars-display">
                {[...Array(7)].map((_, index) => (
                    <div key={index} className={getStarClass(index)}>
                        <span className="star-icon">⭐</span>
                        <div className="star-glow"></div>
                    </div>
                ))}
            </div>

            <div className="progress-info">
                <div className="current-progress">
                    <span className="stars-earned">{currentStars}/7 Stars</span>
                    <span className="stars-required">
                        (Need {requiredStars}⭐ to unlock next level)
                    </span>
                </div>

                <div className="progress-bar-container">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${(challengesCompleted / totalChallenges) * 100}%` }}
                        />
                    </div>
                    <span className="progress-percentage">
                        {Math.round((challengesCompleted / totalChallenges) * 100)}%
                    </span>
                </div>
            </div>

            {canProgress && (
                <div className="unlock-notification">
                    <div className="unlock-icon">🎉</div>
                    <span className="unlock-text">Next level unlocked!</span>
                </div>
            )}

            <div className="star-legend">
                <div className="legend-item">
                    <span className="legend-stars">7⭐</span>
                    <span className="legend-desc">Perfect (100% accuracy + High WPM)</span>
                </div>
                <div className="legend-item">
                    <span className="legend-stars">4-6⭐</span>
                    <span className="legend-desc">Great (85-99% accuracy + Good WPM)</span>
                </div>
                <div className="legend-item">
                    <span className="legend-stars">1-3⭐</span>
                    <span className="legend-desc">Needs Practice (&lt;85% accuracy)</span>
                </div>
            </div>
        </div>
    );
};

export default StarProgress;