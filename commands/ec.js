export default {
  command: "ec <curve>",
  describe: "Generate a new EC key pair",

  builder: function (yargs) {
    yargs.choices("curve", ["secp256k1"]);
  },

  async handler(argv) {
    const { default: handler } = await import(`../lib/ec/${argv.curve}.js`);
    return handler();
  },
};
