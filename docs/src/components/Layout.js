import * as React from 'react'

import { main } from './Layout.module.css'

const Layout = ({ children }) => (
  <main className={main}>
    {children}
  </main>
)

export default Layout;
