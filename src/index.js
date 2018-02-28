module.exports = function solveEquation(equation) {
    let equationRegExp = /^(-?\d+)\s*\*\s*x\^2\s*(-|\+)\s*(\d+)\s*\*\s*x\s*(-|\+)\s*(\d+)$/;

    let matches = equation.match(equationRegExp);

    let a = Number(matches[1]);
    let b = Number(matches[3]);
    let c = Number(matches[5]);

    if ('-' === matches[2]) {
        b = -b;
    }

    if ('-' === matches[4]) {
        c = -c;
    }

    let d = b * b - 4 * a * c;
    return [(-b + Math.round(Math.sqrt(d))) / 2 / a, (-b - Math.round(Math.sqrt(d))) / 2 / a].sort((x1, x2) => x1 - x2);
}
