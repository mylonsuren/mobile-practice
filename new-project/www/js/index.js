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
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById("cordovaDevice").addEventListener("click", cordovaDevice);
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

function onExit() {}	//used to handle callback for exiting dialogs

function onRegistrationFailure(registrationFailureResults) {
	if (registrationFailureResults === 1) {
		// document.getElementById("cordovaDevice").innerHTML = 'if';
		cordovaDevice();
	} else {
		// document.getElementById("cordovaDevice").innerHTML = 'else';
		onExit();
	}
}

function showRegistrationFailure() {
	navigator.notification.confirm(
		'', // message
		 onRegistrationFailure,            // callback to invoke with index of button pressed
		'Registration Failed',           // title
		['Try Again', 'Exit']     // buttonLabels
	);
}

function showRegistrationConfirmation(userName) {
	navigator.notification.confirm(
        'Welcome ' + userName, // message
         onExit,            // callback to invoke with index of button pressed
        'Registration Complete',           // title
        ['Continue']     // buttonLabels
    );
}

function onPrompt(cordovaDeviceResults) {
	var userName = cordovaDeviceResults.input1;
	if (cordovaDeviceResults.buttonIndex === 1) {
		showRegistrationConfirmation(cordovaDeviceResults.input1);
	} else {
		showRegistrationFailure();
	}
}

function cordovaDevice() {
    navigator.notification.prompt(
        'Please enter your name',  // message
        onPrompt,                  // callback to invoke
        'Registration',            // title
        ['Ok','Exit'],             // buttonLabels
        ''                 		   // defaultText
    );
}


app.initialize();



// function onPrompt(results) {
//
//     function onEmpty(negatedResults) {}
//
//     if (results.buttonIndex === 1) {
//         navigator.notification.confirm(
//             'Welcome ' + results.input1, // message
//              onEmpty,            // callback to invoke with index of button pressed
//             'Registration Complete',           // title
//             ['Continue']     // buttonLabels
//         );
//     } else {
//
//         function onTryAgain(tryAgainResults) {
//             if (tryAgainResults.buttonIndex === 1) {
//                 cordovaDevice();
//             }
//         }
//
//         navigator.notification.confirm(
//             'Try again?',
//             onTryAgain,
//             'Registration Failed',
//             ['Yes', 'Exit']
//         );
//     }
//
// }
