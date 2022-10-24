 SinglyLinkedList.prototype.remove = function(value) 
 {  
 	var currentHead = this.head;

	if (currentHead.data == value) 
	{ // just shift the head over. Head is now this new value
	 this.head = currentHead.next;
	 this.size--;
	}

	else 
	{ 
	 var prev = currentHead;

	 while (currentHead.next) 
	 {
	 	if (currentHead.data == value) 
	 	{  
	  	  prev.next = currentHead.next;
  		  prev = currentHead;
          currentHead = currentHead.next; 
          break; 
          // break out of the loop 16 
        } 

      prev = currentHead;
      currentHead = currentHead.next;
     } 

     //if wasn't found in the middle or head, must be tail 21 
     if (currentHead.data == value) 
     { 
     	prev.next = null;
     }

     this.size--;
    } 
  }