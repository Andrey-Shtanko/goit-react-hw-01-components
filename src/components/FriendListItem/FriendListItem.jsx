import PropTypes from 'prop-types';
import {
  Card,
  Online,
  Offline,
  CardAvatar,
  UserName,
} from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      {isOnline ? <Online></Online> : <Offline></Offline>}

      <CardAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Card>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
