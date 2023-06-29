import React from 'react';
import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';

const override = css`
  display: flex;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export default function Loader() {
  return (
    <PulseLoader
      css={override}
      size={20}
      margin={10}
      color={'#123abc'}
      speedMultiplier={1.5}
    />
  );
}