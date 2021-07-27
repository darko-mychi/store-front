
import { GlassRouter } from "glass-router";

import home from "./views/Home/routes";
import checkout from "./views/Checkout/routes";
import notFound from "./views/NotFound/routes";

const routes = [
  ...home,
  ...checkout,
  ...notFound,
];

GlassRouter.options({
  routes,
  linkActiveClass: "active",
});
