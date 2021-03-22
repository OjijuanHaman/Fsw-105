//Section A.
//1

 function fiveAndGreaterOnly(arr){
     const result = arr.filter(function(num){
        if (num>=5)
            return num;

     })

    return result;
}

console.log (fiveAndGreaterOnly([3,6,8,2]))

//2

function evensOnly(arr){
    const evens = arr.filter(function(num){
        if (num %2 == 0)
            return num;
    })
    return evens;
}
console.log (evensOnly([3,6,8,2]))

//Section B
//1

function doubleNumbers(arr){
    const dubs = arr.map(function (num){
        return num *2
    })
    return dubs

}

console.log(doubleNumbers([2,5,100]));

//2

function stringItUp(arr){
    const strings = arr.map(function(num){
        return num.toString() 

    })
    return strings

}
console.log(stringItUp([2,5,100]));

//3

function capitalizeNames(arr){
    const cap = arr.map(function(str){
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    })
    return cap
    

}
console.log(capitalizeNames(["john","JACOB","jinGLeHeimer","schmidt"]));

//Section C
//1

function total(arr){
    const sum = arr.reduce(function(a,b){
        return a+b
    })
    return sum
    
}
console.log(total([1,2,3]));

//2

function stringConcat(arr){
    let longString = arr.reduce(function(){
        return arr.join("")
    })
       
    return longString
}

console.log(stringConcat([1,2,3]))



//3


function totalVotes(arr) {
    const numVoters = arr.filter(function(votes){
        if (votes.voted == true){
            return votes
        }
        
})
    return numVoters.length
}

var voters = [
    {name:'Bob' , age: 30, voted: true },
    {name: 'Jake', age: 32 , voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21 , voted: true },
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true },
    {name: 'Jeff', age: 30 , voted: true },
    {name: 'Zack', age: 19, voted: false}
];
console.log (totalVotes(voters));

//Section D
//1

function leastToGreatest(arr){
    const result = arr.sort(function(num1 , num2){
        return num1 - num2
    });
    return result

}
console.log(leastToGreatest([1,3,5,2,90,20]))

//2

function greatestToLeast(arr){
    const answer = arr.sort(function(num1 , num2){
        return num1 - num2
    });
    return answer.reverse()

}
console.log(greatestToLeast([1,3,5,2,90,20]))

//3

function lengthSort(arr){
    const sorted = arr.sort(function(a,b){
        return a.length - b.length
    })
    return sorted

}
console.log(lengthSort(["dog","wolf","by","family","eaten"]));