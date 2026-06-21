import ProtectedRoute from "./components/ProtectedRoute";

<Route
  path="/"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>