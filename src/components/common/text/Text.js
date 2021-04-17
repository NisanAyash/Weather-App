import React from 'react';
import styled from 'styled-components';

const SText = styled.p`
  font-size: ${(p) => p.size};
  color: ${(p) => p.color};
  font-weight: ${(p) => p.weight};
  margin: ${(p) => (p.margin ? p.margin : '0')};
`;

const Text = ({ children, size, color, weight, margin }) => {
  return (
    <SText size={size} color={color} weight={weight} margin={margin}>
      {children}
    </SText>
  );
};

export default Text;
