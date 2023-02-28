loadEnv(process.env.APP_ENV);

/** 
 * @param {string} appEnv
 */

function loadEnv(appEnv = "local") {
	const env = {
		...require(`./env/env.${appEnv}`),
		NEXT_DEV_URL: appEnv
	};

	Object.entries(env).forEach(([key, value]) => {
		process.env[key] = value;
	});
}
