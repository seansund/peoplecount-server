module.exports = function(grunt) {
	var os = require('os');
	
	grunt.loadNpmTasks('grunt-replace');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		replace: {
			dist: {
				options: {
					patterns: [
						{
							match: /ORG_ID/g,
							replacement: '<%= pkg.properties["org-id"] %>'
						},
						{
							match: /DEVICE_TYPE/g,
							replacement: '<%= pkg.properties["device-type"] %>'
						},
						{
							match: /DEVICE_ID/g,
							replacement: '<%= grunt.config.get("device-id") %>'
						},
						{
							match: /disableEditor: false/g,
							replacement: 'disableEditor: true'
						},
						{
							match: /(uiPort: process.env.PORT .. )(188\d)/g,
							replacement: function(match, p1, p2) {
								return p1 + (parseInt(p2) + 10);
							}
						}
					]
				},
				files: [
					{
						expand: true, 
						flatten: true, 
						src: ['src/flow.json','src/settings.js','src/flow_cred.json'],
						dest: 'dist/'
					}
				]
			}
		}
	});
	grunt.registerTask('generate-config', function() {
		var hostname = os.hostname();
		
		grunt.config.set("device-id", hostname.replace(/(.+?)\..*/g, "$1"));
	});
	grunt.registerTask('default', ['generate-config','replace']);
};