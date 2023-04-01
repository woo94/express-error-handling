import mongoose from 'mongoose';
import {AnimalModel} from '../model';
import {seeds} from './seed';

async function run() {
  await mongoose.connect('mongodb://localhost:27017/zoo').then(res => {
    console.log('mongoose connect success');
  });

  await AnimalModel.insertMany(seeds)
    .then(res => {
      console.log('seeding success🌱');
      console.log(res);
    })
    .catch(err => {
      console.log('seeding fail😿');
      console.log(err);
    })
    .finally(() => {
      mongoose.disconnect();
    });
}

run();
