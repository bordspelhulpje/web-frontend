import { FunctionComponent, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FunctionComponent = () => (
  <main className="content container">
    <Suspense fallback={<Fallback />}>
      <Outlet />
    </Suspense>
  </main>
)

const Fallback: FunctionComponent = () => <p>Een momentje geduld...</p>
