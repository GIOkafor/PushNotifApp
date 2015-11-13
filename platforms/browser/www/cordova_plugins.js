cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.pushbots.push/www/pushbots.js",
        "id": "com.pushbots.push.PushbotsPlugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "android.support.v4": "21.0.1",
    "com.pushbots.push": "1.2.7",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});