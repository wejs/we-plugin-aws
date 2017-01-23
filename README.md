# We.js AWS connector plugin

Add AWS SDK in one we.js project, use with other we.js plugins like we-plugin-file-s3

## Configuration

And add AWS account configuration in **config/local.js** file:

```js
  // ----
  apiKeys: {
    AWS: {
      region: 'us-east-11',
      accessKeyId: 'yourclientid',
      secretAccessKey: 'yoursecretkey',
    }
  }
  // ----
```

## Links

> * We.js site: http://wejs.org

## Copyright

Copyright Alberto Souza <contato@albertosouza.net> and contributors , under [the MIT license](https://github.com/wejs/we-core/blob/master/LICENSE.md).