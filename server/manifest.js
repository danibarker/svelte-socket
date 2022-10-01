const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-df21e26d.js","imports":["_app/immutable/start-df21e26d.js","_app/immutable/chunks/index-25767c28.js","_app/immutable/chunks/singletons-287e3aa6.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-aec7f566.js'),
			() => import('./chunks/1-f186958a.js'),
			() => import('./chunks/2-a0708162.js'),
			() => import('./chunks/3-59db5cfb.js'),
			() => import('./chunks/4-46e4fd04.js'),
			() => import('./chunks/5-ef695ca3.js')
		],
		routes: [
			{
				id: "sverdle",
				pattern: /^\/sverdle\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
