import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faClock, 
  faPhoneAlt, 
  faCalendarPlus,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Dirección",
      content: ["Sarmiento 1253, Clorinda", "Formosa, Argentina"]
    },
    {
      icon: faClock,
      title: "Horarios de Atención",
      content: ["Lunes a Viernes", "9:00 - 12:00 | 16:00 - 20:00"]
    },
    {
      icon: faPhoneAlt,
      title: "Contacto Directo",
      content: ["Sistema de reserva online", "Disponible 24/7"]
    }
  ];

  const doctors = [
    {
      name: "Dra. Alejandra Baigorri",
      title: "Odontóloga General",
      image: "/images/pictureDra.Alejandra.jpeg",
      url: "/turnosAlejandra.html"
    },
    {
      name: "Dra. Daniela Cabrera",
      title: "Odontóloga General", 
      image: "/images/pictureDra.Daniela.jpeg",
      url: "/turnosDaniela.html"
    }
  ];

  const handleAppointment = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <div>
            <div className="text-left mb-8">
              <div className="inline-block mb-6">
                <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  ✨ Contacto
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-display leading-tight">
                Reservá tu <span className="highlight">Cita</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Estamos aquí para cuidar tu sonrisa. Contactanos y agenda tu cita 
                con nuestros profesionales especializados.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 mt-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-15 h-15 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2 text-lg">
                      {item.title}
                    </h4>
                    {item.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Section */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Agenda tu Cita
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Selecciona a tu profesional de preferencia y reservá tu turno 
                de manera rápida y sencilla.
              </p>

              {/* Doctor Options */}
              <div className="space-y-6 mb-8">
                {doctors.map((doctor, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-12 h-12 rounded-full object-cover object-top"
                      />
                      <div>
                        <h4 className="text-gray-900 font-semibold">
                          {doctor.name}
                        </h4>
                        <span className="text-gray-500 text-sm">
                          {doctor.title}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleAppointment(doctor.url)}
                      className="btn-appointment"
                    >
                      <FontAwesomeIcon icon={faCalendarPlus} />
                      Reservar Turno
                    </button>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="flex items-center gap-3 p-4 bg-accent-50 rounded-xl text-gray-700">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-accent-500" />
                <span className="text-sm">
                  Para urgencias, contactá directamente al consultorio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
