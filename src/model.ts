import mongoose from 'mongoose';

export interface Animal {
  id: number;
  species: string;
  name: string;
  age: number;
  icon: string;
}

export const animalSchema = new mongoose.Schema<Animal>({
  id: {type: Number, required: true},
  species: {type: String, required: true},
  name: {type: String, required: true},
  age: {type: Number, required: true},
  icon: {type: String, required: true},
});

animalSchema.index({species: 1, name: 1}, {unique: true});

export const AnimalModel = mongoose.model('Animal', animalSchema);
