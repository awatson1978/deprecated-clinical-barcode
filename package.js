Package.describe({
  summary: "Adds an audio-pkg sound whenever someone clicks a list item."
});

Package.register_extension(
  "TTF", function (bundle, source_path, serve_path, where) {
    bundle.add_resource({
      type: "static",
      path: '/fonts/' + serve_path.split('/').pop(),
      source_file: source_path,
      where: where
    });
  }
);

Package.on_use(function (api) {
    api.add_files('3OF9_NEW.TTF', "client");
    api.add_files('fonts-barcode.css', "client");
});
