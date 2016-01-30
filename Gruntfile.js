module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.initConfig({
        wiredep: {
            all:{
                directory: 'client/application/bower_components',
                bowerJson: grunt.file.readJSON('client/application/bower.json'),
                src: 'client/index.html'   
            }
        }
    });
};