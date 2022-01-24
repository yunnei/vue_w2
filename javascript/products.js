const app = {
    data() {
        return {
            baseUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'yunei',
            temp: {},
            products: []
        };
    },
    methods: {
        checkLogin() {
            const url = `${this.baseUrl}/api/user/check`
            axios.post(url)
                .then(res => {
                    this.getProducts();
                })
                .catch(error => {
                    window.location = 'index.html';
                })
        },
        getProducts() {
            const url = `${this.baseUrl}/api/${this.apiPath}/admin/products`;
            axios.get(url)
                .then(res => {
                    this.products = res.data.products;
                })
                .catch(error => {
                    console.log(error.data);
                })
        },
        toThousands(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        this.checkLogin();
    }
  };
  
  Vue.createApp(app).mount("#app");
  