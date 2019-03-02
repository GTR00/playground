var gulp       = require("gulp"),
    connect    = require("gulp-connect"),
    // autoprefix = require("gulp-autoprefixer"),
    // bourbon    = require("bourbon").includePaths,
    neat       = require("bourbon-neat").includePaths,
    sass       = require("gulp-sass");

var paths = {
  scss: ["./scss/**/*.scss"]
};

gulp.task("sass", function () {
  return gulp.src(paths.scss)
    .pipe(sass({
        sourcemaps: true,
        includePaths: [neat]
    }))
    // .pipe(autoprefix("last 2 versions"))
    .pipe(gulp.dest("./css"))
    // .pipe(connect.reload());
});

gulp.task("connect", function() {
  connect.server({
    root: "source",
    port: 8000,
    livereload: true
  });
});

gulp.task("default", gulp.series("sass", "connect"), function() {
  gulp.watch(paths.scss, ["sass"]);
});