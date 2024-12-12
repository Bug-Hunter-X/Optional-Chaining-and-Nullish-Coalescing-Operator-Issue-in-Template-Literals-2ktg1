# TypeScript Bug: Optional Chaining and Nullish Coalescing in Template Literals

This repository demonstrates a subtle bug in TypeScript related to the interaction of optional chaining, the nullish coalescing operator (`??`), and template literals within functions.  The issue arises when a potentially nullish value is used within a template literal and optional chaining is used to access the property.

## Bug Description

The provided `printName` function is designed to handle cases where the `name` parameter might be null.  However, when `person.name` is null, the output is unexpectedly `Hello, undefined` instead of `Hello, ` (an empty string). This behavior is inconsistent with the expected handling of nullish coalescing.

## Reproduction Steps

1. Clone this repository.
2. Open `bug.ts` and run it using a TypeScript compiler (e.g., `tsc bug.ts`) and then node `bug.js`.
3. Observe the unexpected output.

## Solution

The provided `bugSolution.ts` demonstrates a fix for the issue by explicitly checking for null or undefined before using the value in the template literal, or using a different approach to handle potential null values.