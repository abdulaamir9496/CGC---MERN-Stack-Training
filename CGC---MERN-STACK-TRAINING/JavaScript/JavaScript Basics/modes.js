/**
 * In JavaScript, **strict mode** is a way to opt into a restricted variant of JavaScript that helps catch common coding mistakes and prevents certain behaviors that are considered unsafe or error-prone.

### How to Enable Strict Mode:
You can enable strict mode in JavaScript by adding the `"use strict";` directive at the beginning of a file or function.

### Example 1: Enabling Strict Mode for the Whole Script
If you want strict mode to apply to an entire script, you can place `"use strict";` at the very beginning of your JavaScript file.

```javascript
"use strict";  // Enable strict mode for the entire file

// Example of a common mistake that strict mode catches
x = 10;  // ReferenceError: x is not defined because strict mode disallows undeclared variables
console.log(x);
```

In this example, strict mode will throw an error because `x` was used without being declared with `let`, `const`, or `var`.

### Example 2: Enabling Strict Mode Inside a Function
You can also enable strict mode only within a specific function.

```javascript
function myFunction() {
  "use strict";  // Enable strict mode only within this function

  // Example of a mistake that strict mode catches
  y = 20;  // ReferenceError: y is not defined because strict mode disallows undeclared variables
    console.log(y);
}

myFunction();
```

Here, strict mode only applies inside `myFunction`. The variable `y` must be declared before it’s used.

### Benefits of Strict Mode:
1. **Prevents the use of undeclared variables**: This helps avoid accidental global variables.
2. **Makes assignments that would otherwise silently fail throw errors** (e.g., assigning to `undefined` or `NaN`).
3. **Disallows duplicate parameter names in functions** (e.g., `function(a, a) {}` is not allowed).
4. **Throws errors on unsafe actions**, like deleting variables, functions, or objects.

### Example 3: Disallow Duplicate Parameter Names
Strict mode does not allow duplicate parameter names in function declarations.

```javascript
function myFunction(a, a) {  // SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a);
}
```

Without strict mode, this would not throw an error, but with strict mode, JavaScript will prevent duplicate parameter names.

### Example 4: Preventing Deletion of Variables
Strict mode prevents deleting variables, functions, and function parameters.

```javascript
"use strict";

var x = 10;
delete x;  // SyntaxError: Cannot delete variable 'x'
```

In non-strict mode, `delete x` would do nothing, but in strict mode, it throws a `SyntaxError`.

### In Summary:
- Strict mode is enabled by adding `"use strict";` at the top of your script or function.
- It helps catch common coding mistakes, such as undeclared variables, duplicate parameters, and unsafe assignments.
- It improves code quality and reduces the chance of bugs in your JavaScript code.
 */


"use strict";
console.log("Hiiiii");

let myVar;
myVar = 0;
console.log(myVar);

function call(p1, p2) {
  // function call(p1, p1) { // DUPLICATE PARAMS NOT ALLOWED
  //   "use strict";
    console.log(p1);
    string = "Testing";
    console.log(string);
}

call(1, 2);

let obj = {
    name: "Sayeed",
};

// delete obj;

console.log(obj);