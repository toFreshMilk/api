module.exports = {
  apps: [
    {
      name: 'bridgeLcsToDaeri',
      script: './src/index.js',
      instances: 1,
      exec_mode: 'cluster',
      wait_ready: true,
      kill_timeout: 5000,
      output: '/opt/logs/out.log',
      error: '/opt/logs/error.log',
    },
  ],
}
