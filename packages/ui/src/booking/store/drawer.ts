import { useEffect } from "react";
import { create } from "zustand";
import { TActivity } from "../types/activity";
import { disableBodyLock, enableBodyLock } from "../utils/ui/bodylock";
import { scrollToTarget } from "../utils/ui/scrollToTarget";

const DRAWER_UNMOUNT_DELAY_MS = 500;

type DrawerStore = {
  activity: TActivity | null;
  setActivity: (activity: DrawerStore["activity"]) => void;
  isOpen: string[];
  setOpen: (isOpen: string) => void;
  close: (id: string, element?: HTMLElement | null) => void;
  scroll: number;
  reset: () => void;
};

export const useDrawerStore = create<DrawerStore>((set, get) => ({
  activity: null,
  setActivity: (activity) => {
    set({ activity });
  },
  isOpen: [],
  setOpen: (isOpen) => {
    const scroll = window.pageYOffset;
    let opened = [...get().isOpen];

    if (isOpen === "") {
      set({ isOpen: [] });
      disableBodyLock();
      document.body.style.removeProperty("top");
      window.scrollTo(0, get().scroll);
      return;
    }

    if (!opened.includes(isOpen)) {
      if (opened.length === 0) {
        enableBodyLock();
        document.body.style.top = -scroll + "px";
      }
      opened.push(isOpen);
    }

    if (opened.length === 1) {
      set({ isOpen: opened, scroll });
    } else {
      set({ isOpen: opened });
    }
  },
  close: (id: string, element: HTMLElement | null = null) => {
    const el = document.querySelector(`[data-drawer="${id}"]`) as HTMLElement;

    el?.querySelector('[data-drawer="drawer"]')?.classList.remove(
      "!translate-y-0",
      "!translate-x-0",
      "lg:!opacity-100"
    );
    el?.querySelector('[data-drawer="overlay"]')?.classList.remove(
      "!opacity-100"
    );
    el?.querySelector('[data-drawer="inner"]')?.classList.remove(
      "!opacity-100"
    );
    el?.querySelector('[data-drawer="bottom"]')?.classList.remove(
      "!opacity-100"
    );

    let opened = [...get().isOpen];
    opened = opened.filter((e) => e !== id);

    setTimeout(() => {
      set({ isOpen: opened });

      if (opened.length === 0) {
        disableBodyLock();
        document.body.style.removeProperty("top");
      }

      if (element) {
        scrollToTarget(element);
      } else {
        window.scrollTo(0, get().scroll);
      }
    }, DRAWER_UNMOUNT_DELAY_MS);
    setTimeout(() => {
      if (opened.length !== 0) {
        document
          .querySelectorAll("[data-drawer] [data-drawer]")
          .forEach((drawer) => {
            drawer.removeAttribute("style");
          });
      }
    }, 500);
  },
  scroll: 0,
  reset: () => {
    disableBodyLock();
    document.body.style.removeProperty("top");
    set({ isOpen: [] });
  },
}));

export const useStackedDrawer = (element: string, ident: string = "") => {
  const TRANSITIONS = {
    DURATION: 0.5,
  };
  const isOpen = useDrawerStore((state) => state.isOpen);

  useEffect(() => {
    if (ident === "checkout-error") return;

    const index = isOpen.indexOf(ident) + 1;
    if (index === isOpen.length) return;

    const el = document.querySelector(element) as HTMLElement;

    const resize = () => {
      if (!el) return;

      const isLg = window.innerWidth >= 1024;
      const direction = el
        ?.closest("[data-drawer-desktop]")
        ?.getAttribute("data-drawer-desktop");
      const dim = isLg ? window.innerHeight : window.innerWidth;
      const val = isLg ? 52 : 26;

      function getScale() {
        return (dim - val) / dim;
      }

      const styles = [
        "transform-origin: top",
        "transition-property: transform, border-radius, top, height",
        `transition-duration: ${TRANSITIONS.DURATION}s`,
        "transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1)",
        "will-change: transform",
      ];

      if (isLg) {
        const transform =
          direction === "right"
            ? `scale(${getScale()}) translate3d(calc(env(safe-area-inset-right) - 48px), ${
                val / 2
              }px, 0) !important`
            : `scale(${getScale()}) translate3d(calc(env(safe-area-inset-left) + 48px), ${
                val / 2
              }px, 0) !important`;

        styles.push(`transform: ${transform}`);
        styles.push("height: var(--vh)");
      } else {
        styles.push(
          `transform: scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) - 16px), 0) !important`
        );
        styles.push("height: calc(var(--vh) + 32px)");
      }

      el.setAttribute("style", styles.join(";"));
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      if (ident === "checkout-error") return;

      if (el) {
        el.style.removeProperty("transform");
        el.style.removeProperty("height");
      }
      window.removeEventListener("resize", resize);
    };
  }, [element, isOpen, ident]);
};
