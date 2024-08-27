/* In this file the use of the isarray function */

const obj = {
    name : "Pawan",
    course : "BCA"
}

for (const key in obj) {
    console.log('The value of the key is the ',key)
    console.log('The value of the key is the ',obj[key])

}

for (const key of Object.keys(obj)) {
    console.log("The value of the key in the for...of loop:", key);
}

for (const key of Object.values(obj)) {
    console.log("The value of the obj in the for...of loop:", key);
}

