var copy = require("copy-dynamodb-table").copy;

var globalAWSConfig = {
  // AWS Configuration object http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  accessKeyId: "AKIA254DPEAHEZIGP3YF",
  secretAccessKey: "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",
  region: "us-east-1",
};

copy(
  {
    config: globalAWSConfig, // config for AWS

    source: {
      tableName: "Service-c3he3frxfvb7vnrj2oqff3wzbe-prod", // required
    },
    destination: {
      tableName: "Service-txksje4zjbfydekcbe47i3b4la-prod", // required
    },
    log: true, // default false
    create: false, // create destination table if not exist
    schemaOnly: false, // if true it will copy schema only -- optional
    continuousBackups: true, // if true will enable point in time backups
    transform: function (item, index) {
      return item;
    }, // function to transform data
  },
  function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  }
);
