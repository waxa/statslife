function middle (request, response, next) {
  request.chance = Math.random()
  console.log("example middle", request.chance);
  next();
};

module.exports = middle;
