import React from "react"
import styled from "styled-components"
import { FaGithub, FaTwitter, FaYoutube, FaFreeCodeCamp } from "react-icons/fa"

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      {/* <h2 className="portfolio">{`<Portfolio />`}</h2>
      <h5>Under Construction</h5> */}
      <h1>{`hi, i'm ian ;)`}</h1>
      <h2>A Full Stack Developer specializing in:</h2>
      <h3>
        [{" "}
        <a
          className="reactjs"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJS
        </a>{" "}
        +{" "}
        <a
          className="nodejs"
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NodeJS
        </a>{" "}
        +{" "}
        <a
          className="graphql"
          href="https://graphql.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraphQL
        </a>{" "}
        +{" "}
        <a
          className="typescript"
          href="https://typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>{" "}
        ]
      </h3>
      <br />
      <h4>View Complete Technology Stack</h4>
      <h5>Utilizing only the latest & greatest web technologies</h5>
      <h1>
        <FaGithub size={50} color="gray" /> <FaTwitter size={50} color="gray" />{" "}
        <FaYoutube size={50} color="gray" />{" "}
        <FaFreeCodeCamp size={50} color="gray" />
      </h1>
      <h3>Stuff1 | Stuff2 | Stuff3 | Stuff4 | Stuff5 | Stuff5</h3>
      <br />
      <hr />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding-top: 35px;

  text-align: center;
  background: palegoldenrod;
  color: darkslategray;

  a {
    text-decoration: none;
  }

  .bracket {
    color: gold;
  }
  .portfolio {
    color: aquamarine;
  }

  .reactjs {
    color: deepskyblue;
  }

  .nodejs {
    color: mediumspringgreen;
  }

  .graphql {
    color: hotpink;
  }

  .typescript {
    color: royalblue;
  }

  h1 {
    /* text-align: center; */
    font-size: 125px;
    text-shadow: 3px 3px 0px gray;
    /* color: palevioletred; */
    color: goldenrod;
    padding-bottom: 10px;
  }
`
