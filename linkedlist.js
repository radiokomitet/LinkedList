class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList{
    constructor(){
        this.listHead = null
    }
    append(value){
        const newNode = new Node(value);
        if(!this.listHead){
            this.listHead = newNode;
            return;
        }
        let current = this.listHead;
        while(current.nextNode){
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value){
        const newNode = new Node(value, this.listHead);
        this.listHead = newNode;
    }

    size(){
        let count = 0;
        let current = this.listHead;
        while(current){
            count++;
            current = current.nextNode;
        }
        return count;
    }

    head(){
        if(!this.listHead){
            return undefined
        }
        return this.listHead.value;
    }
    tail(){
        if(!this.listHead){
            return undefined
        }
        let current = this.listHead;
        while(current.nextNode){
            current = current.nextNode;
        }
        return current.value;
    }
    at(index){
        let current = this.listHead;
        let count = 0;

        while(current){
            if(count === index){
                return current.value
            }
            count++;
            current = current.nextNode;
        }
        return undefined
    }

    pop(){
        if(!this.listHead) return undefined;
        const removedValue = this.listHead.value;
        this.listHead = this.listHead.nextNode;
        return removedValue;
    }

    contains(value){
        let current = this.listHead
        while(current){
            if(current.value == value){
                return true
            }
            current = current.nextNode;
        }
        return false
    }

    findIndex(value){
        let current = this.listHead;
        let index = 0;
        while(current){
            if(current.value === value){
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return -1;
    }

    toString(){
        if(!this.listHead) return ""
        let current = this.listHead;
        let result = ""
        while(current){
            result += `( ${current.value} ) => `;
            current = current.nextNode; 
        }
        result += "null"
        return result;
    }
    insertAt(index, ...values){
        if (index < 0 || index > this.size()) {
        throw new RangeError("Index out of bounds");
        }
        if(values.length ===0) return;

        let firstNewNode = new Node(values[0]);
        let currentNew = firstNewNode;

        for( let i = 1; i<values.length;i++){
            currentNew.nextNode = new Node(values[i]);
            currentNew = currentNew.nextNode;
        }
        if(index ===0){
            currentNew.nextNode = this.listHead;
            this.listHead = firstNewNode;
            return;
        }
        let current = this.listHead;
        let count = 0;

        while(count<index-1){
            current = current.nextNode;
            count++
        }
        currentNew.nextNode = current.nextNode;
        current.nextNode = firstNewNode;
    }
}

let list = new LinkedList();
list.append(3);
list.append(21);
list.append(33);
list.append("dog");
list.prepend(1);
console.log(list.toString()) //1 -> 3 -> 21 -> 33 -> dog -> null
console.log(list.size()) //5
console.log(list.tail()); //dog
console.log(list.contains(33)) //true
console.log(list.findIndex(33)); //3
console.log(list.head()) //1
console.log(list.findIndex("dog")) //4
console.log(list.pop()); //1
console.log(list.toString());   //1 -> 3 -> 21 -> 33 -> null
list.insertAt(2,"cow", "cat", "wolf");
console.log(list.toString());