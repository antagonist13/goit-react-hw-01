import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"
export default function FriendList({ friends }) {
    console.log(friends[0].id)
    return <ul className={css.friendsList}>
        {/* Кількість li залежить від кількості об'єктів в масиві */}
        {friends.map(friend => (
            <li className={css.card} key={friend.id}>
                <FriendListItem friend={friend} />
            </li>
        ))}
	
</ul>
}
