// Date : 17-3-2024
// This is "Ambreen"and you are watching the solutio of the problem no 27 in typescript assignmet.
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//         # version 1 of the Program.#
let alienColor = "green";
if (alienColor === "green") {
    console.log("the player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points.");
}
//         # version 2 of the program.#
alienColor = "yellow";
if (alienColor === "green") {
    console.log("the player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("Please select the right color.");
}
//         # version 3 of the program.#
alienColor = "red";
if (alienColor === "green") {
    console.log("the player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("Please select the right color.");
}
export {};
