import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTooth, 
  faTeeth, 
  faSmileBeam, 
  faSyringe, 
  faBrush, 
  faXRay,
  faChild
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      icon: faTooth,
      title: "Consultas Generales",
      description: "Evaluación completa de tu salud bucal con diagnóstico profesional y plan de tratamiento personalizado.",
      features: ["Diagnóstico digital", "Plan personalizado"],
      featured: false
    },
    {
      icon: faTeeth,
      title: "Ortodoncia",
      description: "Corrección dental con brackets tradicionales y estéticos, alineadores invisibles para todas las edades.",
      features: ["Brackets estéticos", "Alineadores invisibles"],
      featured: false
    },
    {
      icon: faSmileBeam,
      title: "Blanqueamiento",
      description: "Tratamientos profesionales para lograr una sonrisa más blanca y luminosa de forma segura.",
      features: ["Resultados inmediatos", "100% seguro"],
      featured: false
    },
    {
      icon: faSyringe,
      title: "Implantes Dentales",
      description: "Reemplazo de piezas dentales perdidas con implantes de titanio y tecnología de vanguardia.",
      features: ["Tecnología 3D", "Titanio premium"],
      featured: false
    },
    {
      icon: faBrush,
      title: "Limpieza Profesional",
      description: "Profilaxis dental profunda para eliminar placa bacteriana y mantener tus encías saludables.",
      features: ["Ultrasonido", "Fluorización"],
      featured: false
    },
    {
      icon: faXRay,
      title: "Endodoncia",
      description: "Tratamiento de conductos radiculares para preservar piezas dentales dañadas o infectadas.",
      features: ["Microscopía", "Sin dolor"],
      featured: false
    },
    {
      icon: faTeeth,
      title: "Prótesis Dentales",
      description: "Soluciones protésicas fijas y removibles para restaurar función y estética dental.",
      features: ["Materiales premium", "Diseño personalizado"],
      featured: false
    },
    {
      icon: faChild,
      title: "Odontopediatría",
      description: "Atención especializada para niños en un ambiente cómodo y divertido que les genere confianza.",
      features: ["Ambiente lúdico", "Técnicas especiales"],
      featured: false
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold">
              ✨ Servicios Profesionales
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 font-display leading-tight">
            Tratamientos de <span className="highlight">Excelencia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Ofrecemos una amplia gama de servicios odontológicos con la más alta calidad 
            y tecnología moderna para cuidar tu salud bucal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
                service.featured 
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white' 
                  : 'bg-white border border-primary-100 hover:border-primary-300'
              }`}
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                service.featured 
                  ? 'bg-white/20 group-hover:bg-white/30' 
                  : 'bg-primary-50 group-hover:bg-primary-100'
              }`}>
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className={`text-3xl transition-colors ${
                    service.featured ? 'text-white' : 'text-primary-600'
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-4 font-display ${
                service.featured ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed font-medium ${
                service.featured ? 'text-white/90' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex}
                    className={`text-xs font-bold px-3 py-2 rounded-full transition-all ${
                      service.featured 
                        ? 'bg-white/20 text-white hover:bg-white/30' 
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Decorative element */}
              {service.featured && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
