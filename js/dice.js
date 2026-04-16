document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('roll-button');
    const die1 = document.getElementById('die1');
    const die2 = document.getElementById('die2');
    const die3 = document.getElementById('die3');

    if (rollButton) {
        rollButton.addEventListener('click', () => {
            // Add a simple "rolling" animation effect
            let rollsCount = 0;
            const maxRolls = 10;
            
            const rollInterval = setInterval(() => {
                const r1 = Math.floor(Math.random() * 6) + 1;
                const r2 = Math.floor(Math.random() * 6) + 1;
                const r3 = Math.floor(Math.random() * 6) + 1;
                
                die1.textContent = r1;
                die2.textContent = r2;
                die3.textContent = r3;
                
                rollsCount++;
                if (rollsCount >= maxRolls) {
                    clearInterval(rollInterval);
                    finalizeRoll(r1, r2, r3);
                }
            }, 50);
        });
    }

    function finalizeRoll(r1, r2, r3) {
        // Sort descending for combination string (e.g. 665)
        const rolls = [r1, r2, r3].sort((a, b) => b - a);
        const combo = rolls.join('');

        // Brief pause for the user to see the result
        setTimeout(() => {
            window.location.href = `poem.html#stanza-${combo}`;
        }, 600);
    }
});
