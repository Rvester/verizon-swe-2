// 'this' refers to the context where the code runs (function)
// 'this' refers to the context where the code was bound (=>)

    let arrow = () => {console.log("this in arrow:", this);}
    arrow();
    
    function rebindThis() {
        console.log("rebind the arrow function");
        arrow = () => { console.log("this in arrow:", this);}
    }
    rebindThis();
    
    arrow();
    
    // console.log(globalThis)