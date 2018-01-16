<!---Licensed Materials - Property of IBM
5725-I43 (C) Copyright IBM Corp. 2016. All Rights Reserved.
US Government Users Restricted Rights - Use, duplication or
disclosure restricted by GSA ADP Schedule Contract with IBM Corp.-->

# IBM MobileFirst Platform Foundation iOS Objective C Sample Application
Use this sample application to get started with development of iOS Objective C applications.
The application uses the IBM MobileFirst SDK to connect to a local or remote server and obtain an access token.

**Getting Started**

1.  Unzip the compressed ios-objective-c.tgz file.
* Change directory into MFPStarterIOSObjectiveC.
* Run the 'mfpdev app register' command to register the sample application on the MobileFirst Server:
  * mfpdev app register
  * Follow any prompts to include server and client application details.
* Load the MFPStarterIOSObjectiveC.xcworkspace file into the XCode development environment.
* Run the sample application on either a real or virtual device from the XCode console by
	* clicking the Product option
  or
	* clicking Run

**Updating the IBM Mobile Platform SDK**

The IBM Mobile Platform SDK files should be up-to-date. However, a Podfile has been included to update the SDKs to the latest version. To install this Podfile:

1. Change directory into MFPStarterIOSObjectiveC
* Run pod install

**License**

The software license can be found here: http://www.ibm.com/software/sla/sladb.nsf/sla/bla

**More information**

- IBM MobileFirst Platform Foundation section of IBM Knowledge Center:

 http://ibm.biz/knowctr#SSHS8R_8.0.0/wl_welcome.html

- Getting started with a MobileFirst sample application:

 http://ibm.biz/knowctr#SSHS8R_8.0.0/com.ibm.worklight.dev.doc/dev/t_download_samples.html

- "Quick Start" section in IBM MobileFirst Platform tutorials:

 https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/all-tutorials/
