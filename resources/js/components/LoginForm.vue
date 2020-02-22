<template>
  <div>
    <form-group label="Email Address">
      <input type="email" class="form-control" v-model="email" />
    </form-group>
    <form-group label="Password">
      <input type="password" class="form-control" v-model="password" />
    </form-group>
    <button class="btn btn-primary" @click="login">Login</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      login_url : "/api/v1/login/"
    };
  },
  methods: {
    login() {
        const payLoad = {
        email: this.email,
        password: this.password
      };

      axios({
        method: "POST",
        url: this.login_url,
        data: payLoad
      }).then(this.login_hander);
    },
    login_hander(response){
      if(response.data.api_token){
        this.$cookie.set('api_token',response.data.api_token);
        window.location.href= "/jsapp/post";
      }
      else{
        alert("Fail to login");
      }        
    }
  }
};
</script>