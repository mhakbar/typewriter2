const sentence = "hello there from lighthouse labs";

let timer = 0;

for (const char of sentence) {
   
  setTimeout(() => {
    process.stdout.write(char); // print the char here
  }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
  timer += 50;
  //setTimeout(() => process.stdout.write('\n'),timer);
 
}

setTimeout(() => process.stdout.write('\n'),timer);
//setTimeout(() => console.log(''),timer); //other way of adding the new line. 



