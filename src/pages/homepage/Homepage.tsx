import { FC, useRef, useState, useEffect } from 'react';
import Button from '../../components/button';
import Card from '../../components/card';
import useDispatch from '../../utils/hooks/useDispatch';
import useSelector from '../../utils/hooks/useSelector';
import { addSelectedName } from '../../store/namesSlice';
import getStaticticRandomName from '../../utils/functions/getStaticticRandomName';
import style from './Homepage.module.scss';

const Homepage: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const femaleNames = useSelector(state => state.names.femaleNames);
  const maleNames = useSelector(state => state.names.maleNames);
  const selectedName = useSelector(state => state.names.selectedName);
  const isLoading = useSelector(state => state.names.loading);
  const isUnsuccessful = useSelector(state => state.names.isUnsuccessful);
  const message = useSelector(state => state.names.message);
  const genderColor = useRef<'blue' | 'pink' | undefined>(undefined);

  const [showCard, setShowCard] = useState<boolean>(false);

  // useEffect(() => {
  //   if (femaleNames.length === 0 && maleNames.length === 0) dispatch(getNamesList());
  // }, []);

  useEffect(() => {
    const timer = setTimeout((): void => {
      if (selectedName.length > 0) setShowCard(true);
    }, 250);
    return () => clearTimeout(timer);
  }, [selectedName]);

  const handleClickGetName = (names: string[][], color: 'pink' | 'blue' | undefined): void => {
    setShowCard(false);
    genderColor.current = color;
    const randomName: string[] = getStaticticRandomName(names);
    dispatch(addSelectedName(randomName));
  };

  return (
    <section className={style.component} data-testid="homepage">
      <div className={style.component__colLeft}>
        <div>
          <h1>Struggling for a baby name?</h1>
          <h2>Try baby name generator for inspiration!</h2>
        </div>
        {maleNames.length && (
          <Button
            color="blue"
            text="Baby Boy"
            onClick={() => handleClickGetName(maleNames, 'blue')}
          />
        )}
        {femaleNames.length && (
          <Button
            color="pink"
            text="Baby Girl"
            onClick={() => handleClickGetName(femaleNames, 'pink')}
          />
        )}
      </div>
      <div
        className={`${style.component__colRight} ${
          genderColor.current && style[genderColor.current]
        }`}
      >
        {isLoading && <p>Loading ...</p>}
        {isUnsuccessful && <p>{message}</p>}
        <Card title={selectedName[0]} show={showCard} />
      </div>
    </section>
  );
};

export default Homepage;
