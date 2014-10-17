{"filter":false,"title":"script.js","tooltip":"/script.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":43}},"text":"function StaffMember(name,discountPercent){"},{"action":"insertText","range":{"start":{"row":0,"column":43},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":46,"column":0}},"lines":["    this.name = name;","    this.discountPercent = discountPercent;","}","","var sally = new StaffMember(\"Sally\",5);","var bob = new StaffMember(\"Bob\",10);","","// Create yourself again as 'me' with a staff discount of 20%","var me = new StaffMember(\"lance\", 20)","","var cashRegister = {","    total:0,","    lastTransactionAmount: 0,","    add: function(itemCost){","        this.total += (itemCost || 0);","        this.lastTransactionAmount = itemCost;","    },","    scan: function(item,quantity){","        switch (item){","        case \"eggs\": this.add(0.98 * quantity); break;","        case \"milk\": this.add(1.23 * quantity); break;","        case \"magazine\": this.add(4.99 * quantity); break;","        case \"chocolate\": this.add(0.45 * quantity); break;","        }","        return true;","    },","    voidLastTransaction : function(){","        this.total -= this.lastTransactionAmount;","        this.lastTransactionAmount = 0;","    },","    // Create a new method applyStaffDiscount here","    applyStaffDiscount : function (employee) {","    this.total -= this.total * (employee.discountPercent/100);","},","    ","};","","cashRegister.scan('eggs',1);","cashRegister.scan('milk',1);","cashRegister.scan('magazine',3);","// Apply your staff discount by passing the 'me' object ","// to applyStaffDiscount","cashRegister.applyStaffDiscount(me);","","// Show the total bill"]},{"action":"insertText","range":{"start":{"row":46,"column":0},"end":{"row":46,"column":59}},"text":"console.log('Your bill is '+cashRegister.total.toFixed(2));"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":20},"end":{"row":25,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1413570782738,"hash":"5a2430ebb0b8b57f2157718b19838232e17ae780"}