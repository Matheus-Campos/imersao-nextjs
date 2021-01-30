import { NextPage } from 'next';
import { Home as HomeTemplate } from '@components/templates';

import db from '../db';

const Home: NextPage = () => (
  <HomeTemplate
    backgroundImage={db.bg}
    githubProjectUrl="https://github.com/Matheus-Campos"
    title={db.title}
    description={db.description}
  />
);

export default Home;
