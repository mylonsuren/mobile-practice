cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-globalization.GlobalizationError",
    "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "window.GlobalizationError"
    ]
  },
  {
    "id": "cordova-plugin-globalization.globalization",
    "file": "plugins/cordova-plugin-globalization/www/globalization.js",
    "pluginId": "cordova-plugin-globalization",
    "clobbers": [
      "navigator.globalization"
    ]
  },
  {
    "id": "cordova-plugin-mfp.mfp",
    "file": "plugins/cordova-plugin-mfp/bootstrap.js",
    "pluginId": "cordova-plugin-mfp",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-globalization": "1.0.9",
  "cordova-plugin-okhttp": "2.0.0",
  "cordova-plugin-mfp": "8.0.2017121811"
};
// BOTTOM OF METADATA
});