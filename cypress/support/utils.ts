import { faker } from "@faker-js/faker";
import { Product, SupportMessage, NewUser, AccountInfo, AddressInfo, WriteYourReview } from "./types";

export function getRandomUser(): NewUser {
  return {
    name: faker.internet.username(),
    email: faker.internet.email(),
    accountInfo: getRandomAccountInfo(),
    addressInfo: getRandomAddressInfo(),
  };
}

export function getRandomAccountInfo(): AccountInfo {
  return {
    status: faker.helpers.arrayElement(["Mr.", "Mrs."]),
    password: faker.internet.password(),
    day: faker.number.int({ min: 1, max: 28 }).toString(),
    month: faker.number.int({ min: 1, max: 12 }).toString(),
    year: faker.number.int({ min: 1900, max: 2023 }).toString(),
  };
}

export function getRandomAddressInfo(): AddressInfo {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    country: faker.helpers.arrayElement(["India", "Canada", "United States", "Australia"]),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    mobilePhone: faker.phone.number(),
  };
}

export function getRandomSupportMessage(): SupportMessage {
  return {
    firstName: faker.person.firstName(),
    email: faker.internet.email(),
    subject: faker.lorem.lines(1),
    message: faker.lorem.sentence(),
  };
}

export function getRandomWriteYourReview(): WriteYourReview {
  return {
    firstName: faker.person.firstName(),
    email: faker.internet.email(),
    review: faker.commerce.productDescription(),
  };
}

export const productsPrice: Product[] = [
  {
    name: "Stylish Dress",
    price: "1500",
  },
  {
    name: "Summer White Top",
    price: "400",
  },
  {
    name: "Fancy Green Top",
    price: "700",
  },
  {
    name: "Madame Top For Women",
    price: "1000",
  },
];
