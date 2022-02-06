export default {
  command: "wallet <network>",
  describe: "Generate a new wallet",

  builder: function (yargs) {
    yargs.choices("network", ["eth"]);
  },

  async handler(argv) {
    const { default: handler } = await import(
      `../lib/wallets/${argv.network}.js`
    );
    return handler();
  },
};
