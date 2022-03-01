let lines = gets().split('\n');

let texto = 'LIFE IS NOT A PROBLEM TO BE SOLVED';

function main() {
    let n = parseInt(lines.shift());
    console.log(texto.substring(0, n));

}
main();