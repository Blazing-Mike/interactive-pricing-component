"use strict";
const slider = document.querySelector(".slider__page-views");
const toggle = document.querySelector(".js-toggle");
const btn = document.querySelector(".trail");


// Making slider work
function setBar(value) {
  const fill = document.querySelector(".js-fill");
  fill.style.width = `${value}%`;
}
setBar(10);

// Targeting the slider control
slider.oninput = function () {
const pageViews = document.querySelector(".js-pageViews");
const price = document.querySelector(".js-price");
  function printingPrice(amount) {
    if (toggle.checked) {
      price.textContent = `$${amount - amount * 0.25}`;
    } else {
      price.textContent = `$${amount}`;
    }
  }

  function printPageViews(view) {
    pageViews.textContent = `${view}k`;
  }

  if (Number(this.value) === 20) {
    printPageViews(1);
    printingPrice(8);
    setBar(0);
  } else if (Number(this.value) === 40) {
    printPageViews(20);
    printingPrice(12);
    setBar(20);
  } else if (Number(this.value) === 60) {
    printPageViews(50);
    printingPrice(16);
    setBar(40);
  } else if (Number(this.value) === 80) {
    printPageViews(70);
    printingPrice(24);
    setBar(60);
  }
    else if (Number(this.value) === 90) {
      printPageViews(80);
      printingPrice(30);
      setBar(80);
  } else if (Number(this.value) === 100) {
    pageViews.textContent = "100k";
    printingPrice(36);
    setBar(100);
  }


};
function refreshPage() {
  window.location.reload();
}


btn.addEventListener("click", refreshPage);
toggle.addEventListener("click", function () {
  slider.oninput();
});
