import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
