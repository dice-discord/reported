const { Batch } = require('reported');

const batchReport = new Batch({ botlistSpace: 'abcdef123456' }, '123456789');

batchReport.submit({
  serverCount: 100,
  shards: [50, 50]
});
