window.addEventListener("load", (event) => {
  console.log("page is fully loaded bro!");

  let modal = document.querySelector(".modal");
  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let button = document.getElementById("btnConnect");
  let closeBtn = document.getElementById("close");

  // Adding a click event listener to element with the id 'btn'
  button.addEventListener("click", (event) => {
    // Prevent the default behavior of the button
event.preventDefault();
    // Stop the event propagation to prevent it from reaching the body element
    event.stopPropagation();

    // Manipulating classes on elements
    modal.classList.remove("hidden");
    body.classList.add("disable");
  });

  // Adding a click event listener to an element with the class 'icon-times'
  closeBtn.addEventListener("click", () => {
    // Manipulating classes on elements
    modal.classList.add("hidden");
    body.classList.remove("disable");
  });
window.addEventListener("scroll", () => {
    // Adding or removing a class based on scroll position
    0 !== window.scrollY
      ? header.classList.add("bordered")
      : header.classList.remove("bordered");
  });
});
