import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          
          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="relative">
                <img 
                  src="/images/logoConsultorio.png" 
                  alt="Logo A&D"
                  className="w-14 h-14 rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl"></div>
              </div>
              <div>
                <span className="text-3xl font-black font-display bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">
                  A&D
                </span>
                <div className="text-sm text-gray-300 font-medium -mt-1">
                  Consultorio Dental
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Cuidando tu sonrisa con profesionalismo, tecnología moderna 
              y un trato humano excepcional desde hace más de 5 años.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', id: 'inicio' },
                { label: 'Servicios', id: 'servicios' },
                { label: 'Profesionales', id: 'profesionales' },
                { label: 'Contacto', id: 'contacto' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Información</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-400" />
                <span className="text-sm">
                  Sarmiento 1253, Clorinda, Formosa
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faClock} className="text-primary-400" />
                <span className="text-sm">
                  Lun - Vie: 9:00-12:00 | 16:00-20:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            &copy; 2025 Consultorio Odontológico A&D. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2">
            Hecho con 
            <FontAwesomeIcon 
              icon={faHeart} 
              className="text-red-500 animate-heartbeat"
            /> 
            para tu sonrisa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
