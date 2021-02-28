//default parameter

function greeting(name='friend',language='ja'){
    if(language==='en'){
        return `Hi, ${name}`;
    }
    if(language==='ja'){
        return `konijiwa ${name}`;
    }
    return `Hi, ${name}`;
}

console.log(greeting(undefined));