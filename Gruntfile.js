module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Configuration for each task
        sass: {                                               // Task
            dist: {
                options: {
                    style: 'expanded',                        // Output style
                    sourcemap: true                           // Use source maps
                },
                files: {
                    'css/styles.css': 'scss/styles.scss'  // Output path : Sass path
                }
            }
        },

        imagemin: {
            dynamic: {                         // Another target
                files: [{
                  expand: true,                  // Enable dynamic expansion
                  cwd: 'examples/images/',                   // Src matches are relative to this path
                  src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                  dest: 'images/'                  // Destination path prefix
                }]
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass','imagemin']);

};