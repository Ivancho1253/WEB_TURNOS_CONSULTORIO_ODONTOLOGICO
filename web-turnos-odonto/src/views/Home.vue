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
          <a href="#mapa" class="text-dental-200 hover:text-white transition-colors duration-300 cursor-pointer">
            Clorinda, Formosa, Argentina
          </a>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div class="section-container">
        <ul class="flex justify-center space-x-8 py-4">
          <li><a href="#inicio" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300 scroll-smooth">Inicio</a></li>
          <li><a href="#servicios" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300 scroll-smooth">Servicios</a></li>
          <li><a href="#profesionales" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300 scroll-smooth">Profesionales</a></li>
          <li><a href="#mapa" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300 scroll-smooth">Contacto</a></li>
          <li><a href="#turnos" class="text-dental-600 hover:text-dental-800 font-semibold transition-colors duration-300 scroll-smooth">Turnos</a></li>
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
    <section id="servicios" class="py-20 bg-white scroll-mt-20">
      <div class="section-container">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
            Servicios Ofrecidos
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de tratamientos odontológicos con tecnología de vanguardia
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card p-8 text-center group animate-slide-up">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-tooth text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Consultas Generales</h3>
            <p class="text-gray-600">Diagnóstico completo para tu salud bucal.</p>
          </div>

          <div class="card p-8 text-center group animate-slide-up" style="animation-delay: 0.1s;">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-teeth-open text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Ortodoncia</h3>
            <p class="text-gray-600">Brackets, alineadores y corrección dental.</p>
          </div>

          <div class="card p-8 text-center group animate-slide-up" style="animation-delay: 0.2s;">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-smile-beam text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Blanqueamiento</h3>
            <p class="text-gray-600">Sonríe con más confianza y luminosidad.</p>
          </div>

          <div class="card p-8 text-center group animate-slide-up" style="animation-delay: 0.3s;">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-syringe text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Implantes</h3>
            <p class="text-gray-600">Reemplazo de piezas dentales con tecnología avanzada.</p>
          </div>

          <div class="card p-8 text-center group animate-slide-up" style="animation-delay: 0.4s;">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-brush text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Limpieza Profesional</h3>
            <p class="text-gray-600">Eliminación de placa y sarro para una sonrisa saludable.</p>
          </div>

          <div class="card p-8 text-center group animate-slide-up" style="animation-delay: 0.5s;">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fas fa-x-ray text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Endodoncia</h3>
            <p class="text-gray-600">Tratamiento de conducto para preservar tus piezas dentales.</p>
          </div>

          <div class="card p-8 text-center group animate-slide-up" style="animation-delay: 0.6s;">
            <div class="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-200 transition-colors duration-300">
              <i class="fa-solid fa-teeth text-2xl text-dental-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-dental-800 mb-4">Prótesis Dentales</h3>
            <p class="text-gray-600">Soluciones estéticas y funcionales para reemplazo dental.</p>
          </div>

          <div class="card p-8 text-center group animate-slide-up" style="animation-delay: 0.7s;">
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
    <section id="profesionales" class="py-20 scroll-mt-20">
      <div class="section-container">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
            Nuestros Profesionales
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo de profesionales altamente capacitados y especializados en todas las áreas de la odontología.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div class="card p-8 text-center animate-slide-up" style="animation-delay: 0.2s;">
            <div class="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/images/pictureDra.Alejandra.jpeg" 
                alt="Dra. Alejandra Baigorri"
                class="w-full h-full object-cover"
              >
            </div>
            <h3 class="text-2xl font-bold text-dental-800 mb-4 font-serif">Dra. Maria Alejandra Baigorri</h3>
            <p class="text-gray-600">Especialista en odontología general con adultos y niños, ortodoncia, ortopedia, cirugia y estética dental</p>
          </div>

          <div class="card p-8 text-center animate-slide-up" style="animation-delay: 0.4s;">
            <div class="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/images/pictureDra.Daniela.jpeg" 
                alt="Dra. Daniela Cabrera"
                class="w-full h-full object-cover"
              >
            </div>
            <h3 class="text-2xl font-bold text-dental-800 mb-4 font-serif">Dra. Daniela Andrea Cabrera</h3>
            <p class="text-gray-600">Especialista en ortodoncia adulta, ortodoncia infantil, odontopediatría y estetica dental</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa -->
    <section id="mapa" class="py-16 bg-white scroll-mt-20">
      <div class="section-container">
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
            Nuestra Ubicación
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontranos aqui:
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="card p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold text-dental-800 mb-6 font-serif">
                  Información de Contacto
                </h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-dental-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-map-marker-alt text-dental-600"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-dental-800">Dirección</h4>
                      <p class="text-gray-600">Sarmiento 1253, Clorinda, Formosa</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-dental-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-clock text-dental-600"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-dental-800">Horarios</h4>
                      <p class="text-gray-600">Lunes a Viernes de 9hs a 12hs y de 17hs a 20hs</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-dental-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-car text-dental-600"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-dental-800">Acceso</h4>
                      <p class="text-gray-600">Fácil acceso con tu vehiculo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:order-first">
                <div class="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=-25.287414,-57.721195&z=18&output=embed"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ubicación del Consultorio Odontológico A&D - Sarmiento 1253, Clorinda, Formosa"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Reservar Turno -->
    <section id="turnos" class="py-20 bg-dental-50 scroll-mt-20">
      <div class="section-container">
        <div class="max-w-4xl mx-auto text-center">
          <div class="card p-12">
            <div class="mb-8 animate-fade-in">
              <div class="w-20 h-20 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-calendar-alt text-3xl text-dental-600"></i>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-dental-800 mb-6 font-serif">
                Reservá tu Turno
              </h2>
              <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                Elegí con cuál de nuestras profesionales querés agendar tu consulta
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <router-link to="/turnos-alejandra" class="btn-primary w-full text-center block py-6 animate-slide-up" style="animation-delay: 0.2s;">
                <div class="flex flex-col items-center space-y-3">
                  <i class="fas fa-user-md text-3xl"></i>
                  <div>
                    <h3 class="text-xl font-bold">Dra. Alejandra</h3>
                    <p class="text-sm opacity-90">Baigorri</p>
                  </div>
                </div>
              </router-link>
              
              <router-link to="/turnos-daniela" class="btn-primary w-full text-center block py-6 animate-slide-up" style="animation-delay: 0.4s;">
                <div class="flex flex-col items-center space-y-3">
                  <i class="fas fa-user-md text-3xl"></i>
                  <div>
                    <h3 class="text-xl font-bold">Dra. Daniela</h3>
                    <p class="text-sm opacity-90">Cabrera</p>
                  </div>
                </div>
              </router-link>
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
