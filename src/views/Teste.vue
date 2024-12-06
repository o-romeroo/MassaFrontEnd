<template>
  <div>
    <form @submit.prevent="uploadFile">
      <input type="file" @change="handleFileChange" />
      <button type="submit">Enviar</button>
    </form>

    <div v-if="data">
      <h2>Dendrograms</h2>
      <div v-for="(image, key) in data.dendrograms" :key="key" class="image-container">
        <h3>{{ key }}</h3>
        <img v-if="image" :src="`data:image/png;base64,${image}`" alt="Dendrogram" class="image" />
        <p v-else>Image not available</p>
      </div>

      <h2>Distance Plots</h2>
      <div v-for="(values, key) in data.distance_plot" :key="key">
        <h3>{{ key }}</h3>
        <LineChart 
          :xLabels="values.x"
          :yValues="values.y"
          :chartKey="key"
        />
      </div>

      <h2>Distribution Plots</h2>
      <div v-for="(values, key) in data.distribution_plots" :key="key">
          <h3>{{ key }}</h3>
          <BarChart :chartData="values"/>
      </div>
    </div>
    <div v-else>
      Carregando...
    </div>
  </div> 
</template>

<script>
import axios from "axios";
import LineChart from "@/components/LineChart.vue";
import BarChart from '@/components/BarChart.vue'; // Importe o componente


export default {
  components: {
    LineChart,
    BarChart
  },
  data() {
    return {
      data: null,
      file: null
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file;
      }
    },

    async uploadFile() {
      if (!this.file) {
        alert("Arquivo não selecionado.");
        return;
      }

      console.log("Arquivo:", this.file);

      const formData = new FormData();
      formData.append("file", this.file);

      const url = `http://127.0.0.1:8000/executions/executeGraphic?result_id=1`;

      console.log("Enviando arquivo para:", url);
      try {
        const response = await axios.post(url, formData);
        this.data = response.data; 
        console.log("Data:", this.data);
  
      } catch (error) {
        console.error("Erro ao enviar o arquivo:", error);
        alert("Erro ao processar o arquivo. Tente novamente.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilo para o container de imagem */
.image-container {
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Título das imagens */
h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #555;
}

/* Estilo das imagens */
.image {
  display: flex;
  width: 1000px;   /* Limita a largura da imagem */
  height: 500px;  /* Limita a altura da imagem */
  object-fit: cover; /* Garante que as imagens não fiquem distorcidas e cubram o espaço disponível */
  margin: 10px auto; /* Centraliza a imagem */
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilo do parágrafo quando a imagem não está disponível */
p {
  color: #ff0000;
  font-size: 16px;
}

/* Ajuste no botão de envio */
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

input[type="file"] {
  margin-bottom: 10px;
}
</style>