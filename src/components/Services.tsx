const Services = () => {
  const services = [
    {
      name: 'Web Development',
      price: '¥8,000',
      period: '/project',
      features: [
        'Custom web application',
        'Responsive design',
        'Modern UI/UX',
        '3-4 weeks delivery',
        '1 month support',
      ],
      popular: false,
    },
    {
      name: 'Full-Stack Development',
      price: '¥15,000',
      period: '/project',
      features: [
        'Complete web application',
        'Frontend + Backend',
        'Database design',
        'API development',
        '6-8 weeks delivery',
        '3 months support',
      ],
      popular: true,
    },
    {
      name: 'API Development',
      price: '¥5,000',
      period: '/project',
      features: [
        'RESTful API design',
        'Database integration',
        'Authentication & Security',
        'API documentation',
        '2-3 weeks delivery',
        '1 month support',
      ],
      popular: false,
    },
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services & Pricing
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparent pricing for all your development needs. Custom quotes
            available for larger projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 relative transform transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? 'border-2 border-indigo-600 scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-indigo-600">
                  {service.price}
                </span>
                <span className="text-gray-600 ml-2">{service.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  service.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need something custom? Let's discuss your project requirements.
          </p>
          <a
            href="#contact"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Contact me for a custom quote →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services

