import React from "react";

const UserTable = props => {
  const { users, deleteUser, editRow } = props;

  const handleDeleteUser = id => {
    const answer = window.confirm("Are you sure?");

    if (answer) {
      deleteUser(id);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => {
                    editRow(user);
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export { UserTable };
