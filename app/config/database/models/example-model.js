function initExample (mongoose) {
  var exampleSchema = new mongoose.Schema({
		exampleAttr1: {
      type: String
    },
		exampleAttr2: {
      type: String
    }
	});

	mongoose.model('Example', exampleSchema);
};

module.exports = initExample;
