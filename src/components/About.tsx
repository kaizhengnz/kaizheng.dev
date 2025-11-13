const About = () => {
  const skills = [
    'React & TypeScript',
    'Node.js & .NET Core',
    'SQLite & PostgreSQL',
    'Tailwind CSS',
    'RESTful APIs',
    'Git & CI/CD',
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm an independent software developer with a passion for creating
              elegant, efficient, and user-friendly applications. With expertise
              in both frontend and backend development, I bring ideas to life
              through clean code and modern technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you need a complete web application, API development, or
              help improving an existing project, I'm here to help you achieve
              your goals. I work closely with clients to understand their needs
              and deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What I Do
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Full-stack web development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Custom API design and implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Database design and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>UI/UX implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Code review and refactoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

