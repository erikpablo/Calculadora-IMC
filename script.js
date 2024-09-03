const btnCalculation = document.querySelector('.btnClick')
const erro = document.querySelector('.erro')
const span = document.querySelector('span')

function calculationIMC () {
  let cmNumber = document.querySelector('#cmNumber').value
  let kgNumber = document.querySelector('#kgNumber').value

  cmNumber = Number(cmNumber)
  kgNumber = Number(kgNumber)

  if(cmNumber <= 0 || kgNumber <= 0 || isNaN(cmNumber) || isNaN(kgNumber)) {
    erro.classList.remove('hide')
    span.textContent = 'O seu IMC: erro'
  } else {
    erro.classList.add('hide')
  }

  let imc = kgNumber / ((cmNumber / 100) ** 2)

  span.textContent = `O seu IMC: ${imc.toFixed(2)}`
}



btnCalculation.addEventListener('click', calculationIMC)
