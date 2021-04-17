import React from 'react';
import Col from '../../common/col/Col';
import Row from '../../common/row/Row';
import Text from '../../common/text/Text';
import date from '../../../utils/date';
import { v4 as uuidv4 } from 'uuid';

function Forecast({ current }) {
  return (
    <Row
      alignItems="center"
      justify="space-around"
      height="70%"
      wrap="wrap"
      overflow="auto"
      margin="25px 0"
    >
      {current.forecast.length > 0 &&
        current.forecast.map((f) => (
          <Col
            key={uuidv4()}
            dir="column"
            justify="center"
            alignItems="center"
            width="250px"
            radius="8px"
            margin="10px"
            border="1px solid #ccc"
            padding="25px"
          >
            <img
              src={`https://developer.accuweather.com/sites/default/files/${
                f.Day.Icon < 9 ? `0${f.Day.Icon}` : f.Day.Icon
              }-s.png`}
              alt={f.Day.IconPhrase}
            />
            <Text size="2em" margin="15px 0">
              {date.isDay(f.Date)}
            </Text>
            <Text weight="500" size="1.2em">
              {f.Day.IconPhrase}
            </Text>
            <Text weight="500">
              Min: {f.Temperature.Minimum.Value}
              {f.Temperature.Minimum.Unit} Max: {f.Temperature.Maximum.Value}
              {f.Temperature.Maximum.Unit}
            </Text>
          </Col>
        ))}
    </Row>
  );
}

export default React.memo(Forecast);
