/**
 * Created by Cijo on 3/15/2015.
 */
module.exports=function(grunt){

grunt.initConfig({

    jshint:{
        files:['lib/**/*js','models/**/*.js']
    },
    watch:{
        files:['lib/**/*js','models/**/*.js'],
        tasks:['jshint']
    }

});
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
}