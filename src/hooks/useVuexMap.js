import { computed } from "vue";
import { mapState, mapGetters, useStore, createNamespacedHelpers } from "vuex";

const useMapper = (mapper, mapperFn) => {
	const store = useStore();
	const storeDataFns = mapperFn(mapper);
	const storeData = {};
	Object.keys(storeDataFns).forEach((keyFn) => {
		const fn = storeDataFns[keyFn].bind({ $store: store });
		storeData[keyFn] = computed(fn);
	});
	return storeData;
};

//mapState的二次封装
export const useState = (moduleName, mapper) => {
	try {
		if (!Array.isArray(mapper)) {
			throw new Error(
				"The second parameter of the  function that named useState must be an array type"
			);
		}
		let mapperFn = mapState;
		if (typeof moduleName === "string" && moduleName.length > 0) {
			mapperFn = createNamespacedHelpers(moduleName).mapState;
		} else {
			mapper = moduleName;
		}
		return useMapper(mapper, mapperFn);
	} catch (error) {
		console.error(error);
	}
};

// mapGetter的二次封装
export const useGetters = (moduleName, mapper) => {
	try {
		if (!Array.isArray(mapper)) {
			throw new Error(
				"The second parameter of the  function that named useGetters must be an array type"
			);
		}
		let mapperFn = mapGetters;
		if (typeof moduleName === "string" && moduleName.length > 0) {
			mapperFn = createNamespacedHelpers(moduleName).mapGetters;
		} else {
			mapper = moduleName;
		}
		return useMapper(mapper, mapperFn);
	} catch (error) {
		console.error(error);
	}
};
