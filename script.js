const form = document.querySelector("#quiz-form")
const answers = document.querySelectorAll(".answer")
const questions = document.querySelectorAll(".question-item")
const alertDiv = document.querySelector("#alert")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  answers.forEach((answer) => {
    answer.closest(".question-item").classList.add("incorrect")
    answer.closest(".question-item").classList.remove("correct")
  })

  let selectedAnswers = Array.from(answers).filter(
    (answer) => answer.checked === true
  )
  let countOfCorrectAnswers = 0
  selectedAnswers.forEach((selectedAnswer) => {
    if (selectedAnswer.value === "true") {
      selectedAnswer.closest(".question-item").classList.add("correct")
      selectedAnswer.closest(".question-item").classList.remove("incorrect")
      countOfCorrectAnswers++
    }
  })
  if (countOfCorrectAnswers === 3) {
    document.querySelector("#alert").classList.add("active")

    setTimeout(() => {
      document.querySelector("#alert").classList.remove("active")
    }, 1000)
  }
})
