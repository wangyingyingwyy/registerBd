module.exports=function (grunt) {  
  grunt.initConfig({
      htmlmin:{
          options:{
              collapseWhitespace: true,
              preserveLineBreaks: false
          },
          files:{
              src:'./dist/index.html',
              dest:'dist/index.html'
          }
      },
      cssmin:{
          options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'dist/reg.min.css': ['./reg.css']
              }
            }
      },
      uglify:{
          'dist/reg.min.js':['./reg.js']
      },
      usemin: {
          html: ['dist/index.html']
      },
      copy: {
        html: {
          src: './index.html',
          dest: './dist/index.html'
        }
      }
    
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.registerTask('release', ['copy', 'uglify', 'cssmin','usemin', 'htmlmin']);
}