import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'Jhon Marlton',
    age: 32,
    address: 'New York',
  },
  {
    key: '2',
    name: 'Carl Jhonson',
    age: 42,
    address: 'Los Santos',
  },
  {
    key: '3',
    name: 'Arthut Morgan',
    age: 32,
    address: 'Mexico',
  },
];

const TableComponent: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default TableComponent;
