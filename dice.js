const size = 80;
const radius = 7;

function renderRandomDie(number, element) {
    switch (number) {
        case 1:
            renderDie1(element);
            break;
        case 2:
            renderDie2(element);
            break;
        case 3:
            renderDie3(element);
            break;
        case 4:
            renderDie4(element);
            break;
        case 5:
            renderDie5(element);
            break;
        case 6:
            renderDie6(element);
            break;
        default:
            break;
    }
}

function renderDie1(element) {
    const ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(.5 * size, .5 * size, radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

function renderDie2(element) {
    const ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(.25 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.arc(.75 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

function renderDie3(element) {
    const ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(.25 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.arc(.5 * size, .5 * size, radius, 0, 2 * Math.PI, false);
    ctx.arc(.75 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

function renderDie4(element) {
    const ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(.25 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.25 * size, .75 * size);
    ctx.arc(.25 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.75 * size, .25 * size);
    ctx.arc(.75 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.75 * size, .75 * size);
    ctx.arc(.75 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

function renderDie5(element) {
    const ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(.25 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.25 * size, .75 * size);
    ctx.arc(.25 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.75 * size, .25 * size);
    ctx.arc(.75 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.75 * size, .75 * size);
    ctx.arc(.75 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.5 * size, .5 * size);
    ctx.arc(.5 * size, .5 * size, radius, 0, 2 * Math.PI, false);
    ctx.fill();
}

function renderDie6(element) {
    const ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(.25 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.25 * size, .5 * size);
    ctx.arc(.25 * size, .5 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.25 * size, .75 * size);
    ctx.arc(.25 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.75 * size, .25 * size);
    ctx.arc(.75 * size, .25 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.75 * size, .5 * size);
    ctx.arc(.75 * size, .5 * size, radius, 0, 2 * Math.PI, false);
    ctx.moveTo(.75 * size, .75 * size);
    ctx.arc(.75 * size, .75 * size, radius, 0, 2 * Math.PI, false);
    ctx.fill();
}