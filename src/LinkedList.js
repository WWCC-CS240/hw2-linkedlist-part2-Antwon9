const Node = require('./Node.js');

class LinkedList {

	constructor() {
		this.head = null;
		this.size = 0;
	}
    get(index){ //Just copied print fucntion. Added if statement line 21. Added two if throws at lines 13 and 14.
        {
            let current = this.head;

            if (index < 0) throw "index cannot be negative";
            if(index >= this.size) throw "index out of bounds";
            
            if (current == null){
    
            }else{
                let i = 0;
                while (i < this.size){
                    if(i == index){
                        return current.value;
                    }
                    if(current.next == null){
    
                    }else{
                        current = current.next;
                    }
                    i++;
                }
            }
    
        }
    }
    find(value){ //I just basically just copied my print function and added another if statement and a couple return statements.
		let current = this.head;
		if (current == null){
            return -1;
		}else{
			let i = 0;
			while (i < this.size){
				if(current.value == value){
                    return i;
                }
				if(current.next == null){
                    return -1;
				}else{
					current = current.next;
				}
				i++;
			}
		}

	}
	print(cb = console.log) {
		let current = this.head;
		if (current == null){

		}else{
			let i = 0;
			while (i < this.size){
				cb(current.value);
				if(current.next == null){

				}else{
					current = current.next;
				}
				i++;
			}
		}

	}

	append(value) {
		let node = new Node(value);

		if (this.head == null){
			this.head = node;
		}else{
			let current = this.head;
			let i = 0;
			while(i < this.size){
				if (current.next == null){
					current.next = node;
				}else{
					current = current.next;
				}
				
				i++;
			}
		}
		this.size += 1;
	}

	prepend(value){
		let node = new Node(value);
		
		if (this.head == null){
			this.head = node;
		}else{
			let current = node;
			current.next = this.head;
			this.head = current;

			
		}
		this.size += 1;
	}
}

module.exports = LinkedList;