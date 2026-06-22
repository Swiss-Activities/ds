import type { Price } from "./generated";

export type TransportPlaceRef = {
  objectType: string;
  ref: string;
};

export type TransportPlace = {
  objectType: string;
  id: string;
  name: string;
  geoPosition: {
    longitude: number;
    latitude: number;
  };
  ref: TransportPlaceRef;
};

export type TransportStopTransfer = {
  stopPlaceRef: {
    objectType: string;
    stopPlaceRef: string;
  };
  name: string;
  time: string;
  platform: string;
  duration: string;
  position: number;
};

export type TransportationType = {
  mode: {
    ptMode: string;
    name: string;
    shortName: string;
    description: string;
  };
  lineNumbers: (string | null)[];
  vehicleNumbers: string[];
  name: string;
};

export type TransportLeg = {
  start: {
    name: string;
    time: string;
    platform: string;
    stopPlaceRef?: {
      objectType: string;
      stopPlaceRef: string;
    };
  };
  end: {
    name: string;
    time: string;
    platform: string;
    stopPlaceRef?: {
      objectType: string;
      stopPlaceRef: string;
    };
  };
  intermediates?: Array<{
    name: string;
    arrivalDateTime: string | null;
    departureDateTime: string | null;
    platform: string | null;
    stopPlaceRef: {
      objectType: string;
      stopPlaceRef: string;
    };
  }>;
  duration: string;
  capacity: {
    "1st": "low" | "medium" | "high";
    "2nd": "low" | "medium" | "high";
  };
  transportationType: TransportationType;
  attributes?: Array<{
    text: string;
    code: string;
  }>;
};

export type TransportTrip = {
  id?: string;
  tripId?: string;
  returnTripId?: string;
  start: {
    name: string;
    time: string;
    platform: string;
  };
  end: {
    name: string;
    time: string;
    platform: string;
  };
  duration: string;
  transfers: number;
  distance: number | null;
  origin: TransportPlaceRef;
  destination: TransportPlaceRef;
  via: string;
  capacity: {
    "1st": "low" | "medium" | "high";
    "2nd": "low" | "medium" | "high";
  };
  stopTransfers: TransportStopTransfer[];
  transportationType: TransportationType[];
  attributes: Array<{
    text: string;
    code: string;
  }>;
  ticketCategories: TransportTicketCategory[];
  legs?: TransportLeg[];
  direction?: "OUT_BOUND" | "RETURN" | string;
};

export type TransportTicketPrice = Price;

export type TransportAreaCode = {
  areaCode: number;
  areaName: string;
};

export type TransportTicketValidity = {
  from: {
    date: string;
    time: string;
  };
  to: {
    date: string;
    time: string;
  };
};

export type TransportTicketCategory = {
  ticketCategoryId: number;
  minAge: number;
  maxAge?: number | null;
  occupancy: number;
  maxOccupancy?: number | null;
  audience: string;
  discountType?: string | null;
  occupancyType: string;
  note: string;
  categoryType: string;
  isActiveForPartnerapi: boolean;
  sequenceIndex: number;
  qualityOfService: number;
  label?: {
    formatted: string;
    audience: string;
    discount: string | null;
    ageRestriction: string;
    occupancy: string | null;
  };
  price: TransportTicketPrice;
  offerIdentifier: string | null;
  productId: number;
  direction?: string | null;
  quantity?: number | null;
  unitPrice?: TransportTicketPrice | null;
  offerType?: string | null;
  tariffLevel?: string | null;
  tailingArea?: TransportAreaCode | [];
  leadingArea?: TransportAreaCode | [];
  ticketValidity?: TransportTicketValidity;
};

export type TransportOfferTicketCategories = {
  offerId: number;
  contentApiOfferId: number;
  offerLabel: string;
  activityId: number;
  ticketCategories: TransportTicketCategory[];
  capacity: number;
  sequenceIndex: number;
  cancellationCutOff: string;
  openingHours: string;
  duration: string;
};

export type ProductWithTicketCategories = {
  id: number;
  title: string;
  description: string;
  qualityOfService: string[];
  ticketCategories: TransportTicketCategory[];
};
