const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		port: 9998,
		headers: { "Access-Control-Allow-Origin": "*" },
		proxy: {
			"/api": {
				target: "http://127.0.0.1:3000/",
				changeOrigin: true,
				pathRewrite: {
					"^/api": "/",
				},
			},
		},
	},
});
