import React from 'react';
import AvatarComponent from '../Components/Avatar';
import Calendar from '../Components/Calendar';
import Grid from '../Components/Grid';
import Rate from '../Components/Rate';
import Result from '../Components/Result';
import Upload from '../Components/Upload';

const ComponentsPage: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ flex: '0 0 100px' }}>
        <AvatarComponent />
      </div>
      <div style={{ flex: 1 }}>
        <Calendar />
      </div>
    </div>
    <Grid />
    <Rate />
    <Result />
    <Upload />
  </div>
);

export default ComponentsPage;
