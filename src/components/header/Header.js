import React from 'react';
import Nav from './Nav';
import Container from '../common/container/Container';
import Text from '../common/text/Text';
import Switch from '@material-ui/core/Switch';

const Header = ({ setTheme }) => {
  return (
    <Container
      justify="space-between"
      alignItems="center"
      padding="0 25px"
      borderBottom="1px solid #9a58b2"
      margin="0 0 30px 0px"
    >
      <Text color="#9a58b2" size="1.5em" weight="500">
        Weather App
      </Text>
      <Nav />
      <Switch
        onChange={() => setTheme((cur) => !cur)}
        name="checkedA"
        style={{ color: '#9a58b2' }}
      />
    </Container>
  );
};

export default Header;
