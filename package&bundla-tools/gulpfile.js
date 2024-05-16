const { src: changeSrc, dest, series, parallel, src } = require("gulp");
const htmlmin = require("gulp-html-minifier-terser");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const cleanCss = require("gulp-clean-css");
const imagesOptimization = require("gulp-optimize-images");
const htmlreplace = require('gulp-html-replace');



const globs = {
  html: "./project/*.html",
  css: "./project/css/**/*.css",
  js: "./project/js/*.js"
}

// Html task
function htmlTask() {
  // Get html files
  return src(globs.html)
    // Minification my files
    .pipe(htmlmin({ removeComments: true, collapseWhitespace: true }))
    // Create dist folder to save minification files.
    .pipe(dest("./dist"));
}




// exports.default = ()=> {
//   return src("./project/index.html").pipe(htmlreplace({
//     'css':'css/style.min.css',
//     'js':'js/script.min.js',
//   })).pipe(dest("./www"));
// };

// Css task
function cssTask() {
  // Get css files.
  return changeSrc(globs.css)
    // Concat files.
    .pipe(concat("style.min.css"))
    // Minification my files.
    .pipe(cleanCss())
    // Create dist folder to save minification files.
    .pipe(dest("./dist/css"));
}

// JavaScript task
function jsTask() {
  // Get js files.
  return changeSrc(globs.js)
    // Concat files.
    .pipe(concat("script.min.js"))
    // Minification my files.
    .pipe(terser())
    // Create dist folder to save minification files.
    .pipe(dest("./dist/js"));
}

// Image task
function imageTask() {
  // Get my images
  return changeSrc("./project/pics/*")
  // Optimize images
  .pipe(imagesOptimization({
    compressOptions: {
      jpeg: {
        quality: 60
      }
    }
  }))
  // Create dist folder to save minification files.
  .pipe(dest("./dist/pics"));
}


// For run all tasks in the order.
// exports.default = series(htmlTask,cssTask,jsTask,imageTask);

// For run all tasks once time.
exports.default = parallel(htmlTask,cssTask,jsTask,imageTask);