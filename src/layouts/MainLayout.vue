<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar>
        <div class="toolbarContent">
          <v-toolbar-title>
            <div style="align-items: center; display:flex;">
              <img
                src="../assets/logo_massa.svg"
                alt="Logo"
                width="max-content"
              />
              <div class="conjuntoTitlesMassa">
                <h1 class="titleMassa">MASSA</h1>
                <h4 class="titleMassa2">Molecular dAta Set Sampling Algorithm</h4>
              </div>
            </div>
          </v-toolbar-title>

          
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn variant="plain" to="/"
              ><p style="color: black; font-weight: bold;">Home</p></v-btn
            >
            <v-btn variant="plain" to="/execution"
              ><p style="color: black; font-weight: bold">Execute</p></v-btn
            >
            <v-btn variant="plain" to="/data"
              ><p style="color: black; font-weight: bold">Data</p></v-btn
            >
            <v-btn variant="plain" to="/algorithm"
              ><p style="color: black; font-weight: bold">Algorithm</p></v-btn
            >
            <v-btn variant="plain" to="/sus"
              ><p style="color: black; font-weight: bold">Usability Survey</p></v-btn
            >
            <v-btn variant="plain" to="/about"
              ><p style="color: black; font-weight: bold">About</p></v-btn
            >
            <v-btn variant="plain" to="/support"
              ><p style="color: black; font-weight: bold">Support</p></v-btn
            >
          </v-toolbar-items>
        </div>
      </v-toolbar>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app class="footer">
      <span>Copyright © 2022 Vuetify</span>
    </v-footer>
  </v-app>
</template>

<style>
.footer {
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.conjuntoTitlesMassa{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1rem;
}

.titleMassa{
  color: #092F47;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  text-align: start;
}

.titleMassa2{
  color: black;
  font-weight: bold;
  font-size: 15px;
}

.toolbarContent {
  background: rgb(255, 255, 255);
  display: flex;
  width: 100%;
  padding: 2rem;
}

.btnNavBar {
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
}
</style>

  <script>
export default {
  name: "MainLayout",
  data: () => ({
    //
  }),
  components: {},
};
</script>