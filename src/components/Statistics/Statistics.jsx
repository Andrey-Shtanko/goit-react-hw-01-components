import PropTypes from 'prop-types';
import {
  Container,
  StatList,
  StatListItem,
  StatValue,
  Title,
} from './Statisyics.styled';
export const Statistics = ({ stats, title }) => {
  //   const { id, label, percentage } = stats;
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <span>{label}</span>
            <StatValue>{percentage}%</StatValue>
          </StatListItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
