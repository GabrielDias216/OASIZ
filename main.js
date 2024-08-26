document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  // Carousel functionality
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  const intervalTime = 3000;

  function showNextSlide() {
    currentIndex++;
    if (currentIndex === carouselItems.length) {
      currentIndex = 0;
      carouselInner.style.transition = 'none';
      carouselInner.style.transform = 'translateX(0)';
      setTimeout(() => {
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    } else {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  setInterval(showNextSlide, intervalTime);



  // Typing effect
  const words = ["AGENDAR HORÁRIO",];
  let wordIndex = 0;
  let charIndex = 0;
  const h1Element = document.querySelector('.textocarousel a');
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 1000;

  function type() {
    if (charIndex < words[wordIndex].length) {
      h1Element.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      h1Element.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    }
  }

  type();


  // Intersection Observer for main3 section
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const areas = document.querySelectorAll('.main3 .area');
  areas.forEach(area => {
    observer.observe(area);
  });
});





const observador = new IntersectionObserver((observar) => {
  observar.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('show')
    } else {
      entrada.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => observador.observe(element))






const observador2 = new IntersectionObserver((observar2) => {
  observar2.forEach((entrada2) => {
    if (entrada2.isIntersecting) {
      entrada2.target.classList.add('show2')
    } else {
      entrada2.target.classList.remove('show2')
    }
  })
})

const elements2 = document.querySelectorAll('.hidden2')

elements2.forEach((element) => observador2.observe(element))





const observador3 = new IntersectionObserver((observar3) => {
  observar3.forEach((entrada3) => {
    if (entrada3.isIntersecting) {
      entrada3.target.classList.add('show3')
    } else {
      entrada3.target.classList.remove('show3')
    }
  })
})

const elements3 = document.querySelectorAll('.hidden3')

elements3.forEach((element) => observador3.observe(element))


// Exemplo básico para customizar o scroll via JavaScript (opcional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function () {
  var logo = document.querySelector('.logo img');
  if (window.scrollY > 50) {
    logo.classList.add('scrolledd');
  } else {
    logo.classList.remove('scrolledd');
  }
});

// Obtenha o modal
var modal = document.getElementById("modalPerfil");

// Obtenha os botões que abrem o modal
var buttons = document.getElementsByClassName("botaoimgperfil");

// Obtenha o <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Adicione evento de clique aos botões
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    var nome = this.nextElementSibling.textContent;
    var imagem = this.firstElementChild.src;
    var descricao = this.getAttribute("data-descricao");

    document.getElementById("nomePerfil").textContent = nome;
    document.getElementById("imagemPerfil").src = imagem;
    document.getElementById("descricaoPerfil").textContent = descricao;

    modal.classList.add("show");
    setTimeout(function () {
      document.querySelector(".modal-content").classList.add("show");
    }, 10);
  };
}

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function () {
  document.querySelector(".modal-content").classList.remove("show");
  setTimeout(function () {
    modal.classList.remove("show");
  }, 300);
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    document.querySelector(".modal-content").classList.remove("show");
    setTimeout(function () {
      modal.classList.remove("show");
    }, 300);
  }
}