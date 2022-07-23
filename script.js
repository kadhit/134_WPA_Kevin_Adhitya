const headerObserver = () => {
  const nav = document.querySelector("#navbar");
  const mainPage = document.querySelector("#main");

  const options = {
    rootMargin: "-150px",
  };
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      console.log(entry);
      if (!entry.isIntersecting) {
        nav.classList.add("shadow", "bg-dark");
        nav.classList.replace("text-dark", "text-white");
      } else {
        nav.classList.remove("shadow", "bg-dark");
        nav.classList.replace("text-white", "text-dark");
      }
    });
  }, options);

  observer.observe(mainPage);
};

// const mediaQueries = () => {
//   const flex = document.querySelector(".flex");
//   const row = document.querySelector(".row");
//   const width = window.innerWidth;
//   if (width <= 720) {
//     flex.classList.toggle("text-center");
//     row.classList.replace("justify-content-around", "justify-content-center");
//   } else {
//     row.classList.replace("justify-content-center", "justify-content-around");
//   }
// };

// mediaQueries();
headerObserver();
