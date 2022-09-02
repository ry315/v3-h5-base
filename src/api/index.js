import service from "./service";
const get = service.get;
const post = service.post;

const api = {
	get,
	post,
};

export { api as default, get, post };
