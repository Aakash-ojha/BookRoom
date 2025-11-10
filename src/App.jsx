import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Cabins from "./pages/Cabins";
import User from "./pages/User";
import Settings from "./pages/Settings";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  queries: {
    staleTime: 60 * 1000,
    cacheTime: 2 * 60 * 1000,
  },
});

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" element={<Dashboard />} />

              <Route path="/account" element={<Account />} />

              <Route path="/booking" element={<Bookings />} />

              <Route path="/cabins" element={<Cabins />} />

              <Route path="/user" element={<User />} />

              <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
