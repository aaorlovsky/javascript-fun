const link = document.querySelector("[data-link]")

link.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("link is clicked")
})
