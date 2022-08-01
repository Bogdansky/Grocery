const config = {
    urls: {
      root: 'https://localhost:7138/api',
      auth: {
        register: 'register',
        login: 'login',
        logout: 'logout'
      },
      products: {
          scan: 'pointofsale',
          getPrice: 'pointofsale',
          setPricing: 'pointofsale'
      }
    }
  }
  
  export default config;