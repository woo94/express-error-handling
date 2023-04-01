import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import {AnimalModel} from './model';

const app = express();
const PORT = 2614;

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/zoo').then(res => {
  console.log('mongoose connect success');
});

// animal의 name을 /:id에 사용하는 경우 막기

app.get('/ping', (req, res) => {
  res.json({ok: 1});
});

app.post('/animal', async (req, res, next) => {
  try {
    const {id, species, name, age, icon} = req.body;

    const newAnimal = new AnimalModel({id, species, name, age, icon});
    await newAnimal.save();

    res.status(200).json({ok: 1});
  } catch (e) {
    console.log(e);
    res.status(500).json({err: e});
  }
});

app.patch('/animal', async (req, res, next) => {
  try {
    const {id, updateDoc} = req.body;
    const updateResult = await AnimalModel.findOneAndUpdate({id}, updateDoc);
    if (updateResult == null) {
      console.log(null);
      return next(null);
    }
    res.status(200).json({updateResult});
  } catch (e) {
    console.log(e);
    res.status(500).json({err: e});
  }
});

app.get('/animal', async (req, res, next) => {
  try {
    const animalDocs = await AnimalModel.find();
    res.status(200).json({docs: animalDocs});
  } catch (e) {
    console.log(e);
    res.status(500).json({err: e});
  }
});

app.get('/animal/:id', async (req, res, next) => {
  try {
    const animalDoc = await AnimalModel.findOne({id: req.params.id});
    if (animalDoc == null) {
      next(null);
    }
    res.status(200).json(animalDoc);
  } catch (e) {
    console.log(e);
    res.status(500).json({err: e});
  }
});

app.delete('/animal/:id', async (req, res, next) => {
  try {
    await AnimalModel.deleteOne({id: req.params.id});
    res.status(200).json({ok: 1});
  } catch (e) {
    console.log(e);
    res.status(500).json({err: e});
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
