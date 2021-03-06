import videojs from 'video.js';
import spriteThumbs from './sprite-thumbnails.js';
import {version as VERSION} from '../package.json';

/**
 * Default plugin options
 *
 * @param {String} url
 *        Sprite location. Must be set by user.
 *        Can be a function for chunked url generation.
 * @param {Integer} width [optional]
 *        Width in pixels of a thumbnail.
 *        Optional if columns is set.
 * @param {Number} columns [optional]
 *        Number of tile columns in the picture.
 *        Optional if width is set.
 * @param {Integer} height [optional]
 *        Height in pixels of a thumbnail.
 *        Optional if rows is set.
 * @param {Number} rows [optional]
 *        Number of tile rows in the picture.
 *        Optional if height is set.
 * @param {Number} tiles [optional]
 *        Total number of tiles on the timeline.
 *        Optional, used to automatically calculate interval if provided.
 * @param {Number} interval [optional]
 *        Interval between thumbnail frames in seconds.
 *        Default: 1 or automatic if number of tiles set.
 * @param {Integer} responsive
 *        Width of player below which thumbnails are reponsive. Default: 600.
 */
const defaults = {
  url: '',
  responsive: 600
};

/**
 * The video.js sprite thumbnails plugin.
 *
 * Invokes spriteThumbs to set up and display thumbnails from a sprite image
 * when the user hovers over the progress bar.
 *
 * @function spriteThumbnails
 * @param    {Object} options
 *           Object accepting 4 plugin configuration parameters.
 */
const spriteThumbnails = function(options) {
  spriteThumbs(this, videojs.mergeOptions(defaults, options));
};

// Register the plugin with video.js.
videojs.registerPlugin('spriteThumbnails', spriteThumbnails);

// Include the version number.
spriteThumbnails.VERSION = VERSION;

export default spriteThumbnails;
