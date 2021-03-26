var app = new Vue (
  {
    el: "#todo-list",
    data: {
      lista: ['comprare vino', 'comprare latte', 'comprare mirtilli']
    },
    methods: {
      deleteItem: function() {
        this.lista.splice(itemIndex, 1);
      },
      addItem: function() {
        if (this.newItem !== "") {
          this.lista.push(this.newItem);
          this.newItem = "";
        }
      }
    }
  }
);
