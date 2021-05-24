import React from "react";
import User from "./User";

function UsersList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  const handleUserUpdate = (userToEdit) => {
    const newUserList = users.map((item) =>
      item.id === userToEdit.id ? userToEdit : item
    );

    setUsers(newUserList);
  };

  return (
    <div>
      {users.map((item) => (
        <User key={item.id} {...item} handleUserUpdate={handleUserUpdate} />
      ))}
    </div>
  );
}

export default UsersList;
