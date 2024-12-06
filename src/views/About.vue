<template>
  <div style="width: 100%; justify-content: center; display: flex;">
    <ContentBanner :title="banner.title" :description="banner.description" />
  </div>
  <div class="content">
    <div class="about">

      <v-card class="massa-algorithm">
        <v-list lines="two">
          <v-list-subheader>Massa Algorithm</v-list-subheader>

          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="Grabriel Veríssimo">
            <template v-slot:subtitle>
              <p class="text-subtitle-2">Email:<a>gabrielverissimo@ufmg.br</a></p>
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="Vinicius Maltarollo">
            <template v-slot:subtitle>
              <p class="text-subtitle-2">Email:<a>maltarollo@ufmg.br</a></p>
            </template>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card class="massa-software">
        <v-list lines="two">
          <v-list-subheader>Massa Software</v-list-subheader>

          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="Douglas Galvão">
            <template v-slot:subtitle>
              <p class="text-subtitle-2">Email:<a>douglas-mad@live.com</a></p>
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="Gabriel Ramos">
            <template v-slot:subtitle>
              <p class="text-subtitle-2">Email:<a>gabrielrmzf@gmail.com</a></p>
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="João Pedro Braga">
            <template v-slot:subtitle>
              <p class="text-subtitle-2">Email:<a>joao.psbraga6@gmail.com</a></p>
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="João Vitor Romero">
            <template v-slot:subtitle>
              <p class="text-subtitle-2">Email:<a>joaovitor.rome@gmail.com</a></p>
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg" title="Lucas Randazzo">
            <template v-slot:subtitle>
              <p class="text-subtitle-2">Email:<a>lucasrandazzo2@gmail.com</a></p>
            </template>
          </v-list-item>
        </v-list>
      </v-card>

    </div>
  </div>

</template>

<style>
.content {
  position: relative;
  z-index: 2;
  /* Coloca o conteúdo acima da imagem */
  padding: 1rem;
  width: 100%;
}

.massa-algorithm,
.massa-software {
  width: 100%;
  margin: 1rem;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>

<script setup>
import ContentBanner from "@/components/ContentBanner.vue";
const banner = {
  title: "Who created Massa?",
  description: "Our team is composed of Pharmacy college teachers and reaserchers from the Federal University of Minas Gerais (UFMG) and Software Engineer students from the Pontifical Catholic University of Minas Gerais (PUC-MG).",
};
</script>
