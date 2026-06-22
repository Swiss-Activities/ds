import { TActivity } from "./activity";

type TStreams = {
  tabs: {
    id: number;
    title: string;
    titleEn: string;
    iconId: number;
    sortOrder: number | null;
    hero: {
      id: number;
      activity_id: number;
      title: string;
      activityType: string;
      teaserImageUrl: string;
    };
    streams: {
      tabId: number;
      title: string;
      titleEn: string;
      iconId: number;
      sortOrder: number;
      items: TActivity[];
      showMoreIds: string[];
      showMoreType: string | null;
      path: string;
    }[];
  }[];
};

export type { TStreams };
