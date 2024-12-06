<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title class="text-h5">
              Avaliação de Usabilidade do MASSA (SUS)
            </v-card-title>
            <v-card-text>
              <p>
                Por favor, preencha o questionário abaixo para nos ajudar a avaliar a usabilidade da
                ferramenta MASSA. Sua opinião é muito importante para nós!
              </p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeJkAikKtqUk5jV7HNDWAJh5pFDLULVcmTG4t_CQpNkAPOkLg/viewform?embedded=true"
                width="640"
                height="600"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="Questionário SUS"
              ></iframe>
            </v-card-text>
  
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'SusEvaluation',
  };
  
  </script>