import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Professionals = () => {
  const professionals = [
    {
      id: 1,
      name: "Dra. Maria Alejandra Baigorri",
      title: "Especialista en Odontología General",
      image: "/images/pictureDra.Alejandra.jpeg",
      description: "Especialista en Odontología General, Diplomatura en Rehabilitación Oral. Implantología y Prótesis. Estética dental.",
      specialties: ["Rehabilitación Oral", "Implantología", "Prótesis", "Estética Dental"],
      appointmentUrl: "/turnosAlejandra.html"
    },
    {
      id: 2,
      name: "Dra. Daniela Andrea Cabrera",
      title: "Especialista en Ortodoncia y Ortopedia",
      image: "/images/pictureDra.Daniela.jpeg",
      description: "Especialista en Ortodoncia y Ortopedia de los Maxilares, Odontopediatría. Estética dental.",
      specialties: ["Ortodoncia", "Ortopedia Maxilar", "Odontopediatría", "Estética Dental"],
      appointmentUrl: "/turnosDaniela.html"
    }
  ];

  const handleAppointment = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="profesionales" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold">
              ✨ Nuestro Equipo
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 font-display leading-tight">
            Profesionales de <span className="highlight">Excelencia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Contamos con un equipo de odontólogos especializados, comprometidos 
            con brindar la mejor atención y cuidado dental personalizado.
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {professionals.map((professional) => (
            <div key={professional.id} className="group relative h-full">
              {/* Background Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl h-full flex flex-col">
                
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-200 to-secondary-200 rounded-full blur-3xl opacity-30 -translate-y-16 translate-x-16"></div>
                
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={professional.image} 
                    alt={professional.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Professional Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-bold text-primary-600">✨ Especialista</span>
                    </div>
                  </div>
                  
                  {/* Appointment Button */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button 
                      onClick={() => handleAppointment(professional.appointmentUrl)}
                      className="bg-white/95 backdrop-blur-sm hover:bg-white text-primary-600 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 flex-grow flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-display">
                      {professional.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400"></div>
                      <span className="text-primary-600 font-semibold text-lg">
                        {professional.title}
                      </span>
                      <div className="w-8 h-0.5 bg-gradient-to-l from-primary-400 to-secondary-400"></div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-gray-600 leading-relaxed mb-8 text-center">
                      {professional.description}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-3 justify-center mb-8">
                      {professional.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200 hover:scale-105 transition-transform duration-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Appointment Button */}
                  <div className="text-center mt-auto">
                    <button 
                      onClick={() => handleAppointment(professional.appointmentUrl)}
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    >
                      <span className="relative z-10">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                      </span>
                      <span className="relative z-10">Reservar Turno</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;
