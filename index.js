export const getTitle = title => {
  const titleElement = document.querySelectorAll('.title')
  console.dir(titleElement.textContent)
  return titleElement.textContent
}

getTitle()

export const getDescription = about => {
  const aboutElement = document.querySelectorAll('.about')
  console.dir(aboutElement.innerText)
  return aboutElement.innerText
}

getDescription()

export const getPlans = plans => {
  const plansElement = document.querySelectorAll('.plans')
  console.dir(plansElement.innerHTML)
  return plansElement.innerHTML
}

getPlans()

export const getGoal = goal => {
  const goalElement = document.querySelectorAll('.goal')
  console.dir(goalElement.outerHTML)
  return goalElement.outerHTML
}

getGoal()
