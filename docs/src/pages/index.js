import * as React from "react"
import Glyph from '../components/Glyph'
import Nav from "../components/Nav"
import "./index.css"

// data
const glyphsSets = [
  {
    title: "Networks",
    glyphs: [
      "polkadot",
      "kusama",
      "acala",
      "westend",
      "rococo",
      "kulupu",
      "frequency",
      "statemine",
      "substrate",
    ]
  },
  {
    title: "Actors",
    glyphs: [
      "account",
      "accounts",
      "validator",
      "validators",
      "nominator",
      "nominators",
      "to",
      "block",
    ]
  },
]

// markup
const IndexPage = () => (
  <>
    <Nav />
    <h1>Web3-Regular</h1>
    <h3 className="o5">Icon font</h3>
    <p>
      Web3-Regular is a toy-project. It's a collection of logos and icons for things Web3 in <code>otf</code>, <code>woff</code> and <code>woff2</code> formats.
      <br/>
      It's a personal everyday itch-scratcher and a playground to learn <a href="https://glyphsapp.com/" target="_blank">Glyphs</a> font design software and what this hot <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> js framework is all about simultaneously.
      <br />
      _
      <br />
      <br />
    </p>
    {glyphsSets.map(set => (
      <div key={set.title}>
        <div className="overline">
          {set.title}
        </div>
        {set.glyphs && set.glyphs.map(glyph => <Glyph glyph={glyph} key={glyph} />)}
      </div>
    ))}
  </>
)

export default IndexPage
