export const calculateStars = (wpm, accuracy, timeElapsed, targetLength) => {
    // Base star calculation on accuracy and WPM
    let stars = 0;

    // Accuracy thresholds
    if (accuracy >= 100) {
        stars = 7;
    } else if (accuracy >= 95) {
        stars = 6;
    } else if (accuracy >= 90) {
        stars = 5;
    } else if (accuracy >= 85) {
        stars = 4;
    } else if (accuracy >= 80) {
        stars = 3;
    } else if (accuracy >= 70) {
        stars = 2;
    } else {
        stars = 1;
    }

    // WPM bonus/penalty
    const expectedWPM = getExpectedWPM(targetLength);

    if (wpm >= expectedWPM * 1.5 && accuracy >= 95) {
        stars = Math.min(7, stars + 1);
    } else if (wpm < expectedWPM * 0.5) {
        stars = Math.max(1, stars - 1);
    }

    // Time bonus for quick completion with high accuracy
    const expectedTime = targetLength / (expectedWPM * 5); // rough estimate
    if (timeElapsed < expectedTime * 0.8 && accuracy >= 90) {
        stars = Math.min(7, stars + 1);
    }

    return Math.max(1, Math.min(7, stars));
};

export const getExpectedWPM = (textLength) => {
    // Expected WPM based on text complexity
    if (textLength < 50) return 30;
    if (textLength < 100) return 35;
    if (textLength < 150) return 40;
    if (textLength < 200) return 45;
    return 50;
};

export const getStarDescription = (stars) => {
    const descriptions = {
        7: "Perfect! Outstanding performance! 🌟",
        6: "Excellent! Nearly perfect typing! ⭐",
        5: "Great job! Very good accuracy! ⭐",
        4: "Good work! Solid performance! ⭐",
        3: "Fair effort! Keep practicing! ⭐",
        2: "Needs improvement. Focus on accuracy! ⭐",
        1: "Keep trying! Practice makes perfect! ⭐"
    };

    return descriptions[stars] || descriptions[1];
};

export const canUnlockNextLevel = (levelId, stars, challengesCompleted) => {
    const requiredStars = levelId === 'easy' ? 3 : 4;
    const requiredChallenges = 10;

    return stars >= requiredStars && challengesCompleted >= requiredChallenges;
};