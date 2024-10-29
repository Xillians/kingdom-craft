const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BbqcUEyr.js","app":"_app/immutable/entry/app.CE030TxV.js","imports":["_app/immutable/entry/start.BbqcUEyr.js","_app/immutable/chunks/scheduler.C55nVr2J.js","_app/immutable/chunks/singletons.jQLT3hBp.js","_app/immutable/entry/app.CE030TxV.js","_app/immutable/chunks/scheduler.C55nVr2J.js","_app/immutable/chunks/index.Bt9MCtE8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BnyQJrAe.js')),
			__memo(() => import('./chunks/1-DR72n6DS.js')),
			__memo(() => import('./chunks/2-Cs37O0Hx.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
