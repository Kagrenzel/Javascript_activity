/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?

2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1

3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))

4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

let NFT_Storage = [];

function mintNFT (Name, Description, Image) {

   const NFT = {

      Name: Name,

      Description: Description,

      Image : Image

   }

   NFT_Storage.push(NFT);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

   for(const NFT of NFT_Storage){
   
      console.log("Name: " + NFT.Name);
      console.log("Description: " + NFT.Description);
      console.log("Name: " + NFT.Image);

   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

   return NFT_Storage.length;


}

// call your functions below this line


mintNFT("Maus", "A cool mouse", "Maus.jpg");
mintNFT("Haus", "A modern house", "Haus.jpg");
mintNFT("Claus", "A gift giving dude", "Daus.jpg");

listNFTs();


console.log("\nTotal No. of NFTs: " + getTotalSupply())






