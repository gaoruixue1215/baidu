module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
            removeComments:true,
            collapseWhitespace: true
        },
        files: {
            src: "./index.html",
            dest: "dist/index.html"
        }
      },
      cssmin: {  
        'dist/baidu.css': 'baidu.css'
      },
      uglify: {
        'dist/baidu.js': 'baidu.js'       
      }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['htmlmin','cssmin','uglify']);
 };
