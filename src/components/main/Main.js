import React from 'react';
import Container from '../common/container/Container';
import Head from './board/Head';
import Forecast from './board/Forecast';
import Search from './search/Search';
import Spinner from '../common/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { BiSad } from 'react-icons/bi';

const Main = () => {
  const { current, loading, error, favorites } = useSelector((state) => state.weather);

  return (
    <>
      <Search />
      <Container
        dir="column"
        padding="25px"
        margin="0 auto"
        height="60vh"
        maxWidth="80%"
        border="1px solid #9a58b2"
        radius="8px"
        justify="space-around"
        alignItems="space-around"
      >
        {loading ? (
          <span style={{ alignSelf: 'center' }}>
            <Spinner />
          </span>
        ) : Object.keys(current.location).length > 0 &&
          Object.keys(current.weather).length > 0 &&
          current.forecast.length > 0 ? (
          <>
            <Head current={current} favorites={favorites} />
            <Forecast current={current} />
          </>
        ) : (
          error && <BiSad size="4em" color="#9a58b2" style={{ alignSelf: 'center' }} />
        )}
      </Container>
    </>
  );
};

export default Main;
