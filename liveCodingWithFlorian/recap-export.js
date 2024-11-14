const apple = (a)=>{
    // Any logic beeing executed here
    console.log(a);
    return "Apple was executed."
};
const banana = (b)=>{
    // Any other logic
    console.log(b);
};
const peach = (c)=>{ // ES6 Declaration of function
    // Any other logic
    console.log(c);
};

// function orange(){} // ES5 Declaration is allowed as well

// 1. named export (1. export on each function OR 2. one export statement)
// With named export we can export as many Variables/Functions as we like
// Named export statement:
export {banana};

// 2. Default export - we could ony export ONE function/logic on the default
// Default export:
// Export default requires a Variable (Functions/Logic/Datastructure) and only can export ONE
export default apple;

// 3. Combination of named and default
// See example above, apple is default and banane is named

// 4. Rename access to export statements
// We can rename existing Variable to an export name
export {peach as orange};