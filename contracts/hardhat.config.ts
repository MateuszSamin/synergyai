import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "solidity-coverage";
import { HardhatUserConfig } from "hardhat/config";
import SECRETS from "./secrets.json";

const { PRIVATE_KEY, INFURA_KEY, ETHERSCAN_KEY } = SECRETS;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    mainnet: {
      chainId: 1,
      accounts: [PRIVATE_KEY],
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    },
    goerli: {
      chainId: 5,
      accounts: [PRIVATE_KEY],
      url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
    },
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      },
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_KEY,
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  },
};

export default config;
