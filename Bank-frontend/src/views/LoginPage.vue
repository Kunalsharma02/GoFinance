<template>
  <div class="min-h-screen bg-purple-400 flex justify-center items-center">
    <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
    <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
    <form @submit.prevent="handleSubmit" class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login Into Account</h1>
        <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Login Again</p>
      </div>
      <div class="space-y-4">
        <input v-model="email" type="text" placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
        <input v-model="password" type="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
      </div>
      <div class="text-center mt-6">
        <button type="submit" class="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">Login Account</button>
        
        <p v-if="message" class="mt-4 text-sm" :class="{'text-green-500': isSuccess, 'text-red-500': !isSuccess}">{{ message }}</p>
      </div>
    </form>
    <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
    <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
      isSuccess: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: this.email, password: this.password })
        });
        
        if (response.status === 200) {

          this.$router.push('/home')
          
        } else if (response.status === 402) {
          this.message = 'Invalid username or password';
          this.isSuccess = false;
        } else {
          this.message = 'Something went wrong';
          this.isSuccess = false;
        }
      } catch (error) {
        this.message = 'Something went wrong with backend';
        this.isSuccess = false;
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
