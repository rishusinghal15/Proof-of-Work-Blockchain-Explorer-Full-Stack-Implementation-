const MINE_RATE = 1000; //1s = 1000ms  
const INITIAL_DIFFICULTY = 2;
const GENESIS_DATA={
    timestamp :'1',
    prevHash : '0c23df',
    hash :'0x123',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data : [],
    
};
module.exports = {GENESIS_DATA, MINE_RATE};