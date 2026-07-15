import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/card/$cardUrl")({
  component: CardPage
})

function CardPage() {
  const { cardUrl } = Route.useParams()

  return (
    <div className="flex flex-col items-start gap-4 p-8 font-sans">
      <Link to="/">← Back</Link>
      <img
        src={cardUrl}
        alt="MTG Card"
        className="w-[488px] max-w-full rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,.4)]"
      />
      <div className="max-w-[680px] leading-[1.7] text-[var(--color-fg-default)] opacity-85">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
          varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
          magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
          gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
          risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
          eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
          fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla
          a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis,
          neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing
          sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque
          nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus
          quis, laoreet et, pretium ac, nisi.
        </p>
        <p>
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
          magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
          molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
          augue congue elementum. Morbi in ipsum sit amet pede facilisis
          laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et,
          augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices
          enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar
          ullamcorper.
        </p>
        <p>
          Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
          aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
          venenatis tristique, dignissim in, ultrices sit amet, augue. Proin
          sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi
          lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus,
          accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium
          blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit,
          fermentum non, convallis id, sagittis at, neque.
        </p>
        <p>
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
          consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
          gravida non, commodo a, sodales sit amet, nisi. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In hac habitasse platea dictumst. Suspendisse dui. Aliquam
          erat volutpat. Fusce commodo aliquam arcu. Praesent nec erat at purus
          cursus dapibus. Vestibulum facilisis, purus nec pulvinar iaculis,
          ligula mi congue nunc, vitae euismod ligula urna in dolor. Cras id
          orci. Ut adipiscing. Sed ac orci. Donec posuere augue in quam. Etiam
          vel tortor sodales tellus ultricies commodo. Suspendisse potenti.
          Aenean in sem ac leo mollis blandit. Donec neque quam, dignissim in,
          mollis nec, sagittis eu, wisi.
        </p>
        <p>
          Fusce aliquam, nunc vitae aliquet lobortis, ipsum nibh faucibus justo,
          nec convallis ipsum nisl et lacus. Aliquam erat volutpat. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus.
        </p>
      </div>
    </div>
  )
}
