
class Parent {

    static Name(params: any) {
        console.log(params)
    }
}
class child extends Parent {

}

let A = new child();

if (A instanceof Parent) {
    console.log(typeof A)
}

console.log('mostafa')
if('Name' in Parent){
    Parent['Name']('Name') 
}

function isCustomer(partner: any): partner is Parent {
    return partner instanceof Parent;
}
console.log(isCustomer(A))
