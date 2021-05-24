import React from "react";

function User(props) {
  const [isUserinEditMode, setEditMode] = React.useState(false);
  const [editedUser, setEditedUser] = React.useState({
    id: props.id,
    name: props.name,
    username: props.username,
    email: props.email,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUserUpdate(editedUser);
    setEditMode(false);
  };

  return (
    <div style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
      {isUserinEditMode ? (
        <div>
          <p>in edit mode</p>
          <form onSubmit={handleSubmit}>
            <label>email</label>
            <input
              type="text"
              value={editedUser.email}
              name="email"
              onChange={handleChange}
            />
            <br />
            <label>name</label>
            <input
              type="text"
              value={editedUser.name}
              name="name"
              onChange={handleChange}
            />
            <br />
            <label>username</label>
            <input
              type="text"
              value={editedUser.username}
              name="username"
              onChange={handleChange}
            />
            <br />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>{props.name}</h1>
          <p>{props.username}</p>
          <p>{props.email}</p>
          <button onClick={() => setEditMode(true)}>EDIT USER</button>
        </div>
      )}
    </div>
  );
}

export default User;
