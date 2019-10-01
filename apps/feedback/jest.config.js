module.exports = {
  name: 'feedback',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/feedback',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
