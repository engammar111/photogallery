const Panels = document.querySelectorAll(".panel")

Panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass()
    panel.classList.add("active")
  })
})

function removeActiveClass() {
  Panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}
