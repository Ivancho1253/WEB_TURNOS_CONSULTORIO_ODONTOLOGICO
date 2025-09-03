<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="hero-gradient py-20 text-white">
      <div class="section-container text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Reserva tu Turno
          </h1>
          <h2 class="text-2xl md:text-3xl font-semibold mb-4 text-dental-100">
            Dra. Alejandra Baigorri
          </h2>
          <p class="text-xl text-dental-100">
            Completá tus datos, solicita tu turno y nos pondremos en contacto contigo
          </p>
        </div>
      </div>
    </header>

    <!-- Form Section -->
    <section class="py-20">
      <div class="section-container">
        <div class="max-w-2xl mx-auto">
          <div class="card p-12">
            <div class="text-center mb-8">
              <div class="w-20 h-20 bg-dental-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-user-md text-3xl text-dental-600"></i>
              </div>
              <h2 class="text-3xl font-bold text-dental-800 mb-4 font-serif">
                Datos del Paciente
              </h2>
              <p class="text-gray-600">
                Por favor completá todos los campos para procesar tu solicitud
              </p>
            </div>

            <!-- Información Importante -->
            <div class="mb-8 p-6 bg-dental-50 rounded-lg border-l-4 border-dental-500">
              <h3 class="text-lg font-semibold text-dental-800 mb-4 flex items-center">
                <i class="fas fa-info-circle mr-2 text-dental-600"></i>
                A tener en cuenta:
              </h3>
              <ul class="text-sm text-gray-700 space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check text-dental-600 mt-1 mr-2 text-xs"></i>
                  Los turnos están sujetos a disponibilidad
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-dental-600 mt-1 mr-2 text-xs"></i>
                  Te contactaremos para confirmar la disponibilidad
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-dental-600 mt-1 mr-2 text-xs"></i>
                  Horario de atención: Lunes a Viernes de 9hs a 12hs y de 16hs a 20hs
                </li>
                <li class="flex items-start">
                  <i class="fas fa-exclamation-triangle text-yellow-600 mt-1 mr-2 text-xs"></i>
                  <span class="font-medium">La Dra. Maria Baigorri no acepta ningún tipo de Obra Social</span>
                </li>
              </ul>
            </div>

            <form @submit.prevent="redirigirWhatsApp" class="space-y-6">
              <div>
                <label for="nombre" class="block text-sm font-semibold text-dental-800 mb-2">
                  Nombre y Apellido *
                </label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  v-model="formData.nombre"
                  class="input-field"
                  placeholder="Ingresá tu nombre completo"
                  required
                >
              </div>

              <div>
                <label for="telefono" class="block text-sm font-semibold text-dental-800 mb-2">
                  Teléfono *
                </label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  v-model="formData.telefono"
                  class="input-field"
                  placeholder="Ej: +54 9 11 1234-5678"
                  required
                >
              </div>

              <div>
                <label for="motivo" class="block text-sm font-semibold text-dental-800 mb-2">
                  Motivo de la consulta *
                </label>
                <textarea 
                  id="motivo" 
                  name="motivo" 
                  rows="4" 
                  v-model="formData.motivo"
                  class="input-field resize-none"
                  placeholder="Describí brevemente el motivo de tu consulta..."
                  required
                ></textarea>
              </div>

              <div class="pt-6">
                <button 
                  type="submit" 
                  class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center space-x-3"
                >
                  <i class="fab fa-whatsapp text-2xl"></i>
                  <span class="text-lg">Enviar por WhatsApp</span>
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </section>

    <!-- Back to Home -->
    <section class="py-12 bg-white">
      <div class="section-container text-center">
        <router-link to="/" class="btn-secondary inline-flex items-center space-x-2">
          <i class="fas fa-arrow-left"></i>
          <span>Volver al Inicio</span>
        </router-link>
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
import { ref } from 'vue'

const fechaTurno = ref('')
const formData = ref({
  nombre: '',
  telefono: '',
  motivo: ''
})

const redirigirWhatsApp = () => {
  const mensaje = `Hola buenas Dra. \nSoy ${formData.value.nombre}. Me comunico con usted para pedir un turno. \nTeléfono: ${formData.value.telefono}. \nMotivo de la consulta: ${formData.value.motivo}`
  const url = `https://wa.me/5493718415162?text=${encodeURIComponent(mensaje)}`
  
  window.open(url, '_blank')
}
</script>

<style scoped>
/* Los estilos están en App.vue para ser globales */
</style>
