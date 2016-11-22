

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-tslint');

	grunt.config('tslint.source', {
      options: {
        configuration: "tslint.json"
      },  
      files: {
        src: ["src/**/*.ts"]
      }   
    });

}
