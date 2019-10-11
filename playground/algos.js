
/*
    -  Understanding the problem.
        -   restate the problem in my own words.
        -   what are the inputs, what are the outputs.
        -   can output be determined from input.
        -   how to label the important data to solve the problem.

        examples    -   add two numbers 2 + 5.

    -   Exploring examples.
        -   come up with examples which can help you to understand the problem.
        -   it will help you to check the results.

        -   start with simple examples
        -   progessively move towards complex exampless.
        -   check edge cases : like empty imputs, invalid inputs

        examples    -   count letter in string.

    -   Break it down.
        - write step by step approch in SUDO code.

    -   Solve / Simplify.
        -   find whats dificult.
        -   temporarly ingnore the difficult part.
        -   write simplified solution. (may give insight about difficult part)
        -   then think about the difficult part.

    -   Look back and refactor.
        -   check the results
        -   is it easy to understand.
        -   can you reuse the solution in other situations (is it reusable)
        -   is it efficient (try to improve performance)
        -   try to refactor
        -   try other solutions.
        -   is it intiutive.
*/

const isAlphaNumeric = char => {
    char = char.charCodeAt(0)
    return !((char > 47 && char < 58) || (char > 64 && char < 91) || (char > 96 && char < 123)) ? false : true
}

function char(str) {
    let result = {};

    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result
}

console.log(char("hello World"));
