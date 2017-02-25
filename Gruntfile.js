// Generated on 2016-01-21 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {


    require('time-grunt')(grunt);
    //require('connect-livereload');
    require('jit-grunt')(grunt, {
        'ngtemplates': 'grunt-angular-templates'
    });
    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        obj: appConfig,
        clean: ['<%=obj.dist%>'],
        copy : {
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= obj.app %>',
                    dest: '<%= obj.dist %>',
                    src: [
                        'styles/fonts/*.*'
                    ]
                },{
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/bootstrap/dist', // change this for font-awesome
                    src: ['fonts/*.*'],
                    dest: '<%= obj.dist %>/styles'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= obj.app %>/modules',
                    dest: '<%= obj.dist %>/modules',
                    src: [
                        '**/*.html'
                    ]
                }]
            },
            root: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= obj.app %>',
                    dest: '<%= obj.dist %>',
                    src: [
                        '*.html',
                        '*.ico',
                        '*.txt'
                    ]
                }]
            }
        },
        concat: {
            stat_js: {
                src: ['<%=obj.app%>/scripts/*.js'],
                dest: '<%=obj.dist%>/scripts/statScript.js'
            },
            js: {
                src: ['<%=obj.app%>/modules/modules.js',
                    '<%=obj.app%>/modules/**/*.js',
                    '<%=obj.app%>/initApp.js'
                ],
                dest: '<%=obj.dist%>/scripts/webScript.js'
            },
            css : {
                src: '<%=obj.app%>/styles/**/*.css',
                dest: '<%=obj.dist%>/styles/main.css'
            }
        },
        bower_concat: {
            all: {
                dest: '<%= obj.dist %>/scripts/bower.js',
                cssDest: '<%= obj.dist %>/styles/bower.css',
                includeDev: false
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: '<%=obj.app%>/',                   // Src matches are relative to this path
                    src: ['images/**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: '<%=obj.dist%>/'                  // Destination path prefix
                }]
            }
        },
        ngtemplates:  {
            index:        {
                cwd:      '<%=obj.app%>',
                src:      'modules/**/*.html',
                dest:     '<%=obj.dist%>/scripts/templates.js'
            }
        },
        connect: {
            dev: {
                options: {
                    port: 5000,
                    hostname: '0.0.0.0',
                    //livereload: true,
                    open: true,
                    base: {
                        path: 'dist',
                        options: {
                            index: 'index.html'
                        }
                    }

                }
            }
        },
        watch: {
            all: {
                files: ['<%=obj.app%>/**/*.*'],
                tasks: ['update'],
                options: {
                    livereload: true,
                    open: true
                }
            },
            html: {
                files: ['<%=obj.app%>/**/*.html'],
                tasks: ['copy', 'ngtemplates'],
                options: {
                    livereload: true,
                    open: true
                }
            },
            css: {
                files: ['<%=obj.app%>/**/*.css'],
                tasks: ['concat'],
                options: {
                    livereload: true,
                    open: true
                }
            }
        }

    })
;
grunt.registerTask('serve', ['clean', 'copy', 'concat', 'bower_concat', 'connect', 'watch']);
    grunt.registerTask('build', ['clean', 'copy', 'concat', 'bower_concat']);
    grunt.registerTask('update', ['copy', 'concat']);
}
;
