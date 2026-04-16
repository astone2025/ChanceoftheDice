document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('roll-button');
    const cubes = [
        document.getElementById('die1'),
        document.getElementById('die2'),
        document.getElementById('die3')
    ];

    if (rollButton) {
        rollButton.addEventListener('click', () => {
            rollButton.disabled = true;
            
            const results = [];
            cubes.forEach((cube, index) => {
                const roll = Math.floor(Math.random() * 6) + 1;
                results.push(roll);
                
                // Calculate rotation
                // We add multiples of 360 to ensure multiple spins
                const spinsX = Math.floor(Math.random() * 5) + 5; // 5-10 full spins
                const spinsY = Math.floor(Math.random() * 5) + 5;
                
                let rotateX = spinsX * 360;
                let rotateY = spinsY * 360;
                
                // Adjust to show the correct face
                switch(roll) {
                    case 1: rotateX += 0;   rotateY += 0;   break;
                    case 2: rotateX += 0;   rotateY += 180; break;
                    case 3: rotateX += 0;   rotateY += -90; break;
                    case 4: rotateX += 0;   rotateY += 90;  break;
                    case 5: rotateX += -90; rotateY += 0;   break;
                    case 6: rotateX += 90;  rotateY += 0;   break;
                }
                
                cube.style.transform = `translateZ(-40px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            // Wait for animation (1.5s in CSS)
            setTimeout(() => {
                const combo = results.sort((a, b) => b - a).join('');
                window.location.href = `poem.html#stanza-${combo}`;
                rollButton.disabled = false;
            }, 1600);
        });
    }
});
