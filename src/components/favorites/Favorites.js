import React from 'react';
import Container from '../common/container/Container';
import Col from '../common/col/Col';
import Text from '../common/text/Text';

import { useSelector, useDispatch } from 'react-redux';
import { changeCurrent } from '../../redux/weather/weatherSlice';
import { useHistory } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (favorite) => {
    const { location, weather, forecast } = favorite;
    dispatch(changeCurrent({ location, weather, forecast }));
    history.push('/');
  };

  return (
    favorites.length > 0 && (
      <Container
        dir="flex"
        padding="25px"
        margin="auto"
        height="80vh"
        maxWidth="80%"
        border="1px solid #9a58b2"
        radius="8px"
        wrap={'wrap'}
        justify="center"
        alignItems="center"
        overflow="auto"
      >
        {favorites.map((favorite) => (
          <Col
            key={favorite.id}
            dir="column"
            justify="space-evenly"
            alignItems="center"
            width="250px"
            height="300px"
            radius="8px"
            margin="10px"
            border="1px solid #ccc"
            padding="25px"
            onClick={() => handleClick(favorite)}
            style={{ cursor: 'pointer' }}
          >
            <Text size="2em" margin="15px 0">
              {favorite.locationName}
            </Text>
            <img
              src={`https://developer.accuweather.com/sites/default/files/${
                favorite.weather.WeatherIcon < 9
                  ? `0${favorite.weather.WeatherIcon}`
                  : favorite.weather.WeatherIcon
              }-s.png`}
              alt={favorite.weather.WeatherIcon}
            />
            <Text weight="500" size="1.2em">
              {favorite.weather.WeatherText}
            </Text>
            <Text weight="500">
              {favorite.weather.Temperature?.Metric.Value}
              {favorite.weather.Temperature?.Metric.Unit}
            </Text>
          </Col>
        ))}
      </Container>
    )
  );
};

export default Favorites;
