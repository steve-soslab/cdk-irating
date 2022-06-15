const cdk = require('aws-cdk-lib');
import * as lambda from 'aws-cdk-lib/aws-lambda'

class LambdaCdkIratingStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    const iRating = new lambda.Function(this, 'IRating', {
      runtime: lambda.Runtime.NODEJS_14_X, // exceution environment
      code: lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
      handler: 'irating.handler', // handler function name
    })   

  }
}

module.exports = { LambdaCdkIratingStack }
