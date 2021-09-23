import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ children }) {
  return <ul className={s.friendList}>{children}</ul>;
}

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};
