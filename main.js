const cardBackground = document.querySelector(".slide__Proj__Card");
const cards = Array.from(cardBackground.children);

cards.forEach((card) =>
  card.addEventListener("mouseover", (event) => {
    console.log(event.target);

    const bgColor = getComputedStyle(event.target).backgroundColor;

    cardBackground.style.backgroundColor = bgColor;

    console.log(cardBackground.style);
  })
);
