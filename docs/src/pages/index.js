import * as React from "react"
import Glyph from '../components/Glyph'
import Layout from "../components/Layout"

// data
const glyphsSets = [
  {
    title: "Networks",
    glyphs: [
      "kusama",
      "polkadot",
      "westend",
      "substrate",
      "rococo",
      "kulupu",
      "statemine",
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
  <Layout>
    <h1>Web3-Regular</h1>
    {glyphsSets.map(set => (
      <div key={set.title}>
        <h2>
          {set.title}
        </h2>
        {set.glyphs && set.glyphs.map(glyph => <Glyph glyph={glyph} key={glyph} />)}
      </div>
    ))}
  </Layout>
)

export default IndexPage
