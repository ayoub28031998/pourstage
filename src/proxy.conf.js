const PROXY_CONFIG = [
    {
      context: [
        "/api",
      ],
      target: "https://127.0.0.1:7275",
      secure: false
    }
  ]
  
  module.exports = PROXY_CONFIG;
  