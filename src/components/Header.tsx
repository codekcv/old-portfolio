import React from "react"
import styled from "styled-components"

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      <h2 className="portfolio">{`<Portfolio />`}</h2>
      <h1>{`Hey, I'm Christian ;)`}</h1>
      <h2>
        {`A Full Stack Developer specializing in ReactJS and its environment.`}
      </h2>
      <h3>ReactJS | Redux | GraphQL | Apollo | GatsbyJS | TypeScript</h3>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  margin-top: 50px;

  text-align: center;

  .portfolio {
    color: aquamarine;
  }

  h1 {
    /* text-align: center; */
    font-size: 125px;
  }
`
