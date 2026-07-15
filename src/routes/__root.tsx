import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts
} from "@tanstack/react-router"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import styles from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Scroll To Top Bug" }
    ],
    links: [{ rel: "stylesheet", href: styles }]
  }),
  component: RootComponent
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
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
        <TanStackDevtools
          config={{ position: "bottom-left" }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />
            }
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
