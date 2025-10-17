export default function About(){
    return (
        <div className="w-full md:w-4/5 transition-all duration-500 mx-auto px-4 flex flex-col bg-mid-800 dark:bg-mid-200 min-h-full border-l-3 border-l-primary border-r-3 border-r-primary-100 flex-grow">
  <div className="intro">
    <h1>About</h1>
    <p className="lede">
      <em>A Tale of Thorns</em> is a serialised story told in chapters. The work blends quiet,
      uneasy moments with sudden, sharp images – a character-driven narrative that
      favours texture and atmosphere.
    </p>
  </div>
  <hr />
  <div className="content">
    <section aria-labelledby="the-story">
      <h2 id="the-story">About the story</h2>
      <p>
        This is a long-form serial, released in short chapters that gradually build the
        world and its people. Expect passages that linger on language and mood alongside
        scenes that move the plot. The chapters are written to be read in order, though
        many contain small links and references that reward close attention.
      </p>
      <p className="note">
        New chapters are released on the 5th, 10th, 15th, 20th, 25th, and the last day of
        each month.
      </p>
    </section>

    <section aria-labelledby="the-author">
      <h2 id="the-author">About the author</h2>
      <p className="meta">
        Written by Terra Hyde. Her work has appeared under several names that reflect
        different periods and outlets of her writing and art.
      </p>

      <ul className="aliases">
        <li><strong>Vicious Elia Rayne</strong> — public art and visual projects</li>
        <li><strong>Tommy Harris</strong> (T. Harris, T.M. Harris) — earlier fiction and poetry</li>
        <li><strong>Terra Branford</strong> — essays and non-fiction</li>
      </ul>

      <p>
        These names are part of a personal history. For permissions or collaboration,
        please use the site's contact page.
      </p>
    </section>

    <section aria-labelledby="ownership">
      <h2 id="ownership">Content & permissions</h2>
      <p>
        The chapters and assets on this site are the author's work and are protected by
        copyright unless a specific license is stated for a file. To request reuse or
        adaptation, please get in touch with details about the intended use.
      </p>
    </section>

    <section aria-labelledby="reading">
      <h2 id="reading">How to read</h2>
      <p>
        Each chapter is written to be satisfying on its own; however, reading in sequence gives the clearest
        experience.
      </p>
    </section>
  </div>
  <hr />
  <div className="outro">
    <p className="meta">This page last updated: 2025-10-17.</p>
  </div>
</div>
    )
}