import PropTypes from 'prop-types';
import { Table, Th, Td, Tr, TableHead } from './TransactionHistory.styled';
export const TransitionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransitionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
