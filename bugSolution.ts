function printName(name: string | null): void {
  console.log(`Hello, ${name ?? ''}`);
}

const person: { name: string | null } = { name: null };

printName(person.name); // Outputs: Hello, 

//Alternative approach
function printName2(name: string | null): void {
  const nameToDisplay = name === null || name === undefined ? '' : name; //Explicit null check
  console.log(`Hello, ${nameToDisplay}`);
}
printName2(person.name); //Outputs: Hello,