import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './PageNotFound.module.scss';
import Button from '../../components/button/Button';

const PageNotFound: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className={style.component} data-testid="pageNotFound">
      <h2>404</h2>
      <p>
        <strong>UPS!!!</strong>
      </p>
      <p>
        <strong>Page not found</strong>
      </p>
      <p>
        <Button color="green" text="Bring me home" onClick={() => navigate('/')} />
      </p>
    </section>
  );
};

export default PageNotFound;
