import { faker } from '@faker-js/faker';

const freelancerList = Array.from({ length: 5 }, (_, index) => ({
    key: index,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    type: 'freelancer', 
}));

const customerList = Array.from({ length: 3 }, (_, index) => ({
    key: index,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    position: faker.person.jobTitle(),
    type: 'customer',
}));

export { freelancerList, customerList };
