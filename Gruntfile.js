module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    
    grunt.initConfig({
        wiredep: {
            target: {
                src: 'assets/index.html'
            }
        }
    });
};