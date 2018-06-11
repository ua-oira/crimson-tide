import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from './Link.js'

const Cards = props => (
  <Deck>
    <div className="cards">
      <ul>{props.children}</ul>
    </div>
  </Deck>
)

const Card = props => (
  <li className="card">
    {props.image && (<div className="img">
      {<img src={props.image} alt="" />}
    </div>)}
    <div className="text">
      <h2>
        <Link to={props.link}>{props.title}</Link>
      </h2>
      <p>{props.text}</p>
      {props.children}
      {props.action && <span className="cta">{props.action}</span>}
    </div>
  </li>
)

export { Cards, Card }

Card.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.node,
}
Cards.propTypes = {
  children: PropTypes.node.isRequired,
}

const Deck = styled.div`
  .cards > ul {
    list-style: none;
    margin-left: 0;
  }

  .card + .card {
    margin-top: 1.5rem;
  }

  @supports (display: grid) {
    .cards > ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
      grid-column-gap: 1.5rem;
      grid-row-gap: 1.5rem;
    }

    .card + .card {
      margin-top: 0;
    }

    @media (max-width: 400px) {
      .cards > ul {
        grid-gap: 4.5rem;
      }
    }
  }

  .card {
    border: 1px solid;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .card .text {
    padding: 1rem;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }

  .card p {
    max-width: 60ch;
  }

  .card .img {
    height: 6.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));
  }

  .card .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card a {
    outline: none;
  }

  .card h2 a {
    text-decoration: none;
  }

  .card h2 a::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .card h2 a:focus {
    outline: none;
    text-decoration: underline;
  }
  .card h2:focus-within ~ .cta {
    box-shadow: 0 0 0 0.125rem;
  }

  .card:focus-within,
  .card:hover {
    border: 1px solid;
    box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);
  }

  .card:focus-within h2 a:focus {
    text-decoration: none;
  }

  .card small {
    display: block;
  }

  .card small a {
    position: relative;
    padding: 0.5rem 0.5rem 0.5rem 0;
  }

  .card small a:hover,
  .card small a:focus {
    font-weight: bold;
  }

  .card .text > * + * {
    margin-top: 0.75rem;
  }

  .card .text > :last-child {
    margin-top: auto;
    padding-top: 0.75rem;
  }

  .cta {
    padding: 0.75rem;
    border: 1px solid;
    border-radius: 0.25rem;
    text-align: center;
  }
`
