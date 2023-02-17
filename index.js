const submitData = (userName, userEmail) => {
  const formData = {
    name: userName,
    email: userEmail,
  };
  const configurationObject = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(formData),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const newHeader = document.createElement("h1");
      newHeader.textContent = object.id;
      document.body.append(newHeader);
    })
    .catch(function (error) {
      const newHeader = document.createElement("h1");
      newHeader.textContent = error.message;
      document.body.append(newHeader);
    });
};
