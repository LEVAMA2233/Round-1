
const internalId=Symbol("id");

const aliceUser={
    [internalId]:"User-T100",
    name:"Alice", age: 30, email:"alice@gmail", lastName:"Smith",

    stringify(){
        return JSON.stringify(this);
    },

    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
}

export{aliceUser}