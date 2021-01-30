import { NextPage } from 'next'
import {
  QuizContainer,
  Widget,
  WidgetContent,
  WidgetHeader,
  QuizBackground,
  QuizLogo
} from '@components/atoms'
import { Footer, GitHubCorner } from '@components/molecules'

import db from '../db'

const Home: NextPage = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <WidgetHeader>
            <h1>{db.title}</h1>
          </WidgetHeader>
          <WidgetContent>
            <p>{db.description}</p>
          </WidgetContent>
        </Widget>

        <Widget>
          <WidgetContent>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </WidgetContent>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Matheus-Campos" />
    </QuizBackground>
  )
}

export default Home
