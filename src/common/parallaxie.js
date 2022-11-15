export default function parallaxie(selector) {
  let elementBg = document.querySelector(selector);
  let image = elementBg.getAttribute("data-background");
  let position = elementBg.getBoundingClientRect().top * 0.77;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = 'cover';
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = 'fixed';
  elementBg.style.backgroundPosition = `center ${position}px`;

  window.onscroll = () => {
    position = elementBg.getBoundingClientRect().top * 0.77;
    elementBg.style.backgroundPosition = `center ${position}px`;
  }
}