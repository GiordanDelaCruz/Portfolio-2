export default function Home() {
  return (
    <div className="space-y-20">
      {/* About Me */}
      <section id="about">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi, I'm Giordan, a software developer with a background in Computer
          Engineering and a passion for building digital experiences that
          connect people.
        </p>
        <br />
        <p className="text-grey-700 leading-relaxed">
          My journey into tech started with curiosity — tinkering with code,
          experimenting with web design, and pushing myself to turn ideas into
          something tangible. Over the years, I've worked with startups, media
          companies, and freelance clients, all of which shaped the way I
          approach development: not just as code, but as a tool for solving real
          problems.
        </p>
        <p className="text-grey-700 leading-relaxed"></p>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-gray-700 leading-relaxed">
          Over the years, I've worked with startups, media companies, and
          freelance clients to build software solutions that solve real-world
          problems. My experience spans frontend development, backend systems,
          and teaching coding to students of all ages.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-4 border rounded-lg hover:shadow-sm transition">
            <h3 className="font-medium">Genshinpedia</h3>
            <img src="/genshinpedia.png" alt="" />
            <p className="text-gray-700 text-sm">
              A React + Node app for exploring Genshin Impact characters with
              dynamic routing and API integration.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-sm transition">
            <h3 className="font-medium">Todo List</h3>
            <img src="/to-do-list-ganyu-4.png" alt="" />
            <p className="text-gray-700 text-sm">
              A freelance project for a medical clinic, optimized for SEO and
              built with SquareSpace plus custom code blocks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
