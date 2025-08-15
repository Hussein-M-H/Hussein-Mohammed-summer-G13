let handleInp = (Inp) => {
  console.log(Inp)
  switch(Inp.id) {
    case "nameInp" : return nameValidation(Inp)
    case "emailInp" : return emailValidation(Inp)
    break
    case "subInp" : return subValidation(Inp)
    break
  }
}

let nameValidation = (Inp) => {
  let InpVal = Inp.value.trim()
  if(!InpVal.length)
  {
    handleError(Inp, "The field is required.")
  }
  else {
    handleError(Inp)
    return true
  }
}

let subValidation = (Inp) => {
  let InpVal = Inp.value.trim()
  if(!InpVal.length)
  {
    handleError(Inp, "The field is required.")
  }
  else {
    handleError(Inp)
    return true
  }
  return false
}

let emailValidation = (Inp) => {
    // username@domain.subdomain
    let InpVal = Inp.value.trim()
    if(!InpVal.length) {
        handleError(Inp, "The field is required.")
    }
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      console.log(emailRegex.test(Inp.value))
      if (!emailRegex.test(Inp.value)) {
          handleError(Inp, "The e-mail address entered is invalid.")
      }
      else {
          handleError(Inp)
          return true
      }
    }
    return false
}

let handleError = (input, msg = "") => {
  let nextElement = input.nextElementSibling
  console.log(nextElement)
  if(msg == "") {
    nextElement.classList.add('d-none')
  }
  else {
    nextElement.innerText = msg
    nextElement.classList.remove('d-none')
  }

}

let contactForm = document.getElementById("contactForm")

let Inps = document.querySelectorAll("#contactForm input")
Inps.forEach(ele => {
  ele.addEventListener('blur', function() {
    handleInp(this)
  })
})

contactForm.addEventListener('submit' , e => {
  e.preventDefault()
  let isSubmit = true
  Inps.forEach(ele => {
    console.log(handleInp(ele))
  if(!handleInp(ele)) isSubmit = false
  })
  if(isSubmit)
    contactForm.submit()
})