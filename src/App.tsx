import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Root";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
