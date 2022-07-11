const headerObserver = () => {
  const nav = document.querySelector('nav');
  const mainPage = document.querySelector('.main');
  const logo = document.querySelector('#logo');

  const options = {
    rootMargin: "-150px",
  };
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(entry => {
      console.log(entry);
      if(!entry.isIntersecting) {
        nav.classList.add('on-scroll');
        logo.src = "assets/img/kapas-black.png";
      } else {
        nav.classList.remove('on-scroll');
        logo.src = "assets/img/kapas-white.png";
      }
    })
  }, options);

  observer.observe(mainPage);
};

headerObserver();