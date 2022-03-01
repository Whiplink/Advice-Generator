const icon = document.querySelector('.iconContainer')
const adviceId = document.getElementById("adviceId")
const adviceContainer = document.querySelector('.adviceContainer')

const generateAdvice = async() => {
  const res = await fetch("https://api.adviceslip.com/advice")
  const data = await res.json()

  adviceId.textContent = data.slip.id
  adviceContainer.textContent = `"${data.slip.advice}"`
}

generateAdvice()

icon.addEventListener('click', generateAdvice)



// document.querySelector('.adviceContainer').innerHTML = `"It is east to sit up and take notice, what's difficult is getting up and taking action."`



