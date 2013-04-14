//TODO:  Create audio package; publish to Atmosphere

Package.describe({
  summary: "Adds an audio-pkg sound whenever someone clicks a list item."
});

// custom "wav" register puts wav files in /audio
// per tools/bundler.js, valid type for bundle can be js, css or static 
Package.register_extension(
  "ttf", function (bundle, source_path, serve_path, where) {
    bundle.add_resource({
      type: "static",
      path: '/fonts/' + serve_path.split('/').pop(),
      source_file: source_path,
      where: where
    });
  }
);

Package.on_use(function (api) {
    var path = Npm.require('path');
    api.add_files(path.join('fonts', '3OF9_NEW.TTF'), 'client');

    api.add_files('fonts-barcode.css', "client");
});
