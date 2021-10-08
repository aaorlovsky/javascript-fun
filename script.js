const array = [1, 2, 3, 5]

if (array.length == 0) {
  console.log("empty")
} else if (array.length < 5) {
  console.log("small")
} else if (array.length < 10) {
  console.log("medium")
} else {
  console.log("large")
}
