const { Schema, model, Types } = require('mongoose');

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    blurb: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 200,
    },
    git: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);


projectSchema
  .virtual('projectCount')
  .get(function () {
    return this.projectName.length;
  });


const Project = model('Project', projectSchema);

Project.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    Project.insertMany(
      [
        { projectName: 'The Weather', blurb: `An app where a user can enter a location and get the current and upcoming weather`, git: `https://github.com/NBS5000/weather`, url: `https://nbs5000.github.io/weather/index.html` },

      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});

module.exports = Project;


