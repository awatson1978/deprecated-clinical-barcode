**fonts-barcode** is a Meteorite package for adding the 3 of 9 Barcode font to Meteor apps.   If you like these pictographs, go to their website and buy the pro version!  They're fantastic!

http://modernpictograms.com/

------------------------
### Installation

First, install the fonts-barcode package from the command line, like so:

````
mrt add fonts-barcode
````

------------------------
### Data/Document Model

Second, add the 'barcode' class to the appropriate HTML tags, like so.  Dead simple, right?

````
    <div>This is a barcode: <span class="barcode">*123-45-6789*</span></div>
````


------------------------
### Reminder

You MUST enclose your barcode with asterixes!!!

````
*123456789*
````

