import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import API_URL from '@/config/api';
import { getIpInfos } from '@/services/Geolocation';
import { ref } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => ({
    sessionId: null,
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    async initializeUser() {
      this.sessionId = sessionStorage.getItem('session_id') || uuidv4();
      this.token = sessionStorage.getItem('token');
      this.isAuthenticated = !!this.token;

      if (!this.token) {
        sessionStorage.setItem('session_id', this.sessionId);
        try {
          const ipInfos = ref(null);
          ipInfos.value = await getIpInfos();
          const response = await axios.post(`${API_URL}/users/create`, {
            session_id: this.sessionId,
            country: ipInfos.value.country,
            city: ipInfos.value.city,
          });


          this.token = response.data.token;
          this.isAuthenticated = true;
          sessionStorage.setItem('token', this.token);
          
          const decodedToken = jwtDecode(this.token);
          this.sessionId = decodedToken.session_id;


        } catch (error) {
          console.error('Error trying to create user: ', error);
        }
      }
    },

    logout() {
      this.sessionId = null;
      this.token = null;
      this.isAuthenticated = false;
      sessionStorage.removeItem('session_id');
      sessionStorage.removeItem('token');
    },
  },
  getters: {
    getUserSessionId: (state) => {
      if (state.token) {
          const decodedToken = jwtDecode(state.token);
          return decodedToken.session_id
      }

      return null

    }
  }
});