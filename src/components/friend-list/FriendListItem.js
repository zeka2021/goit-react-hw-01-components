export default function FriendListItem( { avatar, name, isOnLine } ) {
    return (
    <li className="item">
    <span  className="status"></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
</li>
)
}