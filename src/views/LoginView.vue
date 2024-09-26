<template>
    <div class="login-page">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Here you would normally call an API to verify credentials
        if (this.username === 'admin' && this.password === 'admin') {
          localStorage.setItem('auth', true); // Save auth token
          this.$router.push({ name: 'Home' });
        } else {
          alert('Invalid credentials');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add some basic styling */
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  </style>
  