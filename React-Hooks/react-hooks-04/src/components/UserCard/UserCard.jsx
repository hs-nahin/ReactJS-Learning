// ✅ This is a reusable component receiving props
const UserCard = ({ user }) => {
  const { name, username, email, address } = user;

  return (
    <div className="border border-gray-300 rounded p-4 shadow-md">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-sm">{email}</p>
      <p className="text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
