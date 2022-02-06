#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import ec from "./commands/ec.js";
import wallet from "./commands/wallet.js";

yargs(hideBin(process.argv))
  .command(ec)
  .command(wallet)
  .demandCommand()
  .help()
  .parse();
