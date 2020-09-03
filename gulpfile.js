/*==========================================================================*/
/* Import Modules
/*==========================================================================*/
const { src, dest, task, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-csso')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const livereload = require('gulp-livereload')
const image = require('gulp-image')
const imageResize = require('gulp-image-resize')
const resize = require('gulp-images-resizer')
const merge = require('merge-stream')


/* SASS + Autoprefixer + Minifier
/*--------------------------------------------------------------------------*/
function sassPrefixMin() {
	return src('src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ cascade: false }))
		//.pipe(dest(file => file.base)) // optional*
		.pipe(minifyCSS())
		//.pipe(rename({suffix: '.min' })) // optional*
		.pipe(dest('./dist/css'))
		.pipe(livereload({ start: true }))
}

/* JS + Babel + Uglify
/*--------------------------------------------------------------------------*/
function jsBabelMin() {
	return src('src/js/**/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(terser())
		.pipe(dest('./dist/js'))
}

/* Optimize graphics
/*--------------------------------------------------------------------------*/
function imgOptimize() {
	return src(['src/img/**/*', '!src/img/posts/*'])
		.pipe(image())
		.pipe(dest('./dist/img'))
}

/* Generate thumbnails
/*--------------------------------------------------------------------------*/
function generateThumbnails() {
	// Resize and optimize post media
	let optimizePosts1 = src('src/img/posts/*')
		.pipe(resize({
			width: 1520 // max width 1520px
		}))
		.pipe(image())
		.pipe(rename({suffix: '-1520' }))
		.pipe(dest('./dist/img/posts'))

	// max width 380px + retina
	let optimizePosts2 = src('src/img/posts/*')
		.pipe(resize({
			width: (420 * 2)
		}))
		.pipe(image())
		.pipe(rename({suffix: '-420@2x' }))
		.pipe(dest('./dist/img/posts'))
		.pipe(resize({
			width: '50%'
		}))
		.pipe(image())
		.pipe(rename(path => ({
			dirname: path.dirname,
			basename: path.basename.replace('@2x', ''),
			extname: path.extname,
		})))
		.pipe(dest('./dist/img/posts'))

	// max width 320px + retina
	let optimizePosts3 = src('src/img/posts/*')
		.pipe(resize({
			width: (320 * 2)
		}))
		.pipe(image())
		.pipe(rename({suffix: '-320@2x' }))
		.pipe(dest('./dist/img/posts'))
		.pipe(resize({
			width: '50%'
		}))
		.pipe(image())
		.pipe(rename(path => ({
			dirname: path.dirname,
			basename: path.basename.replace('@2x', ''),
			extname: path.extname,
		})))
		.pipe(dest('./dist/img/posts'))

	// max width 260px + retina
	let optimizePosts4 = src('src/img/posts/*')
		.pipe(resize({
			width: (260 * 2)
		}))
		.pipe(image())
		.pipe(rename({suffix: '-260@2x' }))
		.pipe(dest('./dist/img/posts'))
		.pipe(resize({
			width: '50%'
		}))
		.pipe(image())
		.pipe(rename(path => ({
			dirname: path.dirname,
			basename: path.basename.replace('@2x', ''),
			extname: path.extname,
		})))
		.pipe(dest('./dist/img/posts'))

	// merge all actions
	return merge(
		optimizePosts1,
		optimizePosts2,
		optimizePosts3,
		optimizePosts4
	);
}

/*==========================================================================*/
/* Watch Files
/*==========================================================================*/
function watchFiles() {
	// watch all scss files
	watch('src/scss/**/*.scss', sassPrefixMin)

	// watch all js files
	watch('src/js/**/*.js', jsBabelMin)

	// watch all img files
	watch('src/img/*', imgOptimize)
}

/*==========================================================================*/
/* Tasks
/*==========================================================================*/
task('default', parallel(sassPrefixMin, jsBabelMin, watchFiles, imgOptimize))

/* SASS Task
/*--------------------------------------------------------------------------*/
task('sass', sassPrefixMin)

/* JS Task
/*--------------------------------------------------------------------------*/
task('js', jsBabelMin)

/* IMG Task
/*--------------------------------------------------------------------------*/
task('img', imgOptimize)

/* Generate Thumbnails Task
/*--------------------------------------------------------------------------*/
task('thumbnails', generateThumbnails)
