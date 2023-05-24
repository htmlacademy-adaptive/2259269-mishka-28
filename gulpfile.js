import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import del from 'del';
<<<<<<< HEAD
// import squoosh from 'gulp-libsquoosh';
=======
import squoosh from 'gulp-libsquoosh';
>>>>>>> 9aaee7c24ff3e3b4415dc1dcf0bab118c85b15fe
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';

// Styles

const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(cleanCss({
      level: 1
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

const transferRoot = () => {
  return gulp.src('source/*.{ico,webmanifest}')
    .pipe(gulp.dest('build/'))
};

const transferFonts = () => {
  return gulp.src('source/fonts/*.{woff,woff2}')
    .pipe(gulp.dest('build/fonts'))
};

const creatingSprite = () => {
<<<<<<< HEAD
  return gulp.src('source/img/svg/**/*.svg')
=======
  return gulp.src('source/img/icons-sprite/**/*.svg')
>>>>>>> 9aaee7c24ff3e3b4415dc1dcf0bab118c85b15fe
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(rename({
      dirname: './'
    }))
    .pipe(gulp.dest('build/img/'))
};

<<<<<<< HEAD
const transferSvg = () => {
  return gulp.src('source/img/svg/**/*.svg')
    .pipe(gulp.dest('build/img/'))
}

=======
>>>>>>> 9aaee7c24ff3e3b4415dc1dcf0bab118c85b15fe
const optimizeImagesJpg = () => {
  return gulp.src('source/img/*.{jpg,jpeg}')
    .pipe(squoosh({
      mozjpeg: {},
      webp: {}
    }))
    .pipe(rename({
      dirname: './'
    }))
    .pipe(gulp.dest('build/img'))
};

const optimizeImagesPng = () => {
  return gulp.src('source/img/*.png')
    .pipe(squoosh({
      oxipng: {},
      webp: {}
    }))
    .pipe(rename({
      dirname: './'
    }))
    .pipe(gulp.dest('build/img'))
};

const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build/'))
}

const cleanRoot = () => {
  return del('build/');
};

const transferFavicons = () => {
  return gulp.src('source/img/favicons/**/*.png')
    .pipe(rename({
      dirname: './'
    }))
    .pipe(gulp.dest('build/img/'))
};

const js = () => {
  return gulp.src('source/js/**/*.js')
    .pipe(terser())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('build/js'))
};

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}

export const build = gulp.series(
  cleanRoot,
  html,
  js,
  transferRoot,
  transferFonts,
  transferFavicons,
  creatingSprite,
  styles,
<<<<<<< HEAD
  // optimizeImagesJpg,
  // optimizeImagesPng,
  transferSvg
=======
  optimizeImagesJpg,
  optimizeImagesPng
>>>>>>> 9aaee7c24ff3e3b4415dc1dcf0bab118c85b15fe
  );

export default gulp.series(
  build, server, watcher
);
