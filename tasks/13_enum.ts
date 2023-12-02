//Enum

enum  Roles{
    SUPER_ADMIN,
    ADMIN =1,
    MANAGER,
    SELLER,
    BUYER
}

let myRole: Roles = Roles.ADMIN;

function sendingMessages(role:Roles){
    switch (role){
        case Roles.SUPER_ADMIN:
            console.log("Hello Super Admin");
            break;
        case Roles.ADMIN:
            console.log("Admin");
            break;
        case Roles.MANAGER:
            console.log("Hello Manager");
            break;
        case Roles.BUYER:
            console.log("Hello Buyer");
            break;
        case Roles.SELLER:
            console.log("Hello Seller");
            break;
    }
}