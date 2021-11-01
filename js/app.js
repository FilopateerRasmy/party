// nav part
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("menu")
  ) {
    if (menuToggle.style.transform == "translateX(200px)") {
      menuToggle.style.transform = "translateX(0)";
    } else {
      menuToggle.style.transform = "translateX(200px)";
    }
  }
});
//scroll behavior
const nav = document.querySelector(".navbar");
nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-links")) {
    const id = e.target.getAttribute("href");
    let section = document.querySelector(`${id}`);
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    return;
  }
});
//accordion
const accordion = document.querySelector("#about");
const singerInfo = document.querySelectorAll(".singer-info");

accordion.addEventListener("click", (e) => {
  let item = e.target;
  if (
    !item.classList.contains("accordion")
  ) {
    return;
  } else if (item.lastElementChild.classList.contains("singer-info-modifyed")) {
    item.lastElementChild.classList.remove("singer-info-modifyed");
  } else if (item.classList.contains("accordion")) {
    singerInfo.forEach((singer) => {
      singer.classList.remove("singer-info-modifyed");
    });
    item.lastElementChild.classList.add("singer-info-modifyed");
  }
});
// countdown
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");

const countdown = () => {
  const countDownDate = new Date("Dec 17, 2021 20:37:25").getTime();
  const currentDate = new Date().getTime();
  const difference = countDownDate - currentDate;
  const secondCalc = 1000;
  const minutesCalc = secondCalc * 60;
  const hourCalc = minutesCalc * 60;
  const dayCalc = hourCalc * 24;
  day.innerText = `${Math.floor(difference / dayCalc)} Days`;
  hour.innerText = `${Math.floor((difference % dayCalc) / hourCalc)} Hours`;
  minute.innerText = `${Math.floor(
    (difference % hourCalc) / minutesCalc
  )} Minutes`;
  sec.innerText = `${Math.floor(
    (difference % minutesCalc) / secondCalc
  )} Seconds`;
};
setInterval(countdown, 1000);

// scroll animation
const secobserve = (enteries, observer) => {
  const [entry] = enteries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("hidden");
    entry.target.classList.add("active");
    observer.unobserve(entry.target);
  }
};
const sections = document.querySelectorAll("section");
const sectionObserver = new IntersectionObserver(secobserve, {
  root: null,
  threshold: 0.15,
});
sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});

// lazy loading image

const timeDiv = document.querySelector(".time");
const lazy = timeDiv.dataset.src;

const timeObserve = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.add("layer");
    observer.unobserve(entry.target);
  }
};
const timeObserver = new IntersectionObserver(timeObserve, {
  root: null,
  threshold: 0.15,
  rootMargin: "200px",
});
timeObserver.observe(timeDiv);

// form validation
const nameInp = document.getElementById("name");
const emailInp = document.getElementById("email");
const textAreaInp = document.getElementById("text-area");
const charaCount = document.querySelector(".chara-count");
textAreaInp.addEventListener("input", validateTextArea);
function validateTextArea() {
  const textVal = textAreaInp.value;
  const textLength = textVal.length;
  let i = 100;
  const diff = i - textLength;
  if (diff === 0) {
    textAreaInp.disabled = true;
  }
  charaCount.innerHTML = diff;
}
validateTextArea();
