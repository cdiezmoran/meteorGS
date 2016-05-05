import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Games } from './games.js';

export const insert = new ValidatedMethod({
  name: 'games.insert',
  validate: Games.schema.validator(),
  run({ name,
        description,
        releaseDate,
        genre,
        minSysRequirements,
        recommendedSysRequirements,
        views,
        img,
        videoLinks }) {

    const game = {
      name: name,
      description: description,
      createdAt: new Date(),
      releaseDate: releaseDate,
      genre: genre,
      minSysRequirements: minSysRequirements,
      recommendedSysRequirements: recommendedSysRequirements,
      rating: 0,
      videoLinks: videoLinks
    };

    Games.insert(game);
  }
});
