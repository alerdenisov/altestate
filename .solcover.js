module.exports = {
  copyPackages: ['zeppelin-solidity'],
  port: 8545,
  testrpcOptions: '-p 6545 -u 0x54fd80d6ae7584d8e9a19fe1df43f04e5282cc43',
  testCommand: 'mocha --timeout 5000',
  norpc: true,
  copyPackages: ['zeppelin-solidity'],
  skipFiles: ['Routers/EtherRouter.sol']
}