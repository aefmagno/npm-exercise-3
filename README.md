# npm-exercise-3

This program takes a single infix argument and converts it into postfix using an [expression-parser](https://www.npmjs.com/package/@estilles/expression-parser) package.


The program uses [expression-parser](https://www.npmjs.com/package/@estilles/expression-parser) and [process-argv](https://nodejs.org/docs/latest/api/process.html#processargv).
- expression parser: parses infix expressions to postfix expressions.
- process-argv: takes commandline arguments and stores it into an array.


To run the program, the user simply types: `node index argument`
- If the user provides more than one argument, the program will prompt the user to input a single argument.
    - ex: `node index 1+2 3+4 `
    - result: `Please Input A Single Argument`
- If the user provides a single a single argument, the program parses it into a postfix expression and prints it.
    - ex: `node index 10+29`
    - result: `10 29 +`

** IMPORTANT: arguments with the multiplication sign `*` should be wrapped inside a single quote. **
Ex: `1+2'*'3 **`