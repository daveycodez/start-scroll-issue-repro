import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

import "../styles.css"

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <>
      <div className="sticky top-0 flex gap-2 p-2 text-lg bg-white/67">
        <Link
          to="/"
          activeProps={{
            className: "font-bold"
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/about"
          activeProps={{
            className: "font-bold"
          }}
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}
