import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const text = ` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @    `;

const result = Array.from({ length: Number(input) }, () => text);

console.log(result.join("\n"));
