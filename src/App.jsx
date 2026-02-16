import React, { useState, useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import AdminDashbord from "./components/Auth/Dashboard/AdminDashbord";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  // Auto login if already stored
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser.data);
    }
  }, []);

  

  // LOGIN FUNCTION
  const handleLogin = (email, password) => {
    // Admin Login
    if (email === "admin@mp.com" && password === "123") {
      const adminUser = { role: "admin" };
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      return;
    }

    // Wait for employee data
    if (!userData) {
      alert("Loading data... Please try again.");
      return;
    }

    // Employee Login
    const employee = userData.find(
      (emp) =>
        emp.email.trim().toLowerCase() ===
          email.trim().toLowerCase() &&
        emp.password === password
    );

    if (employee) {
      const employeeUser = {
        role: "employee",
        data: employee,
      };

      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(employeeUser)
      );
      return;
    }

    alert("Invalid credentials");
  };

  // LOGOUT FUNCTION
 const handleLogout = () => {
  localStorage.removeItem("loggedInUser");
  setUser(null);
  setLoggedInUserData(null);
};

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashbord changeUser={handleLogout} />
      )}

      {user === "employee" && (
        <EmployeeDashboard
          changeUser={handleLogout}
          data={loggedInUserData}
        />
      )}
    </>
  );
};

export default App;