class Block {
   public index:number;
   public hash:string;
   public previousHash:string;
   public data:string;
   public timestamp:number;
   constructor(
      index:number,
      hash:string,
      previousHash:string,
      data:string,
      timestmp:number
      )
      {
         this.index = index;
         this.hash = hash;
         this.previousHash = previousHash;
         this.data = data;
         this.timestamp = timestmp;
      }
}


const genesisBlock:Block = new Block(0,"1111111111","","Lancoin",123456);
let blockchin:[Block] = [genesisBlock];
console.log(blockchin);

export{};
