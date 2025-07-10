export interface TestUserCredential {
  email: string;
  password: string;
}

export interface NewUser {
  name: string;
  email: string;
  accountInfo: AccountInfo;
  addressInfo: AddressInfo;
}

export interface AccountInfo {
  status: string;
  password: string;
  day: string;
  month: string;
  year: string;
}

export interface AddressInfo {
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobilePhone: string;
}

export interface SupportMessage {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

export interface Product {
  name: string;
  description?: string;
  price: string;
  quantity?: string;
  availability?: string;
  condition?: string;
  brand?: string;
}

export interface WriteYourReview {
  firstName: string;
  email: string;
  review: string;
}
