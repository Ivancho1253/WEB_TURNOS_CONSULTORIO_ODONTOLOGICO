<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <header class="hero-bg relative min-h-screen flex items-center justify-center text-white">
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-serif">
          Consultorio Odontológico A&D
        </h1>
        <p class="text-xl md:text-2xl mb-8 animate-slide-up">
          Atención profesional para tu salud bucal
        </p>
        <div class="flex items-center justify-center text-lg md:text-xl animate-slide-up">
          <i class="fas fa-map-marker-alt mr-2 text-dental-200"></i>
          <span>Clorinda, Formosa, Argentina</span>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div class="section-container">
        <ul class="flex justify-center space-x-8 py-4">
          <li><a href="#inicio" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300">Inicio</a></li>
          <li><a href="#servicios" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300">Servicios</a></li>
          <li><a href="#profesionales" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300">Profesionales</a></li>
          <li><a href="#contacto" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300">Contacto</a></li>
        </ul>
      </div>
    </nav>

    <!-- Welcome Section -->
    <section id="inicio" class="py-20">
      <div class="section-container">
        <div class="card p-12 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
            Bienvenidos al Sistema de Turnos
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Nos dedicamos al cuidado integral de tu sonrisa. ¡Pedí tu turno y te esperamos!
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
            Servicios Ofrecidos
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de tratamientos odontológicos con tecnología de vanguardia
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-tooth text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Consultas Generales</h3>
            <p class="text-gray-600">Diagnóstico completo para tu salud bucal.</p>
          </div>

          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-teeth-open text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Ortodoncia</h3>
            <p class="text-gray-600">Brackets, alineadores y corrección dental.</p>
          </div>

          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-smile-beam text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Blanqueamiento</h3>
            <p class="text-gray-600">Sonríe con más confianza y luminosidad.</p>
          </div>

          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-syringe text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Implantes</h3>
            <p class="text-gray-600">Reemplazo de piezas dentales con tecnología avanzada.</p>
          </div>

          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-brush text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Limpieza Profesional</h3>
            <p class="text-gray-600">Eliminación de placa y sarro para una sonrisa saludable.</p>
          </div>

          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-x-ray text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Endodoncia</h3>
            <p class="text-gray-600">Tratamiento de conducto para preservar tus piezas dentales.</p>
          </div>

          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fa-solid fa-teeth text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Prótesis Dentales</h3>
            <p class="text-gray-600">Soluciones estéticas y funcionales para reemplazo dental.</p>
          </div>

          <div class="card p-8 text-center group">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-child text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Odontopediatría</h3>
            <p class="text-gray-600">Atención dental especializada para los más pequeños.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professionals Section -->
    <section id="profesionales" class="py-20">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
            Nuestros Profesionales
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo de profesionales altamente capacitados y especializados en todas las áreas de la odontología.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div class="card p-8 text-center">
            <div class="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/images/pictureDra.Alejandra.jpeg" 
                alt="Dra. Alejandra Baigorri"
                class="w-full h-full object-cover"
              >
            </div>
            <h3 class="text-2xl font-bold text-dental-800 mb-4 font-serif">Dra. Maria Alejandra Baigorri</h3>
            <p class="text-gray-600">Especialista en odontología general y estética dental</p>
          </div>

          <div class="card p-8 text-center">
            <div class="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/images/pictureDra.Daniela.jpeg" 
                alt="Dra. Daniela Cabrera"
                class="w-full h-full object-cover"
              >
            </div>
            <h3 class="text-2xl font-bold text-dental-800 mb-4 font-serif">Dra. Daniela Andrea Cabrera</h3>
            <p class="text-gray-600">Especialista en ortodoncia y odontopediatría</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="py-20 bg-white">
      <div class="section-container">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
            Contacto
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="card p-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-dental-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-map-marker-alt text-dental-600"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-dental-800">Dirección</h3>
                    <p class="text-gray-600">Sarmiento 1253, Clorinda, Formosa</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-dental-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-clock text-dental-600"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-dental-800">Horario de Atención</h3>
                    <p class="text-gray-600">Lunes a Viernes de 9hs a 12hs y de 16hs a 20hs</p>
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <h3 class="text-2xl font-bold text-dental-800 mb-6">Reservá tu Turno</h3>
                <div class="space-y-4">
                  <router-link to="/turnos-alejandra" class="btn-primary w-full text-center block">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    Turno Dra. Alejandra
                  </router-link>
                  <router-link to="/turnos-daniela" class="btn-primary w-full text-center block">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    Turno Dra. Daniela
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <!-- Información Importante -->
    <section class="py-16 bg-dental-50">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">
          <div class="card p-8">
            <div class="text-center mb-8">
              <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-info-circle text-2xl text-dental-600"></i>
              </div>
              <h2 class="text-3xl font-bold text-dental-800 mb-4 font-serif">
                Información Importante
              </h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-dental-600 mt-1"></i>
                  <div>
                    <h3 class="font-semibold text-dental-800 mb-1">Confirmación de Turnos</h3>
                    <p class="text-gray-600 text-sm">Te contactaremos para confirmar la disponibilidad del turno solicitado.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <i class="fas fa-calendar-check text-dental-600 mt-1"></i>
                  <div>
                    <h3 class="font-semibold text-dental-800 mb-1">Disponibilidad</h3>
                    <p class="text-gray-600 text-sm">Los turnos están sujetos a disponibilidad de agenda.</p>
                  </div>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-clock text-dental-600 mt-1"></i>
                  <div>
                    <h3 class="font-semibold text-dental-800 mb-1">Horarios de Atención</h3>
                    <p class="text-gray-600 text-sm">Lunes a Viernes de 9hs a 12hs y de 16hs a 20hs</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <i class="fas fa-phone text-dental-600 mt-1"></i>
                  <div>
                    <h3 class="font-semibold text-dental-800 mb-1">Contacto Directo</h3>
                    <p class="text-gray-600 text-sm">Para consultas urgentes, contactanos directamente por WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dental-800 text-white py-12">
      <div class="section-container text-center">
        <p class="text-lg">&copy; 2025 Consultorio Odontológico A&D. Todos los derechos reservados.</p>
        <p class="text-lg">Desarrollado por <a href="https://www.linkedin.com/in/ivan-cabrera-128a60281/" target="_blank" class="text-dental-200 hover:text-dental-300">Ivan G. Cabrera</a></p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No se necesita lógica adicional para este componente
</script>

<style scoped>
/* Los estilos están en App.vue para ser globales */
</style>
