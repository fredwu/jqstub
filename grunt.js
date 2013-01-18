module.exports = function(grunt) {
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    min: {
      dist: {
        src: ['<%= pkg.name %>.js'],
        dest: '<%= pkg.name %>.min.js'
      }
    },
    watch: {
      coffee: {
        files: ['*.coffee', 'test/*.coffee'],
        tasks: 'coffee'
      }
    },
    coffee: {
      app: {
        src: ['*.coffee'],
        dest: '.',
        options: {
          bare: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-coffee');

  grunt.registerTask('default', 'coffee');
};
