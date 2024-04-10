const burger = () => {
  const Button = document.querySelector(".header__btn");
  const menu = document.querySelector(".header__menu");

  if (!Button && !menu) {
    return;
  }

  Button.addEventListener("click", function () {
    Button.classList.toggle("header__btn--open");
    menu.classList.toggle("header__menu--open");
  });

  menu.addEventListener("click", function (event) {
    if (event.target.classList.contains("header__link")) {
      Button.classList.remove("header__btn--open");
      menu.classList.remove("header__menu--open");
    }
  });
};

export default burger;
