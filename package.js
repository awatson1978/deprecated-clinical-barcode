Package.describe({
  summary: "fonts-barcode is a Meteorite package for adding the 3 of 9 Barcode font to Meteor apps."
});

Package.on_use(function (api) {
    api.add_files('fonts/3OF9_NEW.TTF', "client");
    api.add_files('fonts-barcode.css', "client");
});
