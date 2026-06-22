let cachedScrollbarWidth: number | null = null;

const getScrollbarWidth = () => {
  if (cachedScrollbarWidth !== null) return cachedScrollbarWidth;
  const outer = document.createElement("div");
  outer.style.cssText =
    "overflow:scroll;width:100px;height:100px;position:absolute;top:-9999px";
  document.body.appendChild(outer);
  cachedScrollbarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);
  return cachedScrollbarWidth;
};

export const enableBodyLock = () => {
  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.height = "var(--vh)";

  const hasOverflow =
    document.documentElement.scrollHeight >
    document.documentElement.clientHeight;
  if (scrollbarWidth > 0 && hasOverflow) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  document.body.classList.add(
    "!overflow-hidden",
    "!fixed",
    "start-0",
    "top-0",
    "w-screen"
  );
};

export const disableBodyLock = () => {
  document.body.classList.remove(
    "!overflow-hidden",
    "!fixed",
    "start-0",
    "top-0",
    "w-screen"
  );

  document.body.style.removeProperty("padding-right");
  document.documentElement.style.removeProperty("height");
};
