import { LinkCard } from "@/components/LinkCard"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-6 pt-6">
        <h2 className="text-3xl font-black mx-auto">Tools</h2>
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl">
          <LinkCard
            href="/format"
            title="Format it!"
            description={
              <div>
                <p>Format your code text.</p>
                <p>Powered by Monaco Editor.</p>
              </div>
            }
          />
          <LinkCard
            href="/diff"
            title="Diff it!"
            description={
              <div>
                <p>Compare two code texts side by side.</p>
                <p>Powered by Monaco Editor.</p>
              </div>
            }
          />
          <LinkCard
            href="/count"
            title="Count it!"
            description={
              <div>
                <p>Count words, characters, lines, and more.</p>
              </div>
            }
          />
        </div>
      </section>
    </main>
  )
}
