let displayName:string = "standing desk";
let inventoryType:string = "furniture";
let trackingNumber:string = "FD123455";
let createDate:Date = new Date();
let originalCost:number = 425;

function getInventoryItems(trackingNumber:string):{
    displayName:string ;
    inventoryType:string;
    trackingNumber:string;
    createDate:Date;
    originalCost:number;
} {
    return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItems(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);

