export const createTestLevel = (id, name, difficulty, description, color, unlocked = false) => ({
    id,
    name,
    difficulty,
    description,
    color,
    unlocked
});

export const createTypingStats = (wpm = 0, accuracy = 100, correctChars = 0, totalChars = 0, timeElapsed = 0) => ({
    wpm,
    accuracy,
    correctChars,
    totalChars,
    timeElapsed
});

export const createTestResult = (level, completed, stats) => ({
    level,
    completed,
    ...stats
});