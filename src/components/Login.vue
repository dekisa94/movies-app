<template>
  <div class="container mt-4">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please login</h2>
      <input v-model="email" type="text" class="form-control" name="email" placeholder="Email Address" required autofocus />
      <input v-model="password" type="password" class="form-control" name="password" placeholder="Password" required />
      <div v-if="errors" class="alert alert-danger">
        {{errors}}
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { authService } from "../service/AuthService";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: ""
    };
  },
  methods: {
    ...mapMutations(["setIsAuthenticated"]),
    login() {
      authService
        .login(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "movies" });
          this.setIsAuthenticated(true);
        })
        .catch(error => {
          this.errors = error.response.data.error;
        });
    }
  }
};
</script>