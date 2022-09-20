

export const getUser = (token) => {
  return fetch("/api/users/profile", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
  
export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const addRecord = (recordData) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recordData),
  });
};

export const deleteRecord = (recordId) => {
    return fetch(`/api/users/records/${recordId}`, {
      method: "DELETE",
      headers: {
      },
    });
  };