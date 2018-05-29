<template>
    <div class="container mt-4">
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Register here:</h2>
      <input v-model="name" type="text" class="form-control" name="name" placeholder="Name" autofocus />
      <input v-model="email" type="text" class="form-control" name="email" placeholder="Email Address" />
      <input v-model="password" type="password" class="form-control" name="password" placeholder="Password" />
      <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm password" />
      <div v-for="(error, key) in errors" :key="key" v-if="error" class="alert alert-danger">
              <ul v-for="(oneError, key) in error" :key="key">
                <li>{{oneError}}</li>
              </ul>
            </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { authService } from "../service/AuthService";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: ""
    };
  },
  methods: {
    register() {
      authService
        .register(this.name, this.email, this.password)
        .then(() => {})
        .catch(error => {
          this.errors = error.response.data;
        });
    }
  }
};
</script>