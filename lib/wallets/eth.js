import { Wallet } from "ethers";
import chalk from "chalk";

export default () => {
  const wallet = Wallet.createRandom();

  console.log(chalk.bold.green("Address:"), wallet.address);
  console.log(chalk.bold.green("Mnemonic:"), wallet.mnemonic.phrase);
  console.log(chalk.bold.green("Private key:"), wallet.privateKey);
};
