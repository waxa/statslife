function init (mongoose) {
  require('./users-model')(mongoose);
  require('./example-model')(mongoose);
};

module.exports = init;
