const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-d48e45e3.js","imports":["_app/immutable/start-d48e45e3.js","_app/immutable/chunks/index-25767c28.js","_app/immutable/chunks/singletons-f8e4ee4c.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-40e35213.js'),
			() => import('./chunks/1-21085652.js'),
			() => import('./chunks/2-6e4805a9.js'),
			() => import('./chunks/3-59db5cfb.js'),
			() => import('./chunks/4-b237b95c.js'),
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
