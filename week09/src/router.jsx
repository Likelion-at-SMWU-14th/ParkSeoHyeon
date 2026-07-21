import { createBrowswerRouter } from "react-router-dom";
import App from "./App";

const router = createBrowswerRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
