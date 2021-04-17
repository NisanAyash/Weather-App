import React from 'react';

import styled from 'styled-components';

const SCol = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ dir }) => dir};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: ${(border) => border};
  border-radius: ${({ radius }) => radius};
`;

const Col = (props) => {
  return <SCol {...props} />;
};

export default Col;
