const Counter = {
    data() {
      return {
        title: "Todo Application",
        btn: "Add Task",
        taskName: '',
        tasks:[ ]
        
      }
    },

    methods: {
        addTask(){
            this.tasks.push({
                // id: this.tasks.id + 1,
                title: this.taskName
            }),

            this.taskName = ""
        },

        deleteFromList(index) {
            this.tasks.splice(index.id, 1);
          }
    },
  }
  
  Vue.createApp(Counter).mount('#todo')