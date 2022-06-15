#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { LambdaCdkIratingStack } = require('../lib/lambda-cdk-irating-stack');

const app = new cdk.App();
new LambdaCdkIratingStack(app, 'LambdaCdkIratingStack');
