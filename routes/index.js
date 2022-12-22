const auth = require("../middleware/auth");
const categoryRoutes = require("./categoryRoute");
const productRoutes = require("./productRoute");

function routes(router, dbClient) {
  categoryRoutes(router, dbClient);
  router.use(auth);
  productRoutes(router, dbClient);
}

module.exports = routes;
