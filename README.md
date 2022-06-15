## Install AWS SAM

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

### Install CDK globally

`npm install -g aws-cdk@latest`

## Setup VSCODE debugging

create a launch.json file

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "aws-sam",
            "name": "Invoke Irating Lamda locally",
            "request": "direct-invoke",
            "invokeTarget": {
                "target":"code",
                "projectRoot": "lambda/",
                "lambdaHandler": "irating.handler",
            },
            "lambda":{
                "runtime": "nodejs14.x",
                "payload": "./lambda/irating.js"
            },
            "env":{
                "AWS_ACCESS_KEY_ID": <TODO>,
                "AWS_SECRET_ACCESS_KEY": <TODO>,
                "AWS_SESSION_TOKEN": <TODO>
            }

        }
    ]
}
```

# Welcome to your CDK JavaScript project

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands

* `npm run test`         perform the jest unit tests
* `cdk deploy`           deploy this stack to your default AWS account/region
* `cdk diff`             compare deployed stack with current state
* `cdk synth`            emits the synthesized CloudFormation template
