import React, { useMemo } from "react";
import { I } from "../../components/I";
import { Toast } from "../../components/Toast";
import { useI18n } from "../../utils/i18n/useI18n";

export const SwissHalfFareCard = () => {
  const { t } = useI18n();
  const raw = t.raw("activity.widget.swissHalfFareCard");
  const html = useMemo(() => ({ __html: raw }), [raw]);

  return (
    <Toast icon={<I icon="circle-info" />} className="-m-2 mt-2">
      <span dangerouslySetInnerHTML={html} />
    </Toast>
  );
};
