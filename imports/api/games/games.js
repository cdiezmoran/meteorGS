import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class GamesCollection extends Mongo.Collection {
  insert(doc, callback) {
    return super.insert(doc, callback);
  }
  update(selector, modifier) {
    return super.update(selector, modifier);
  }
  remove(selector) {
    return super.remove(selector);
  }
}

export const Games = new GamesCollection('Games');

//Deny all client-side updates since we are using methods
Games.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

const sysRequirementsSchema = new SimpleSchema({
  operatingSystem: {
    type: String
  },
  processor: {
    type: String
  },
  memory: {
    type: String
  },
  graphics: {
    type: String
  },
  storage: {
    type: String
  },
  directX: {
    type: String,
    optional: true
  },
  soundCard: {
    type: String,
    optional: true
  },
  aditionalNotes: {
    type: String,
    optional: true
  }
});

Games.schema = new SimpleSchema({
  name: {
    type: String,
    max: 100
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    denyUpdate: true
  },
  releaseDate: {
    type: Date
  },
  genre: {
    type: [String],
  },
  minSysRequirements: {
    type: sysRequirementsSchema,
  },
  recommendedSysRequirements: {
    type: sysRequirementsSchema,
    optional: true
  },
  rating: {
    type: Number,
    defaultValue: 0
  },
  ratingCount: {
    type: Number,
    defaultValue: 0
  },
  img: {
    type: String
  },
  videoLinks: {
    type: [String],
    optional: true
  },
  galleryLinks: {
    type: [String],
    optional: true
  },
  developerIds: {
    type: [String],
    regEx: SimpleSchema.RegEx.Id
  },
  /*availableOn: {
    windows: { type: Boolean } ,
    mac: { type: Boolean },
    linux: { type: Boolean }
  }*/
});

Games.publicFields = {
  name: 1,
  description: 1,
  createdAt: 1,
  releaseDate: 1,
  genre: 1,
  minSysRequirements: 1,
  recommendedSysRequirements: 1,
  rating: 1,
  videoLinks: 1,
  img: 1
};
