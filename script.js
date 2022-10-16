const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav')

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navigation.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navigation.classList.remove("active")
  })
)