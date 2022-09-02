import axios from "axios";

const service = axios.create({
	timeout: 10 * 1000,
});

service.defaults.headers.common["x-requested-with"] = "XMLHttpRequest";

service.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

service.interceptors.response.use(
	(response) => {
		const res = response.data;
		return res;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default service;
