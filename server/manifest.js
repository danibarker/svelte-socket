const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-1fca611b.js","imports":["_app/immutable/start-1fca611b.js","_app/immutable/chunks/index-25767c28.js","_app/immutable/chunks/singletons-2ba93ed0.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-4dbe48ba.js'),
			() => import('./chunks/1-0452b2e6.js'),
			() => import('./chunks/2-6e4805a9.js'),
			() => import('./chunks/3-59db5cfb.js'),
			() => import('./chunks/4-b382cf51.js'),
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
