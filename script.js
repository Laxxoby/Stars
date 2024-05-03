const generateSpaceStars = (sizeStar, selector,  totalStars, duration, sparkling, reddish) => {
    const points = [];
    for (let i = 0; i < totalStars; i++) {
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);

        /* if (!sparkling) {
            sparkling = 1 + Math.floor(Math.random() * 13);
            points.push(`${x}vw ${y}vh ${sparkling}px 1px white`)
        } */
        if (sparkling){
            points.push(`${x}vw ${y}vh ${sparkling}px 1px white, ${x}vw ${y + 100}vh ${sparkling}px 1px white`)
        }
        
        if (reddish) {
            reddish = 5 + Math.floor(Math.random() * 13);
            points.push(`${x}vw ${y}vh ${reddish}px 1px red, ${x}vw ${y + 100}vh ${reddish}px 1px red`)
        }
        points.push(`${x}vw ${y}vh 0 white, ${x}vw ${y + 100}vh 0 white`);
    }

    const container = document.querySelector(selector);
    container.style.setProperty("--point-stars", points.join(","));
    container.style.setProperty("--size", sizeStar);
    container.style.setProperty("--duration", duration);

}

let brillo = 1;
generateSpaceStars("1px", ".space-1", 200, "20s", brillo, true);
generateSpaceStars("2px", ".space-2", 30, "10s", brillo);
generateSpaceStars("3px", ".space-3", 10, "5s", brillo);