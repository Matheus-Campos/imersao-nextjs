import { FC, useState, FormEvent } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { QuizBackground, QuizContainer, QuizLogo } from '@components/atoms';
import { Footer, GitHubCorner, NameForm } from '@components/molecules';
import { FullWidget } from '@components/organisms';

interface HomePageProps {
  title: string
  description: string
  githubProjectUrl: string
  backgroundImage: string
}

export const Home: FC<HomePageProps> = ({
  title,
  description,
  githubProjectUrl,
  backgroundImage,
}) => {
  const router = useRouter();
  const [name, setName] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <>
      <Head>
        <title>Quiz Metroid - Início</title>
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:title" content="Venha responder o quiz sobre Metroid!" />
      </Head>
      <QuizBackground backgroundImage={backgroundImage}>
        <QuizContainer>
          <QuizLogo />
          <FullWidget
            title={title}
            contents={[
              <p>{description}</p>,
              <NameForm
                name={name}
                onChangeName={(e) => setName(e.target.value)}
                onSubmit={onSubmit}
              />,
            ]}
          />

          <FullWidget
            contents={[
              <>
                <h1>Quizes da galera</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </>,
            ]}
          />
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl={githubProjectUrl} />
      </QuizBackground>
    </>
  );
};
