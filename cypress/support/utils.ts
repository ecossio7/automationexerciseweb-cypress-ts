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

export function getExpectedProductDetail(): Product {
  return {
    title: "Blue Top",
    description: "Category: Women > ",
    price: "Rs. 500",
    quantity: "1",
    availability: "In Stock",
    condition: "New",
    brand: "Polo",
  };
}

export function getRandomWriteYourReview(): WriteYourReview {
  return {
    firstName: faker.person.firstName(),
    email: faker.internet.email(),
    review: faker.commerce.productDescription(),
  };
}
