// Write your solution here!
// Define 4 `const` called:
// `append`, `prepend`, `removeLast` and `removeFirst`, and set all to an initial
// value of `["Milo", "Otis", "Garfield"]`. These are the `array`s that we'll work
// with for each exercise.

// > **NOTE**: "Append" means "add to the end" and "prepend" means "add to the
// > beginning."

// ## Practice Manipulating Arrays

// 1. Append the pet "Odie" to the end of `append`.
// 2. Prepend the pet "Odie" to the beginning of `prepend`.
// 3. Remove the _last_ pet from `removeLast`.
// 4. Remove the _first_ pet from `removeFirst`.

const append = ["Milo", "Otis", "Garfield"]
const prepend = ["Milo", "Otis", "Garfield"]
const removeLast = ["Milo", "Otis", "Garfield"]
const removeFirst = ["Milo", "Otis", "Garfield"]

append.push("Odie")
prepend.unshift("Odie")
removeLast.pop()
removeFirst.shift()