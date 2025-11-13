const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured online store with shopping cart, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates and team collaboration features.',
      tech: ['React', 'TypeScript', '.NET Core'],
      image: '📋',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Data visualization platform with interactive charts and real-time data processing.',
      tech: ['React', 'Python', 'SQLite'],
      image: '📊',
    },
    {
      title: 'API Gateway Service',
      description:
        'Microservices architecture with authentication, rate limiting, and request routing.',
      tech: ['.NET Core', 'Docker', 'Redis'],
      image: '🔌',
    },
    {
      title: 'Mobile Web App',
      description:
        'Responsive progressive web application with offline capabilities and push notifications.',
      tech: ['React', 'PWA', 'Service Workers'],
      image: '📱',
    },
    {
      title: 'Content Management System',
      description:
        'Custom CMS with rich text editor, media management, and role-based access control.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '📝',
    },
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique
            challenge and solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

