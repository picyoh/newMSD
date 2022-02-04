function sortResults(results){

    const newStack = stack.pop()
    const cleanStack = newStack.shift();
    console.log(results, stack)
    console.log(cleanStack)
    // tableau longueur 6 max
    results.map(result => {
        // console.log(result)
        const matchArray = [];
        
        result.tags.map(tag => {
            if(cleanStack.indexOf(tag) > -1){
                matchArray.push(tag);
            }
        })
    });
}
