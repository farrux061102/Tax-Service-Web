  let btn = document.querySelectorAll('.btn-change1')[0]
  let btn_1 = document.querySelectorAll('.btn-change1')[1]
  let btn2 = document.querySelectorAll('.btn-change2')[0]
  let btn_2 = document.querySelectorAll('.btn-change2')[1]
  let advert = document.querySelector('.tender')
  let advert2 = document.querySelector('.adverting')

  btn.addEventListener('click',function(){
    advert.style.display = 'block'
    advert2.style.display = 'none'
    // btn_1.style.backgroundColor = 'primary'
    btn.style.backgroundColor = 'white'
    btn.style.color = 'black'
    // btn_2.style.backgroundColor = 'white'
  })
  btn_1.addEventListener('click',function(){
    advert.style.display = 'block'
    advert2.style.display = 'none'
    btn_1.style.backgroundColor = 'white'
    btn_1.style.color = 'black'
  })
  btn2.addEventListener('click',function(){
    advert.style.display = 'none'
    advert2.style.display = 'block'
    btn2.style.backgroundColor = 'white'
    btn2.style.color = 'black'
  })
  btn_2.addEventListener('click',function(){
    advert.style.display = 'none'
    advert2.style.display = 'block'
    btn_2.style.backgroundColor = 'white'
    btn_2.style.color = 'black'
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $('#example').tooltip(options)

  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  let loader = document.querySelector('.loader')
  setTimeout(()=>{
    loader.style.opacity = '0'
    setTimeout(()=>{
        loader.style.display = 'none'
    },1000)
  },1000)