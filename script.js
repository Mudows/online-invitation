let isValid = false

function validateButton () {
  if($('#passcode').val() === 'LAURA2022') {
    $('button').prop('disabled', false)
  } else {
    $('button').prop('disabled', true)
  }
}

$('#passcode').on('input', validateButton)
$('button').click(() => {
  window.location.href = '/invitation.html'
  isValid = true
})

window.onload = () => {
  /* if ( window.location.href === '/invitation.html' && isValid === false ) {
    window.location.href = '/index.html'
  } */
  $('#confetti-canvas')
    .prop('width', window.innerWidth)
    .prop('height', window.innerHeight)
  
  startConfetti()
}