/**
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


#import "ViewController.h"
#import <IBMMobileFirstPlatformFoundation/IBMMobileFirstPlatformFoundation.h>


@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIButton *testServerButton;
@property (weak, nonatomic) IBOutlet UILabel *titleLabel;
@property (weak, nonatomic) IBOutlet UILabel *connectionStatusLabel;

@end

@implementation ViewController

- (IBAction)getAccessToken:(id)sender {
    _testServerButton.enabled = NO;
    NSURL *serverURL = [[WLClient sharedInstance] serverUrl];
    _connectionStatusLabel.text = [NSString stringWithFormat:@"Connecting to server...\n%@", serverURL];
    
    
    NSLog(@"Testing Server Connection");
    [[WLAuthorizationManager sharedInstance] obtainAccessTokenForScope:nil
                                                 withCompletionHandler:^(AccessToken *token, NSError *error) {
        if (error != nil) {
            _titleLabel.text = @"Bummer...";
            _connectionStatusLabel.text = [NSString stringWithFormat:@"Failed to connect to MobileFirst Server\n%@", serverURL];
            NSLog(@"Did not receive an access token from server: %@", error.description);
        } else {
            _titleLabel.text = @"Yay!";
            _connectionStatusLabel.text = [NSString stringWithFormat:@"Connected to MobileFirst Server\n%@", serverURL];
            NSLog(@"Received the following access token value: %@", token.value);
        }

        _testServerButton.enabled = YES;
    }];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

@end
