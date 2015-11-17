/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');


        //token id for specific device 
        var myToken = '';

        //if pushbots installed register device
        if(PushbotsPlugin.isAndroid()){
            PushbotsPlugin.initializeAndroid('5644f582177959b2358b4567', '502518271580');
            //get device token
            PushbotsPlugin.getToken(function(token){
                myToken = token;
                alert("Device token is: " + myToken);
            });   
        }

        //Camera activity
        //there's a reason onclick is specified here instead of in html
        document.getElementById("btnTakePhoto").onclick = function () {
            console.log("button clicked... Capturing image");
            navigator.camera.getPicture(cameraSuccess, cameraError);
        }

        //Camera functions
        function cameraSuccess(imageData){
            console.log("taking picture");
            var myImage = document.getElementById(imageHolder);
            myImage.innerHTML = "<img src='"+imageData+"'style='width:75%;'/>";
            alert("picture taken successfully");
        }

        function cameraError (error) {
            console.log("Picture wasn't taken because: " + error);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

    
};

app.initialize();