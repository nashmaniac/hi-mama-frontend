import authRoutes from "./modules/authentication/routes";
import homeRoutes from "./modules/home/routes";

let routes = [];
routes = routes.concat(homeRoutes);
routes = routes.concat(authRoutes);

export default routes;