import PropTypes from 'prop-types';

export default function FriendList({ children }) {
  return <ul className="friend-list">{children}</ul>;
};

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};