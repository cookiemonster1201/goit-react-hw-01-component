export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? (
        <span class="status-online"></span>
      ) : (
        <span class="status-offline"></span>
      )}
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </>
  );
}
