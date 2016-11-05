import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareFontAwesome() {
  const source = 'node_modules\\font-awesome';

  const taskCss = gulp.src(`node_modules\\font-awesome\\css\\font-awesome.min.css`)
    //.pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}`));

  const taskFonts = gulp.src(`node_modules\\font-awesome\\fonts\\*`)
    //.pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}`));

  return merge(taskCss, taskFonts);
}
