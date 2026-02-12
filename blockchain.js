const Block = require("./block");
const cryptoHash = require("./crypto-hash");

class Blockchain{
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock({data}){
        const newBlock = Block.mineblock({
            prevBlock: this.chain[this.chain.length-1],
            data
        });
        this.chain.push(newBlock);
    }

 replaceChain(chain) {
  if (chain.length <= this.chain.length) {
    console.log("Incoming chain must be longer");
    return;
  }

  if (!Blockchain.isValidChain(chain)) {
    console.log("Incoming chain is invalid");
    return;
  }

  console.log("Replacing chain with", chain);
  this.chain = chain;
}



    static isValidChain(chain) {
  if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
    return false;

  for (let i = 1; i < chain.length; i++) {
    const { timestamp, prevHash, hash, nonce, difficulty, data } = chain[i];
    const actualPrevHash = chain[i - 1].hash;

    if (prevHash !== actualPrevHash) return false;

    const validatedHash = cryptoHash(timestamp, prevHash, data, nonce, difficulty);

    if (hash !== validatedHash) return false;
  }

  return true;
}

}

const blockchain = new Blockchain();
blockchain.addBlock({data: "Block1"});
blockchain.addBlock({data: "Block2"});
const result = Blockchain.isValidChain(blockchain.chain);
console.log(blockchain.chain);
console.log(result);
    // console.log(blockchain);
module.exports = Blockchain;