import { faker } from "@faker-js/faker";

const products = Array.from({ length: 50 }, (index) => ({
  id: index,
  title: faker.commerce.productName({ category: "dress" }),
  category:
    faker.company.buzzNoun().charAt(0).toUpperCase() +
    faker.company.buzzNoun().slice(1),
  prevPrice: faker.commerce.price(),
  newPrice: faker.commerce.price(),
  img: faker.image.urlLoremFlickr({ category: "cloth" }),
  star: faker.number.int({ min: 1, max: 5 }),
}));

export default products;
