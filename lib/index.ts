// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface MultiRegionS3CrrKmsCmkSourceProps {
  // Define construct properties here
}

export class MultiRegionS3CrrKmsCmkSource extends Construct {

  constructor(scope: Construct, id: string, props: MultiRegionS3CrrKmsCmkSourceProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'MultiRegionS3CrrKmsCmkSourceQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
