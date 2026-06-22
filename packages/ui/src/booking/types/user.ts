import { CountryCode } from "libphonenumber-js";

type TDistributorContact = {
  businessRole: string;
  contactId: number;
  email: string;
  name: string;
  phone: string;
  countryCode: CountryCode;
};

type TPaymentAgreement = {
  cardExpiryDate: string;
  cardName: string;
  cardNumber: string;
  cardType: string;
  paymentGatewayId: "payyo" | "adyen";
  paymentGatewayReferenceId: string;
  storePaymentMethodId: number;
  userInputCardName: string;
};

type TDistributor = {
  acceptanceTermAndCondition: boolean;
  bankAccountHolder: string;
  bankAccountHolderAddress: string;
  bankAccountIban: string;
  bookingNotificationsEmail: string;
  channelId: string;
  distributorContacts: TDistributorContact[];
  distributorId: string;
  invoiceApproved: boolean;
  merchantAddress: string;
  merchantName: string;
  name: string;
  showMoreFeature: boolean;
  showTicketPrice: boolean;
};

type TUser = {
  activePayyoPaymentAgreement: boolean;
  bookings: string[];
  channelId: string;
  countryCode: string;
  distributor: TDistributor;
  distributorId: string;
  email: string;
  familyName: string;
  fullName: string;
  givenName: string;
  hasAccount: boolean;
  id: string;
  isAdmin: boolean;
  isCustomer: boolean;
  isReseller: boolean;
  oauthUserId: string;
  storePaymentMethods: TPaymentAgreement[];
  phone: string;
  picture: string;
  roles: string[];
  rolesAuth0: string[];
  token: string;
  userId: number;
};

export type { TUser, TDistributor, TDistributorContact, TPaymentAgreement };
