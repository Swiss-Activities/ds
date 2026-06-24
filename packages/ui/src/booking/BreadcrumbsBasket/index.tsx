"use client";

import { BookingPageTop } from "../BookingPageTop";
import { cn } from "../utils/css/cn";
import { useI18n } from "../utils/i18n/useI18n";

type BreadcrumbsBasketProps = {
  active?: number;
};

export const BreadcrumbsBasket = ({ active = 1 }: BreadcrumbsBasketProps) => {
  const { t } = useI18n();

  const steps = [
    t("breadcrumbsBasket.stepOneDescription"),
    t("breadcrumbsBasket.stepTwoDescription"),
    t("breadcrumbsBasket.stepThreeDescription"),
  ];

  return (
    <BookingPageTop className="space-y-8 pb-8 lg:pb-12">
      <div className="relative mx-auto flex w-full max-w-screen-lg justify-between">
        <div className="absolute start-0 top-0 h-10 w-full lg:h-12">
          <div className="absolute left-1/2 top-1/2 mt-1 h-px w-[calc(100%-56px)] -translate-x-1/2 -translate-y-1/2 bg-gray-200" />
        </div>
        {steps.map((description, index) => (
          <div key={description} className="relative z-10 flex flex-col items-center">
            <span className="rounded-full border-4 border-solid border-gray-50">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold lg:h-12 lg:w-12 lg:text-base",
                  {
                    "bg-blue text-white": active === index + 1,
                    "border border-solid border-gray-200 bg-white text-blue":
                      active !== index + 1,
                  }
                )}
              >
                {index + 1}
              </span>
            </span>
            <div className="mt-0.5 flex flex-col items-center justify-center lg:mt-2">
              <span className="text-xs font-semibold text-blue first-letter:uppercase lg:text-sm">
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BookingPageTop>
  );
};
