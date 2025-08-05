import React, { useState, useEffect } from 'react';

const OnScreenKeyboard = ({ currentChar, lastTypedChar, isCorrect }) => {
    const [pressedKeys, setPressedKeys] = useState(new Set());
    const [glowingKey, setGlowingKey] = useState(null);

    const keyboardLayout = [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
        ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
        ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Menu', 'Ctrl']
    ];

    const fingerColors = {
        // Left hand
        'Q': '#FF6B6B', 'A': '#FF6B6B', 'Z': '#FF6B6B', '1': '#FF6B6B', '`': '#FF6B6B',
        'W': '#4ECDC4', 'S': '#4ECDC4', 'X': '#4ECDC4', '2': '#4ECDC4',
        'E': '#45B7D1', 'D': '#45B7D1', 'C': '#45B7D1', '3': '#45B7D1',
        'R': '#96CEB4', 'F': '#96CEB4', 'V': '#96CEB4', '4': '#96CEB4', '5': '#96CEB4',
        'T': '#96CEB4', 'G': '#96CEB4', 'B': '#96CEB4',
        // Right hand
        'Y': '#FFEAA7', 'H': '#FFEAA7', 'N': '#FFEAA7', '6': '#FFEAA7',
        'U': '#DDA0DD', 'J': '#DDA0DD', 'M': '#DDA0DD', '7': '#DDA0DD',
        'I': '#98D8C8', 'K': '#98D8C8', ',': '#98D8C8', '8': '#98D8C8',
        'O': '#F7DC6F', 'L': '#F7DC6F', '.': '#F7DC6F', '9': '#F7DC6F',
        'P': '#BB8FCE', ';': '#BB8FCE', '/': '#BB8FCE', '0': '#BB8FCE', '-': '#BB8FCE', '=': '#BB8FCE',
        '[': '#BB8FCE', ']': '#BB8FCE', '\\': '#BB8FCE', "'": '#BB8FCE'
    };

    useEffect(() => {
        if (lastTypedChar) {
            const key = lastTypedChar.toUpperCase();
            setGlowingKey(key);
            setPressedKeys(prev => new Set([...prev, key]));

            setTimeout(() => {
                setGlowingKey(null);
                setPressedKeys(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(key);
                    return newSet;
                });
            }, 300);
        }
    }, [lastTypedChar]);

    const getKeyClass = (key) => {
        let className = 'keyboard-key';

        if (key === 'Space') className += ' space-key';
        else if (['Backspace', 'Tab', 'Caps', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt', 'Menu'].includes(key)) {
            className += ' modifier-key';
        }

        if (pressedKeys.has(key)) {
            className += isCorrect ? ' key-correct' : ' key-incorrect';
        }

        if (glowingKey === key) {
            className += ' key-glowing';
        }

        if (currentChar && currentChar.toUpperCase() === key) {
            className += ' key-next';
        }

        return className;
    };

    const getKeyStyle = (key) => {
        const baseStyle = {};

        if (fingerColors[key]) {
            baseStyle.borderColor = fingerColors[key];
            baseStyle['--finger-color'] = fingerColors[key];
        }

        return baseStyle;
    };

    return (
        <div className="keyboard-container">
            <div className="keyboard-3d">
                {keyboardLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="keyboard-row">
                        {row.map((key, keyIndex) => (
                            <div
                                key={`${rowIndex}-${keyIndex}`}
                                className={getKeyClass(key)}
                                style={getKeyStyle(key)}
                                data-key={key}
                            >
                                <span className="key-label">
                                    {key === 'Space' ? '' : key}
                                </span>
                                <div className="key-glow"></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnScreenKeyboard;