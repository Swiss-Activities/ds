export const scrollToTarget = (
  el: string | Element,
  target = window,
  additionalElement: Element | false = false,
  additionalOffset = 0
) => {
  try {
    const element = typeof el === "string" ? document.querySelector(el) : el;
    if (element) {
      let additionElementOffset = 0;
      if (additionalElement) {
        additionElementOffset = (additionalElement as HTMLElement).offsetHeight;
      }
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition +
        window.pageYOffset -
        additionElementOffset -
        16 -
        additionalOffset;

      target.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  } catch (e) {
    return false;
  }
};
