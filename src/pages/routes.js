import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Todo from "./Todo/Todo";
import FetchList from "./FetchList/FetchList";
import Dashboard from "./dashboard/Dashboard";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard/>,
        },
        {
          path: "todo",
          element: <Todo/>,
        },
        {
          path: "fetch-list",
          element: <FetchList />,
        },
      ],
    },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Routes;
