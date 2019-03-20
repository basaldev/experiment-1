/*
 * Rakuten React kit
 *
 * Copyright © 2017 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { store } from 'domain/store/main';
import render from 'renderer';
import startRouters from 'domain/middleware/router';

window['AWS'].config.region = 'us-east-1'; // Region
window['AWS'].config.credentials = new window['AWS'].CognitoIdentityCredentials({
  // Provide your Pool Id here
  IdentityPoolId: 'us-east-1:a7ef0bcd-4c3e-4965-8342-688cedd4f60e',
});
store.addWatch('renderLoop', render);
startRouters();
