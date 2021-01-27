import { NextPage } from 'next'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

const Home: NextPage = () => {
  return (
    <Title>My page</Title>
  )
}

export default Home
