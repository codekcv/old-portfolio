import React from "react"
import styled from "styled-components"
import { FaGithub, FaTwitter, FaYoutube, FaFreeCodeCamp } from "react-icons/fa"

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      <h2 className="portfolio">{`<Portfolio />`}</h2>
      <h5>Under Construction</h5>
      <h1>{`hi, i'm ian ;)`}</h1>
      <h2>A Full Stack Developer specializing in:</h2>
      <h3>
        [ <span className="reactjs">ReactJS</span> +{" "}
        <span className="nodejs">NodeJS</span> +{" "}
        <span className="graphql">GraphQL</span> +{" "}
        <span className="typescript">TypeScript</span> ]
      </h3>
      <h1>
        <FaGithub size={50} color="gray" /> <FaTwitter size={50} color="gray" />{" "}
        <FaYoutube size={50} color="gray" />{" "}
        <FaFreeCodeCamp size={50} color="gray" />
      </h1>
      {/* <h3>ReactJS | Redux | GraphQL | Apollo | GatsbyJS | TypeScript</h3> */}
      <br />
      <hr />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding-top: 35px;

  text-align: center;
  background: palegoldenrod;

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

  h2,
  h3 {
    color: darkslategray;
  }
`
