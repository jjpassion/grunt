module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		combo : {
			build: {
				files: [{
					expand: true,
					cwd: 'script-ss/',
					src: ['./page/*.js'],
					dest: './script-min/',
					ext: '.js'
				}]
			}
		},
		//jshint:插件配置信息
		//和uglify的配置一样，分为“options”和“build”两个部分。“build”中描述了jshint要检查哪些js文档的语法。“options”中描述了要通过怎么的规则检查语法，这些规则的描述文件就保存在网站根目录下的一个叫做“.jshintrc”的文件中。因此我们在网站的根目录下面添加上这个文档，并且填写上文件内容。
		jshint : {
			build : ['script-ss/*.js', 'script-ss/page/*.js'],
			options : {
				jshintrc : '.jshintrc'
			}
		},

        uglify: {  
            build: {  
				files: [{
					expand: true,
					cwd: 'script-min',
					src: ['**/*.js'],
					dest: 'script-min'
				}
				, {
					expand: true,
					cwd: 'script-ss',
					src: ['**/*.js'],
					dest: 'script-min'
				}]
            }  
        },  
		less: {
			options: {
				paths: ['less'],
				compress: true,
				yuicompress: true,
				optimization: 2
			},
			compile: {
				expand: true,
				cwd: 'less',
				src: ['**/*.less'],  
				dest: 'css/',
				ext: '.css'
			}
        },  
		watch: {
			less: {
				files: ['less/**/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			},
			combo: {
				files: ['script-ss/**/*.js'],
				tasks: ['combo'],
				options: {
					spawn: false,
				},
			}
		}

    });  
  
    grunt.loadNpmTasks('grunt-cmd-combo');  
    grunt.loadNpmTasks('grunt-contrib-uglify');  
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint')
  
    grunt.registerTask('default', ['jshint','watch']);
    grunt.registerTask('mkcss', ['less']);
    grunt.registerTask('normal', ['combo']);
    grunt.registerTask('min', ['combo', 'uglify']);
    grunt.registerTask('build', ['less', 'combo', 'uglify']);
};
