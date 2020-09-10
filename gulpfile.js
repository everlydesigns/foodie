/*==========================================================================*/
/* Import Modules
/*==========================================================================*/
const { src, dest, task, watch, parallel, series } = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-csso')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
// const livereload = require('gulp-livereload')
const image = require('gulp-image')
const imageResize = require('gulp-image-resize')
const resize = require('gulp-images-resizer')
const merge = require('merge-stream')
const browserSync = require('browser-sync').create();


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
		.pipe(browserSync.stream())
		// .pipe(livereload({ start: true }))
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
		// .pipe(browserSync.reload())
}

/* Optimize graphics
/*--------------------------------------------------------------------------*/
function imgOptimize() {
	return src(['src/img/**/*', '!src/img/posts/*', '!src/img/gallery/*'])
		.pipe(image({
			jpegRecompress: ['--strip', '--quality', 'high', '--min', 80, '--max', 100],
			quiet: true
		}))
		.pipe(dest('./dist/img'))
}

/* Generate thumbnails
/*--------------------------------------------------------------------------*/
function generateThumbnails() {
	// Set path
	const srcPath = 'src/img/posts/*';
	const destPath = srcPath.replace('src', 'dist').slice(0,-1);

	// Set sizes
	const imageSizes = [{
		width: 1520,
		retina: false,
	}, 420, 320, 260];

	// create array with gulp streams
	const gulpStreams = [];

	// Resize images
	imageSizes.forEach((sizeInfo, i) => {
		const resizeObj = {};
		let isRetina = true;
		let sizeSuffix;
		let imageBreadth;

		// get resize object and size suffix
		if ( typeof sizeInfo == 'object' ) {
			// determine image breadth & resize obj
			if ( 'width' in sizeInfo ) {
				imageBreadth = sizeInfo.width;
				resizeObj.width = imageBreadth;
			}
			if ( 'height' in sizeInfo ) {
				imageBreadth = sizeInfo.height;
				resizeObj.height = imageBreadth;
			}

			// check for retina
			if ( 'retina' in sizeInfo ) {
				isRetina = sizeInfo.retina;
			}
		} else {
			imageBreadth = sizeInfo;
			resizeObj.width = imageBreadth;
			if ( isRetina ) resizeObj.width = imageBreadth * 2;
		}

		// set suffix
		sizeSuffix = '-'+imageBreadth;
		if ( isRetina ) sizeSuffix += '@2x';

		// stream to resize, optimize and rename image
		gulpStreams[i] = src(srcPath)
			.pipe(resize(resizeObj))
			.pipe(image())
			.pipe(rename({suffix: sizeSuffix}))
			.pipe(dest(destPath));

		// additional retina stuff
		if ( isRetina ) {
			gulpStreams[i]
				.pipe(resize({ width: '50%' }))
				.pipe(rename(path => ({
					dirname: path.dirname,
					basename: path.basename.replace('@2x', ''),
					extname: path.extname,
				})))
				.pipe(dest(destPath));
		}
	});

	// merge streams
	return merge(...[gulpStreams]);
}

/* Generate gallery thubmnails
/*--------------------------------------------------------------------------*/
function generateGalleryThumbs() {
	// Set path
	const srcPath = 'src/img/gallery/*';
	const destPath = srcPath.replace('src', 'dist').slice(0,-1);

	// Set sizes
	const imageSizes = [{
		width: 1280,
		retina: false,
	}, 250, 180];

	// create array with gulp streams
	const gulpStreams = [];

	// Resize images
	imageSizes.forEach((sizeInfo, i) => {
		const resizeObj = {};
		let isRetina = true;
		let sizeSuffix;
		let imageBreadth;

		// get resize object and size suffix
		if ( typeof sizeInfo == 'object' ) {
			// determine image breadth & resize obj
			if ( 'width' in sizeInfo ) {
				imageBreadth = sizeInfo.width;
				resizeObj.width = imageBreadth;
			}
			if ( 'height' in sizeInfo ) {
				imageBreadth = sizeInfo.height;
				resizeObj.height = imageBreadth;
			}

			// check for retina
			if ( 'retina' in sizeInfo ) {
				isRetina = sizeInfo.retina;
			}
		} else {
			imageBreadth = sizeInfo;
			resizeObj.width = imageBreadth;
			if ( isRetina ) resizeObj.width = imageBreadth * 2;
		}

		// set suffix
		sizeSuffix = '-'+imageBreadth;
		if ( isRetina ) sizeSuffix += '@2x';

		// stream to resize, optimize and rename image
		gulpStreams[i] = src(srcPath)
			.pipe(resize(resizeObj))
			.pipe(image())
			.pipe(rename({suffix: sizeSuffix}))
			.pipe(dest(destPath));

		// additional retina stuff
		if ( isRetina ) {
			gulpStreams[i]
				.pipe(resize({ width: '50%' }))
				.pipe(rename(path => ({
					dirname: path.dirname,
					basename: path.basename.replace('@2x', ''),
					extname: path.extname,
				})))
				.pipe(dest(destPath));
		}
	});

	// merge streams
	return merge(...[gulpStreams]);
}


/*==========================================================================*/
/* Watch Files
/*==========================================================================*/
function watchFiles() {
	// start server
	browserSync.init({
		open: false,
		ghostMode: false,
		server: {
			baseDir: "./",
			injectChanges: true
		}
	});

	// watch all scss files
	watch('src/scss/**/*.scss', sassPrefixMin)

	// watch all js files
	watch('src/js/**/*.js', jsBabelMin)

	// watch all img files
	watch('src/img/**/*', imgOptimize)
}

/*==========================================================================*/
/* Tasks
/*==========================================================================*/
task('default', parallel(sassPrefixMin, jsBabelMin, imgOptimize, watchFiles))

// task('browser-sync', series(sassPrefixMin, jsBabelMin, imgOptimize, watchFiles, browserSyncInit))

/* SASS Task
/*--------------------------------------------------------------------------*/
task('sass', sassPrefixMin)

/* JS Task
/*--------------------------------------------------------------------------*/
task('js', jsBabelMin)

/* IMG Task
/*--------------------------------------------------------------------------*/
task('img', imgOptimize)

/* Generate Post Thumbnails Task
/*--------------------------------------------------------------------------*/
task('post-thumbs', generateThumbnails)

// Generate gallery thumbnails
task('gallery-thumbs', generateGalleryThumbs)
