import React from 'react';

import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  max-width: ${({ maxWidth }) => maxWidth};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-radius: ${({ radius }) => radius};
  flex-wrap: ${({ wrap }) => wrap};
  overflow: ${({ overflow }) => overflow};
`;

const Container = (props) => {
  return <SContainer {...props} />;
};

export default Container;
