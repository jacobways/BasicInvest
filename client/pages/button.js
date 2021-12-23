
module.exports = buttonEvent = (KoreanButton, TestButton) => {
  
  KoreanButton.addEventListener("click", function(){
    console.log('Korean button clicked')
  })

  TestButton.addEventListener("click", function(){
    console.log('Test button clicked')
  })
}
