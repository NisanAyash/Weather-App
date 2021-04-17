import React from 'react';

import styled from 'styled-components';

const SRow = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  overflow: ${({ overflow }) => overflow};
`;

const Row = (props) => {
  return <SRow {...props} />;
};

export default Row;
