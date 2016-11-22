

module.exports = function(grunt) {
    // bug report - https://github.com/palantir/grunt-tslint/issues/60

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
