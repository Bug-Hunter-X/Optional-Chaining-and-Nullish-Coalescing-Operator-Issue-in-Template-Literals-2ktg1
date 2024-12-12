function printName(name: string | null): void {
  console.log(`Hello, ${name}`);
}

const person: { name: string | null } = { name: null };

printName(person.name);

// Expected output: Hello, 
// Actual output: Hello, undefined