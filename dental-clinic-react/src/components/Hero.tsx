import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarCheck, 
  faInfoCircle, 
  faMapMarkerAlt,
  faTooth,
  faSmileBeam,
  faTeeth
} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with Modern Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600"></div>
      <div className="absolute inset-0 bg-[url('/images/background_header.jpg')] bg-cover bg-center opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-400/20 rounded-full blur-lg floating"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary-400/15 rounded-full blur-2xl pulse-gentle"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-primary-300/25 rounded-full blur-md rotate-slow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="text-white text-center lg:text-left fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/30">
              ✨ Consultorio Odontológico
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-shadow-lg">
            Tu Sonrisa
            <span className="block highlight text-6xl md:text-7xl lg:text-8xl font-black mt-2">
              Perfecta
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-4 opacity-90">
              Nos Importa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-medium leading-relaxed">
            Experiencia de más de <span className="font-bold text-white">+15 años</span> cuidando tu salud dental con la más alta calidad y tecnología de vanguardia.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
            <button 
              onClick={() => scrollToSection('profesionales')}
              className="group relative px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FontAwesomeIcon icon={faCalendarCheck} />
                Reservar Cita
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('servicios')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                <FontAwesomeIcon icon={faInfoCircle} />
                Ver Servicios
              </span>
            </button>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                +15
              </div>
              <div className="text-sm text-white/80 font-semibold">
                Años de Experiencia
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                2500+
              </div>
              <div className="text-sm text-white/80 font-semibold">
                Pacientes Satisfechos
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-sm text-white/80 font-semibold">
                Resultados Garantizados
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Content */}
        <div className="text-center lg:text-right slide-in-right">
          <div className="relative inline-block">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-400 to-secondary-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity floating"></div>
            
            {/* Main Card */}
            <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <FontAwesomeIcon 
                    icon={faTooth} 
                    className="text-6xl text-white drop-shadow-lg floating" 
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Tecnología Avanzada
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Equipos de última generación para tratamientos indoloros y resultados excepcionales.
              </p>
              
              {/* Feature Icons */}
              <div className="flex justify-center gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <FontAwesomeIcon icon={faSmileBeam} className="text-white text-xl" />
                </div>
                <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center group-hover:bg-secondary-500/30 transition-colors">
                  <FontAwesomeIcon icon={faTeeth} className="text-white text-xl" />
                </div>
                <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center group-hover:bg-accent-500/30 transition-colors">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
