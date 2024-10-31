// Function that creates a hiding location
function hide(location) {
    let hideLocation = location; // Local variable to store the hiding location
    
    // Inner function that returns the hidden location when called
    function seek() {
        return hideLocation; // Returns the hidden location
    }
    
    return seek; // Returns the seek function, creating a closure
}

// Call the hide function with a string argument for hiding location
const startGame = hide("under the bed"); // Here is the hiding spot

// Log the result of calling startGame
console.log(startGame()); // Displays: "under the bed"

// Attempt to log hideLocation directly (this will throw an error)
try {
    console.log(hideLocation); // ReferenceError
} catch (error) {
    console.error("Error: ", error.message); // Explain the error
}
