module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    
    htmlmin: {                                     // Task 
    dist: {                                      // Target 
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files 
        'build/index.html': 'src/index.html',     // 'destination': 'source'     
      }
    }
    },
    
   cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',//文件路劲
          src:'index.css',
          dest: 'build',//压缩以后css路劲
          ext: '.min.css'//
        }]
      }
    },
    
	imagemin: { 
	   dynamic: {                         // Another target 
	   files: [{
	    expand: true,                  // Enable dynamic expansion 
	    cwd: 'src',                   // Src matches are relative to this path 
	    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
	    dest: 'build/img'                  // Destination path prefix 
	  }]
	  }
	}

    
 });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','htmlmin','cssmin','imagemin']);

};