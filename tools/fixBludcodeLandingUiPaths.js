const fs = require('fs');
const path = require('path');

const packageRoot = path.resolve(__dirname, '..', 'node_modules', 'bludcode-landing-ui');

const replacements = [
  {
    file: path.join(packageRoot, 'src', 'components', 'organism', 'headers', 'HeaderBludcodeBlue.js'),
    pairs: [
      ['../../../../styles/components/navbarBludcode.scss', '../../../styles/components/navbarBludcode.scss'],
      ['../../../../js/autoScrollTo.js', '../../../js/autoScrollTo.js'],
      ['../../../../styles/components/progressBar.scss', '../../../styles/components/progressBar.scss'],
      ['../../../../images/facebook.png', '../../../images/facebook.png'],
      ['../../../../images/twitter.png', '../../../images/twitter.png'],
      ['../../../../scripts/jquery.nicescroll.min.js', '../../../scripts/jquery.nicescroll.min.js']
    ]
  },
  {
    file: path.join(packageRoot, 'src', 'components', 'molecules', 'Layout', 'stars.js'),
    pairs: [
      ['../../styles/components/molecules/stars.scss', '../../../styles/components/molecules/stars.scss']
    ]
  },
  {
    file: path.join(packageRoot, 'dist', 'components', 'organism', 'headers', 'HeaderAluven.js'),
    pairs: [
      ['../../../../styles/components/navbarAluven.scss', '../../../styles/components/navbarAluven.scss'],
      ['../../../../images/logoAluven.jpeg', '../../../images/logoAluven.jpeg'],
      ['../../../../js/autoScrollTo.js', '../../../js/autoScrollTo.js']
    ]
  },
  {
    file: path.join(packageRoot, 'dist', 'components', 'organism', 'headers', 'HeaderTiburon.js'),
    pairs: [
      ['../../../../styles/components/progressBar.scss', '../../../styles/components/progressBar.scss'],
      ['../../../../images/logo-white.png', '../../../images/logo-white.png'],
      ['../../../../styles/components/navbarTiburon.scss', '../../../styles/components/navbarTiburon.scss']
    ]
  }
];

function copyRecursive(source, target) {
  if (!fs.existsSync(source)) {
    return;
  }

  const stats = fs.statSync(source);
  if (stats.isDirectory()) {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }

    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(target, entry));
    }
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

let changed = false;

for (const { file, pairs } of replacements) {
  if (!fs.existsSync(file)) {
    continue;
  }

  let contents = fs.readFileSync(file, 'utf8');
  let nextContents = contents;

  for (const [from, to] of pairs) {
    nextContents = nextContents.split(from).join(to);
  }

  if (nextContents !== contents) {
    fs.writeFileSync(file, nextContents);
    changed = true;
  }
}

const copies = [
  ['src', 'assets', 'dist', 'assets'],
  ['src', 'images', 'dist', 'images'],
  ['src', 'js', 'dist', 'js'],
  ['src', 'scripts', 'dist', 'scripts'],
  ['src', 'styles', 'components', 'dist', 'styles', 'components']
];

for (const segments of copies) {
  const pivot = segments.indexOf('dist');
  const source = path.resolve(__dirname, '..', ...segments.slice(0, pivot));
  const target = path.join(packageRoot, ...segments.slice(pivot));
  copyRecursive(source, target);
}

if (!changed) {
  console.log('bludcode-landing-ui paths already fixed or dependency not present.');
} else {
  console.log('Patched bludcode-landing-ui import paths.');
}
