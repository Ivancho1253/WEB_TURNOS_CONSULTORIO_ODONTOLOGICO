<template>
  <div>
    <header>
      <div class="container">
        <h1>Consultorio Odontológico A&D</h1>
        <p>Atención profesional para tu salud bucal</p>
        <br>
        <p><i class="fas fa-map-marker-alt"></i> Clorinda, Formosa, Argentina</p>
      </div>
    </header>

    <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#profesionales">Profesionales</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>

    <section id="inicio" class="section">
      <div class="container">
        <h2>Bienvenidos al Sistema de Turnos del Consultorio Odontológico A&D</h2>
        <p>Nos dedicamos al cuidado integral de tu sonrisa. ¡Pedí tu turno y te esperamos!</p>
      </div>
    </section>

    <section id="servicios" class="section">
      <div class="container">
        <h2>Servicios ofrecidos</h2>

        <div class="servicios-grid">
          <div class="servicio-card">
            <i class="fas fa-tooth"></i>
            <h3>Consultas generales</h3>
            <p>Diagnóstico completo para tu salud bucal.</p>
          </div>

          <div class="servicio-card">
            <i class="fas fa-teeth-open"></i>
            <h3>Ortodoncia</h3>
            <p>Brackets, alineadores y corrección dental.</p>
          </div>

          <div class="servicio-card">
            <i class="fas fa-smile-beam"></i>
            <h3>Blanqueamiento</h3>
            <p>Sonríe con más confianza y luminosidad.</p>
          </div>

          <div class="servicio-card">
            <i class="fas fa-syringe"></i>
            <h3>Implantes</h3>
            <p>Reemplazo de piezas dentales con tecnología avanzada.</p>
          </div>

          <div class="servicio-card">
            <i class="fas fa-brush"></i>
            <h3>Limpieza profesional</h3>
            <p>Eliminación de placa y sarro para una sonrisa saludable.</p>
          </div>

          <div class="servicio-card">
            <i class="fas fa-x-ray"></i>
            <h3>Endodoncia</h3>
            <p>Tratamiento de conducto para preservar tus piezas dentales.</p>
          </div>

          <div class="servicio-card">
            <i class="fa-solid fa-teeth"></i>
            <h3>Prótesis dentales</h3>
            <p>Soluciones estéticas y funcionales para reemplazo dental.</p>
          </div>

          <div class="servicio-card">
            <i class="fas fa-child"></i>
            <h3>Odontopediatría</h3>
            <p>Atención dental especializada para los más pequeños.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="profesionales" class="section">
      <div class="container">
        <h2>Profesionales</h2>
        <p>Nuestro equipo de profesionales altamente capacitados y especializados en todas las áreas de la odontología.</p>
        <div class="servicio-card">
          <h3>Dra. Maria Alejandra Baigorri</h3>
          <img class="imagen" src="../assets/images/pictureDra.Alejandra.jpeg" alt="Foto Dra. Alejandra">
        </div>

        <div class="servicio-card">
          <h3>Dra. Daniela Andrea Cabrera</h3>
          <img class="imagen" src="../assets/images/pictureDra.Daniela.jpeg" alt="Foto Dra. Daniela">
        </div>
      </div>
    </section>

    <section id="contacto" class="section">
      <div class="container">
        <h2>Contacto</h2>
        <p><i class="fas fa-map-marker-alt"></i> Dirección: Sarmiento 1253, Clorinda, Formosa</p>
        <p><i class="fas fa-clock"></i> Horario: Lunes a Viernes de 9hs a 12hs y de 16hs a 20hs</p>
        <br>
        <router-link to="/turnos-alejandra" class="boton boton-grande">Turno Dra. Alejandra</router-link>
        <router-link to="/turnos-daniela" class="boton boton-grande">Turno Dra. Daniela</router-link>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>&copy; 2025 Consultorio Odontológico A&D. Todos los derechos reservados.</p>
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
