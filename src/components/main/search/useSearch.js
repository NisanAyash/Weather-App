import { useSelector, useDispatch } from 'react-redux';
import { getLocationApi, getWeatherApi, getForecastApi } from '../../../redux/weather/weatherApi';

const useSearch = () => {
  const { places, loading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    dispatch(getLocationApi(e.target.value));
  };

  const handleSelected = (place) => {
    dispatch(getWeatherApi(place));
    dispatch(getForecastApi(place));
  };

  return { places, loading, handleChange, handleSelected };
};

export default useSearch;
