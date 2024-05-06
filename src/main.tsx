import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setupStore } from "./store/store.ts";
import { Provider } from "react-redux";
import { Flowbite } from "flowbite-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails.tsx";

const store = setupStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pokemon/:name",
    element: <PokemonDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Flowbite>
        <RouterProvider router={router} />
      </Flowbite>
    </Provider>
  </React.StrictMode>
);
