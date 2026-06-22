import type {
  AdjustableCommission,
  AvailabilityGeneration,
  Commission,
  ServiceReferences,
  Sync,
  TicketCategoryScheduleAssignment,
} from "./generated";
import { TPrice } from "./booking";

export type TServiceReference = ServiceReferences;
export type TSync = Sync;
export type TCommission = Commission & {
  fixedFeeCurrency?: string;
  fixedFeeAmount?: string;
};
export type TTicketCategoryAssignment = TicketCategoryScheduleAssignment;

type TSchedule = {
  scheduleId: number;
  ticketCategoryAssignments: TTicketCategoryAssignment[];
  isAllDay: boolean;
  firstAvailableAt: string;
  lastAvailableAt: string;
  timeZone: string;
  startTimes: string[];
  duration: string;
  cutoff: string;
  weekdays: string[];
  isActive: boolean;
  serviceReferences: TServiceReference;
};

type TLabel = {
  formatted: string;
  audience: string;
  discount: string | null;
  ageRestriction: string | null;
};

type TTicketCategory = {
  audience: string;
  categoryType: string;
  categoryTypeKey: string;
  discountType?: string;
  isActive: boolean;
  isActiveForPartnerapi: boolean;
  label: TLabel;
  maxAge?: number;
  maxOccupancy: number;
  minAge?: number;
  note: string;
  occupancy: number;
  price: TPrice;
  reviewStatus: string;
  sequenceIndex: number;
  serviceReferences: TServiceReference;
  ticketCategoryId: number;
  ticketMode: string;
};

type TRelatedLocation = {
  id: string | number;
  place_id: string;
  relation_type: string;
};

type TOffer = {
  id: string;
  label: string;
  description: string;
  validity?: string;
  duration?: string;
  offerId: number;
  activity: {
    activityId: number;
  };
  isActive: boolean;
  schedules: TSchedule[];
  ticketCategories: TTicketCategory[];
  reservationSystem: string;
  serviceReferences: TServiceReference;
  sync: TSync;
  availabilityGeneration: AvailabilityGeneration;
  commission: TCommission;
  sequenceIndex: number;
  cancellationCutOff: string;
  isActiveSupplierNotification: boolean;
  isActiveForPartnerapi: boolean;
  handlingFees: AdjustableCommission;
  guideLanguages: string | null;
  distributorIds: number[];
  SBB_destination: string;
  related_locations: TRelatedLocation[];
  meeting_points: { id?: string; label?: string; address?: string }[];
  destination_points: { id?: string; label?: string; address?: string }[];
  isCommission: boolean;
};

export type { TLabel, TOffer, TSchedule, TTicketCategory, TRelatedLocation };
