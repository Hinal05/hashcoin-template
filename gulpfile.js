var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglifyjs'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
 
function style() {
    return gulp.src('./themes/custom/coin/src/sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/custom/coin/dist/css'));
}

function script() {
    return gulp.src('./themes/custom/coin/src/js/*.js')
      .pipe(uglify('main.js'))
      .pipe(gulp.dest('./themes/custom/coin/dist/js'))
}

function imgmin() {
    return gulp.src('./themes/custom/coin/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./themes/custom/coin/images'));
}

function watch() {
     browserSync.init({
        server: {
            baseDir: "./themes/custom/coin",
            directory: true,
            serveStaticOptions: {
                extensions: ["twig"]
            },
            startPath: "/page--front.html.twig",
            files: "**/*.twig, **/*.css, **/*.js, *.yml",
            reload:10000
        },
         hostname: "dev.sitename.local",
         port: 7000,
     });
    livereload.listen();
    gulp.watch('./themes/custom/coin/src/sass/**/*.scss', style)
    gulp.watch('./themes/custom/coin/**/*.twig').on('change',browserSync.reload);
    gulp.watch('./themes/custom/coin/src/js/main.js', script).on('change', browserSync.reload);

    //gulp.watch('./themes/custom/coin/src/js/main.js', script);
    gulp.watch(['./themes/custom/coin/dist/css/style.css', './themes/custom/coin/**/*.twig', './themes/custom/coin/*.yml', './themes/custom/coin/dist/js/main.js'], function (files){
        livereload.changed(files)
    });
}
exports.style = style;
exports.script = script;
exports.imgmin = imgmin;
exports.watch = watch;