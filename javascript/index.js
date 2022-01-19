const app = {
    data() {
      return {
        user: {
            username: '',
            password: ''
        }
      }
    },
    
    methods: {
      login() {
          const url = `https://vue3-course-api.hexschool.io/v2/admin/signin`;
          axios.post(url, this.user)
            .then(res => {
                const { token, expired } = res.data;
                document.cookie = `hextoken=${ token }; expires=${ new Date(expired)};`;
                window.location = 'products.html'
            })
            .catch(error => {
                console.log(error.data);
            })

      }
    }
  }
  
  Vue.createApp(app).mount('#app');