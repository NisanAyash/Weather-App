import React from 'react';
import { BsSun, BsMoon, BsHeartFill } from 'react-icons/bs';
import Text from '../../common/text/Text';
import { IconButton } from '@material-ui/core/';
import Row from '../../common/row/Row';
import Col from '../../common/col/Col';
import date from '../../../utils/date';
import { handleFavorite } from '../../../redux/weather/weatherSlice';
import { useDispatch } from 'react-redux';

const Head = ({ current, favorites }) => {
  const dispatch = useDispatch();

  const existInFavorite = favorites.some(
    (favorite) => favorite.location.Key === current.location.Key
  );

  const handleClick = () => {
    dispatch(handleFavorite(current));
  };

  return (
    <Row alignItems="center" height="30%" style={{ borderBottom: '1px solid #ccc' }}>
      <Col flex={'5%'} margin="0 15px">
        {current.weather.IsDayTime ? (
          <BsSun size="4em" color="orange" />
        ) : (
          <BsMoon size="4em" color="#91A3B0" />
        )}
      </Col>
      <Col flex={'70%'} dir="column">
        <Text size=".8em" margin="10px 0">
          {date.isFulldate(current.weather.LocalObservationDateTime)}
        </Text>
        <Text size="2em" color="#9a58b2" weight="700">
          {current.location.LocalizedName}
        </Text>
        <Text>{current.weather.WeatherText}</Text>
        <Text>
          {current.weather.Temperature?.Metric.Value}
          {current.weather.Temperature?.Metric.Unit} {current.weather.Temperature?.Imperial.Value}
          {current.weather.Temperature?.Imperial.Unit}
        </Text>
      </Col>
      <Col flex="10%" justify="flex-end">
        <IconButton onClick={handleClick}>
          <BsHeartFill color={existInFavorite ? '#ff0005' : '#ccc'} style={{ cursor: 'pointer' }} />
        </IconButton>
      </Col>
    </Row>
  );
};

export default Head;

// !favorites.some(
//   (fav) => fav.location.Key === current.location.Key
// )
//   ? "#ccc"
//   : "red"
