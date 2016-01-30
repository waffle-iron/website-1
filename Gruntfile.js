module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({
        wiredep: {
            all:{
                directory: 'client/application/bower_components',
                bowerJson: grunt.file.readJSON('client/application/bower.json'),
                src: 'client/index.html'   
            }
        },
        sass: {
          dist: {
            files: {
              'client/assets/css/custom.css' : 'client/assets/css/sass/custom.scss'
            }
          }
        }
    });
};