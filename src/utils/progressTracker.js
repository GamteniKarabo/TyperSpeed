const STORAGE_KEY = 'typespeed-progress';

export const saveProgress = (levelId, stars, challengeData) => {
    try {
        const existingProgress = getProgress();

        if (!existingProgress[levelId]) {
            existingProgress[levelId] = {
                totalStars: 0,
                challengesCompleted: 0,
                challenges: [],
                bestWPM: 0,
                bestAccuracy: 0,
                unlocked: levelId === 'easy'
            };
        }

        // Add new challenge
        existingProgress[levelId].challenges.push({
            ...challengeData,
            stars,
            timestamp: Date.now()
        });

        // Update totals
        existingProgress[levelId].challengesCompleted = existingProgress[levelId].challenges.length;
        existingProgress[levelId].totalStars = Math.max(existingProgress[levelId].totalStars, stars);
        existingProgress[levelId].bestWPM = Math.max(existingProgress[levelId].bestWPM, challengeData.wpm);
        existingProgress[levelId].bestAccuracy = Math.max(existingProgress[levelId].bestAccuracy, challengeData.accuracy);

        // Check if next level should be unlocked
        updateLevelUnlocks(existingProgress);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(existingProgress));
        return existingProgress;
    } catch (error) {
        console.error('Error saving progress:', error);
        return getProgress();
    }
};

export const getProgress = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error loading progress:', error);
    }

    // Default progress structure
    return {
        easy: { totalStars: 0, challengesCompleted: 0, challenges: [], bestWPM: 0, bestAccuracy: 0, unlocked: true },
        mid: { totalStars: 0, challengesCompleted: 0, challenges: [], bestWPM: 0, bestAccuracy: 0, unlocked: false },
        hard: { totalStars: 0, challengesCompleted: 0, challenges: [], bestWPM: 0, bestAccuracy: 0, unlocked: false },
        expert: { totalStars: 0, challengesCompleted: 0, challenges: [], bestWPM: 0, bestAccuracy: 0, unlocked: false },
        master: { totalStars: 0, challengesCompleted: 0, challenges: [], bestWPM: 0, bestAccuracy: 0, unlocked: false },
        grandmaster: { totalStars: 0, challengesCompleted: 0, challenges: [], bestWPM: 0, bestAccuracy: 0, unlocked: false }
    };
};

export const updateLevelUnlocks = (progress) => {
    const levels = ['easy', 'mid', 'hard', 'expert', 'master', 'grandmaster'];

    for (let i = 0; i < levels.length - 1; i++) {
        const currentLevel = levels[i];
        const nextLevel = levels[i + 1];

        const requiredStars = currentLevel === 'easy' ? 3 : 4;
        const requiredChallenges = 10;

        if (progress[currentLevel].totalStars >= requiredStars &&
            progress[currentLevel].challengesCompleted >= requiredChallenges) {
            progress[nextLevel].unlocked = true;
        }
    }
};

export const getLevelProgress = (levelId) => {
    const progress = getProgress();
    return progress[levelId] || {
        totalStars: 0,
        challengesCompleted: 0,
        challenges: [],
        bestWPM: 0,
        bestAccuracy: 0,
        unlocked: levelId === 'easy'
    };
};

export const resetProgress = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (error) {
        console.error('Error resetting progress:', error);
        return false;
    }
};

export const exportProgress = () => {
    const progress = getProgress();
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'typespeed-progress.json';
    link.click();

    URL.revokeObjectURL(url);
};