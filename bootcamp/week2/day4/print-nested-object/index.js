// GOAL: print a nested object, indenting each level
// GIVEN: JSON for the object
const menuString = '{"teas":{"English Breakfast":{"description":"a traditional blend of black tea","price":"3.00"},"Earl Grey":{"description":"black tea flavored with bergamot","price":"3.00"},"chamomile":{"description":"mellow and sweet, with no caffeine","price":"2.75"}},"sweets":{"scone":{"description":"fluffy biscuit","price":"5.00"},"Eccles cake":{"description":"flaky turnover with currants","price":"3.50"},"lemon tart":{"description":"tart-sweet custart treat","price":"3.75"}},"savory":{"chicken sandwich":{"description":"with mayonnaise and smoked almonds","price":"6.00"},"salmon sandwich":{"description":"open faced on rye with capers and dill","price":"7.50"},"cucumber sandwich":{"description":"traditional with butter and cream cheese","price":"4.00"}}}'
const nestedString = '{"a":{"a1":1,"a2":{"a21":2},"a3":3},"b":{"b1":{"b11":4,"b12":{"b121":5,"b122":6}}}}'

// This function will take in the JSON for an object and print
// out the object's keys and properties at increasing indents
function printObject(json) {
    console.log(printObjectRecursive(JSON.parse(json), 0));
}

function printObjectRecursive(obj, indent) {
    let str = "";

    // print each key in the object along with its value
    for (let key in obj) {
        const value = obj[key];

        // first add the indent to the beginning of the string
        for (let i = 0; i < indent; i++) {
            str += " ";
        }

        // now add the key
        str += key + ": ";

        // now get a string representing the object
        if (typeof(value) === "object") {
            str += "\n" + printObjectRecursive(value, indent + 2);
        } else {
            str += value;
        }
        str += "\n";
    }
    str += "\n";
    return str;
}
console.log("\n------ menu object ------")
console.log(menuString)
printObject(menuString)
console.log("\n------ nested object ------");
console.log(nestedString)
printObject(nestedString)