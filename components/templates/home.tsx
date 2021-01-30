import { FC } from 'react'
import Head from 'next/head'

import { QuizBackground, QuizContainer, QuizLogo } from '@components/atoms'
import { Footer, GitHubCorner } from '@components/molecules'
import { FullWidget } from '@components/organisms'

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
  backgroundImage
}) => {
  return (
    <>
      <Head>
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:title" content="Venha responder o quiz sobre Metroid!" />
      </Head>
      <QuizBackground backgroundImage={backgroundImage}>
        <QuizContainer>
          <QuizLogo />
          <FullWidget
            title={title}
            contents={[
              <p>{description}</p>
            ]}
          />

          <FullWidget
            contents={[
              <>
                <h1>Quizes da galera</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </>
            ]}
          />
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl={githubProjectUrl} />
      </QuizBackground>
    </>
  )
}
