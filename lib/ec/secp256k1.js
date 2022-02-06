import elliptic from "elliptic";
import chalk from "chalk";

export default () => {
  const EC = new elliptic.ec("secp256k1");
  const keypair = EC.genKeyPair();
  const secretKey = keypair.getPrivate("hex");
  const publicKey = keypair.getPublic("hex");

  console.log(chalk.bold.green("Secret key:"), secretKey);
  console.log(chalk.bold.green("Public key:"), publicKey);
};
