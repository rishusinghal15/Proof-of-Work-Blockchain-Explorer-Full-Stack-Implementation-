const hexToBinary = require("hex-to-binary");
const {GENESIS_DATA, MINE_RATE} = require("./config");
const cryptoHash = require("./crypto-hash");
class block {
    constructor({timestamp, prevHash, hash, data, nonce, difficulty}){
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
        this.nonce =nonce;
        this.difficulty =difficulty;
    } 
    static genesis (){
        return new this(GENESIS_DATA);
    }
    static mineblock({prevBlock, data}){
        let hash, timestamp;
        const prevHash = prevBlock.hash;
        let {difficulty} = prevBlock;

        let nonce=0;
        do{
            nonce++;
            timestamp = Date.now();
            difficulty = block.adjustDifficulty({
                originalBlock: prevBlock, 
                timestamp,
            });
            hash = cryptoHash(timestamp, prevHash, data, nonce, difficulty)
        } while(hexToBinary(hash).substring(0, difficulty)!== '0'.repeat(difficulty));
        return new this({
            timestamp, 
            data, 
            prevHash, 
            difficulty, 
            nonce, 
            hash,
        });
    }

        static adjustDifficulty({ originalBlock, timestamp }) {
  let { difficulty } = originalBlock;

  if (difficulty < 1) return 1;

  if (timestamp - originalBlock.timestamp > 3000) {
    difficulty -= 1;
  } else {
    difficulty += 1;
  }

  return difficulty < 1 ? 1 : difficulty;
}


}

const block1 = new block({
    timestamp: '11/02/2026', 
    prevHash: '0bc23f3', 
    hash: '2b3fd58', 
    data: 'Hello Block1!'
});


// const genesisBlock = block.genesis();
// console.log(genesisBlock);

// const result = block.mineblock({prevBlock: block1, data: "block2"});
// console.log(result);
// // console.log(block1);

module.exports = block;