const UserCard = ({ user }) => {
  return (
    <div className="mb-4 p-4 shadow-md border rounded bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
}

export default UserCard;
