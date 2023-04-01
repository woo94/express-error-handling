import {AnimalModel, Animal} from '../model';

export const seeds: Array<Animal> = [
  new AnimalModel({
    id: 1,
    species: 'lion',
    name: 'ryan',
    age: 9,
    icon: '🦁',
  }),
  new AnimalModel({
    id: 2,
    species: 'dog',
    name: 'corgie',
    age: 7,
    icon: '🐶',
  }),
  new AnimalModel({
    id: 3,
    species: 'cat',
    name: 'nana',
    age: 3,
    icon: '🐈',
  }),
  new AnimalModel({
    id: 4,
    species: 'chicken',
    name: 'run',
    age: 2,
    icon: '🐔',
  }),
  new AnimalModel({
    id: 5,
    species: 'penguin',
    name: 'pengoo',
    age: 5,
    icon: '🐧',
  }),
];
