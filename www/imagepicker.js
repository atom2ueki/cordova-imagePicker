/*global cordova,window,console*/
/**
 * An Image Picker plugin for Cordova
 *
 * Developed by Wymsee for Sync OnSet
 */

var ImagePicker = function() {

};

/*
*	success - success callback
*	fail - error callback
*	options
*		.maximumImagesCount - max images to be selected, defaults to 15. If this is set to 1,
*		                      upon selection of a single image, the plugin will return it.
*		.width - width to resize image to (if one of height/width is 0, will resize to fit the
*		         other while keeping aspect ratio, if both height and width are 0, the full size
*		         image will be returned)
*		.height - height to resize image to
*		.quality - quality of resized image, defaults to 100
*/
ImagePicker.prototype.getPictures = function(success, fail, options) {
	if (!options) {
		options = {};
	}
	
	var result =[];

	options.forEach(function(option) {
		var params = {
			maximumImagesCount: options.maximumImagesCount ? options.maximumImagesCount : 15,
			width: option.width ? option.width : 0,
			height: option.height ? option.height : 0,
			quality: option.quality ? option.quality : 100
		};
		result.push(cordova.exec(success, fail, "ImagePicker", "getPictures", [params]));
	});

	return result;
};

window.imagePicker = new ImagePicker();
