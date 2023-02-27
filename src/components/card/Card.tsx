import { FC, memo } from 'react';
import style from './Card.module.scss';
import Props from './Card.types';

const Card: FC<Props> = ({ title, show = true }: Props): JSX.Element => (
  <section className={`${style.component} ${show && style.show}`} data-testid="card">
    <div className={style.component__title}>{title}</div>
  </section>
);

export default memo(Card);
