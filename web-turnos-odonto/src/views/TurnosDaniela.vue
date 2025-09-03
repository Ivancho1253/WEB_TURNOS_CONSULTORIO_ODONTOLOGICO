<template>
  <div>
    <header>
      <div class="container">
        <h1>Reserva tu Turno Dra. Daniela Cabrera</h1>
        <p>Elegí una fecha y completá tus datos</p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2>Calendario</h2>
        <input 
          type="date" 
          id="fecha-turno" 
          name="fecha-turno" 
          v-model="fechaTurno"
          min="2025-01-01" 
          max="2025-12-31"
        >
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Datos del Paciente</h2>
        <form @submit.prevent="redirigirWhatsApp">
          <label for="nombre">Nombre completo:</label><br>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            v-model="formData.nombre"
            required
          ><br><br>

          <label for="telefono">Teléfono:</label><br>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono" 
            v-model="formData.telefono"
            required
          ><br><br>

          <label for="motivo">Motivo de la consulta:</label><br>
          <textarea 
            id="motivo" 
            name="motivo" 
            rows="4" 
            v-model="formData.motivo"
            required
          ></textarea><br><br>

          <button type="submit" class="boton">Confirmar turno por WhatsApp</button>
        </form>
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
import { ref } from 'vue'

const fechaTurno = ref('')
const formData = ref({
  nombre: '',
  telefono: '',
  motivo: ''
})

const redirigirWhatsApp = () => {
  const mensaje = `Hola, soy ${formData.value.nombre}. Quisiera pedir un turno para el día ${fechaTurno.value}. Teléfono: ${formData.value.telefono}. Motivo: ${formData.value.motivo}`
  const url = `https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`
  
  window.open(url, '_blank')
}
</script>

<style scoped>
/* Los estilos están en App.vue para ser globales */
</style>
