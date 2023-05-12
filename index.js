// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";



if ("I am string"){
    console.log ("true");
} else{
    console.log ("The boolean value is falsy");
}

if(0===true){
    console.log("true");
} else{
    console.log("The boolean value false is falsy");
}

if (0===2){
    console.log ("true");
} else{
    console.log("The null value is falsy");
}
if (typeof x=== undefined){
    console.log("defined");
} else{
    console.log ("undefined");
}
if (2===0){
    console.log ("true");
} else{
    console.log ("The number 0 is falsy (the only falsy number)");
}
if (""){
    console.log("The empty string is true");
} else{
    console.log("The empty string is falsy(the only falsy string)");
}

