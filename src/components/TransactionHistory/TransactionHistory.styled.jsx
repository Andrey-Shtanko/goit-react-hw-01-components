import styled from '@emotion/styled';

export const Table = styled.table`
  border: 1px solid #1c6ea4;
  background-color: white;
  width: 50%;
  text-align: center;
  border-collapse: collapse;
  color: dimgray;
`;

export const Th = styled.th`
  border: 1px solid #aaaaaa;
  padding: 10px 10px;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  border-left: 2px solid #d0e4f5;
`;

export const Td = styled.td`
  border: 1px solid #aaaaaa;
  padding: 10px 10px;
  font-size: 13px;
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background: #d0e4f5;
  }
`;

export const TableHead = styled.thead`
  background: deepskyblue;
  border-bottom: 2px solid #444444;
`;
