## NFTICKETING

**An nft contract built on solidity and foundry.**


**Contract Address.**
0x521B8Fc38BF90D1E4c45dcbe25644c3A469698b0

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```


### Deploy
Have an env file in smart-contracts folder and include PRIVATE-KEY 

```shell
$ forge script Ticketing.s.sol --rpc-url <YOUR PRC URL> --broadcast -vvv
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
