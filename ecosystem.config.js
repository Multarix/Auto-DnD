module.exports = {
	apps : [{
		name: "dnd",
		script: "./dnd.js",
		watch: ["commands", "events", "modules", "./dnd.js"],
		ignore_watch: ["node_modules"],
		cron_restart : "0 6 * * 7",
		restart_delay: 5000,
		max_restarts: 10,
		env: {
			NODE_ENV: 'development',
		},
		env_production : {
			NODE_ENV: 'production',
		},
	}],

	deploy : {
		production : {
			user: 'node',
			host: '212.83.163.1',
			ref: 'origin/master',
			repo: 'git@github.com:repo.git',
			path: '/var/www/production',
			'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
		},
	},
};

// git branch -D <branchName>
