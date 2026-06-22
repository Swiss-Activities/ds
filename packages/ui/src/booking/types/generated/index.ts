/**
 * Clean re-exports of Booking API types
 * Auto-generated from OpenAPI spec at https://bookingapi.swissactivities.com/docs.json
 *
 * Usage:
 *   import type { Activity, Offer, Price } from '.';
 */
import type { components, paths, operations } from "./booking-api";

// Re-export the full types for advanced usage
export type { components, paths, operations };

// Schema type aliases for cleaner imports
export type Schemas = components["schemas"];

// Main entity types
export type Activity = Schemas["Activity"];
export type Availability = Schemas["Availability"];
export type AvailabilityGeneration = Schemas["AvailabilityGeneration"];
export type BookingItem = Schemas["BookingItem"];
export type BookingItemInvoice = Schemas["BookingItemInvoice"];
export type Distributor = Schemas["Distributor"];
export type DistributorContact = Schemas["DistributorContact"];
export type DistributorSupplier = Schemas["DistributorSupplier"];
export type Favorite = Schemas["Favorite"];
export type FavoriteActivity = Schemas["FavoriteActivity"];
export type Invoice = Schemas["Invoice"];
export type Notification = Schemas["Notification"];
export type NotificationRecipient = Schemas["NotificationRecipient"];
export type Offer = Schemas["Offer"];
export type OfferDate = Schemas["OfferDate"];
export type Payout = Schemas["Payout"];
export type PointOfSale = Schemas["PointOfSale"];
export type Schedule = Schemas["Schedule"];
export type Supplier = Schemas["Supplier"];
export type SupplierContact = Schemas["SupplierContact"];
export type User = Schemas["User"];

// Pricing & financial types
export type Amount = Schemas["Amount"];
export type Commission = Schemas["Commission"];
export type AdjustableCommission = Schemas["AdjustableCommission"];
export type InternalDiscount = Schemas["InternalDiscount"];
// Price with formatted as required (matching legacy TPrice)
export type Price = Schemas["Price"] & { formatted: string };
export type PriceOptional = Schemas["Price"];
export type ReceivedPayment = Schemas["ReceivedPayment"];

// Ticket types
export type TicketCategory = Schemas["TicketCategory"];
export type TicketCategoryInfo = Schemas["TicketCategoryInfo"];
export type TicketCategoryQuantity = Schemas["TicketCategoryQuantity"];
export type TicketCategoryQuantityRequest =
  Schemas["TicketCategoryQuantityRequest"];
export type TicketCategoryScheduleAssignment =
  Schemas["TicketCategoryScheduleAssignment"];
export type TicketCategorySelection = Schemas["TicketCategorySelection"];
export type TicketReservation = Schemas["TicketReservation"];

// Reference & metadata types
export type ComplementaryReference = Schemas["ComplementaryReference"];
export type GeoPosition = Schemas["GeoPosition"];
export type GuestInfo = Schemas["GuestInfo"];
export type OccupancyType = Schemas["OccupancyType"];
export type OfferReferencePdf = Schemas["OfferReferencePdf"];
export type Pdf = Schemas["Pdf"];
export type PersonalizationValue = Schemas["PersonalizationValue"];
export type ServiceReferences = Schemas["ServiceReferences"];
export type Sync = Schemas["Sync"];

// Request types
export type AffiliateRequest = Schemas["AffiliateRequest"];
export type AuthenticationDataRequest = Schemas["AuthenticationDataRequest"];
export type PaymentDetailAuthenticationDataRequest =
  Schemas["PaymentDetailAuthenticationDataRequest"];
export type PlaceInput = Schemas["PlaceInput"];
export type ResellerUserRequest = Schemas["ResellerUserRequest"];
export type ThreeDSRequestDataRequest = Schemas["ThreeDSRequestDataRequest"];
export type UserContactRequest = Schemas["UserContactRequest"];
export type UserPaymentAgreementRequest =
  Schemas["UserPaymentAgreementRequest"];

// Booking types (context-specific from API)
export type Booking = Schemas["Booking-._booking_service"];
export type BookingsList = Schemas["Booking-._bookings_service"];
export type BookingSummary = Schemas["Booking-._bookings_summary_service"];
export type BookingDistributor = Schemas["Distributor-._booking_service"];
export type BookingUser = Schemas["User-._booking_service"];
export type BookingItemService = Schemas["BookingItem-._booking_service"];
export type ReservationGuest = Schemas["Guest-._reservation"];

// Offer/Availability types (matching TOfferBooking pattern)
export type OfferWithAvailabilities =
  Schemas["AvailabilitiesOfferGroup-._availabilities"];
export type AvailabilitiesByQuantitiesResult =
  Schemas["AvailabilitiesByQuantitiesResult-availabilities_by_quantities_."];
export type AvailabilityItem = Schemas["Availability-._availabilities"];

// Helper type to get a specific schema by name
export type Schema<T extends keyof Schemas> = Schemas[T];

// Helper type to get path parameters
export type PathParams<T extends keyof paths> = paths[T];

// Helper type to get operation types
export type Operation<T extends keyof operations> = operations[T];
