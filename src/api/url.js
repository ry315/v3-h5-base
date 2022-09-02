const baseUrl = "";
const proxyUrl = process.env.VUE_APP_BASE_API;

// 后端支持跨域
const base = {
	login: `${baseUrl}/login`,
};

// 配置代理跨域
const proxy = {
	login: `${proxyUrl}/login`,
};

export default {
	...base,
	...proxy,
};
