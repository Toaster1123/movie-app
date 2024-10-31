import { Previev } from '../../components/movies/previev';
import { OptionsBar } from '../../components/movies/optionsBar';
import style from './movies.module.scss';

export const Movies = () => {
  return (
    <main>
      <Previev />
      <OptionsBar />
    </main>
  );
};
