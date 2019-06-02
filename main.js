const app = new Vue({
    el: '#app',
    data: {
        header: 'My To Do List',
        newItem: '',
        items: []
    },

    methods: {
        saveItem: function () {
            this.items.push(this.newItem)
            this.newItem = ''
        },
        
        removeElement (item) {
            var itemIndex =  this.items.indexOf(item)
            this.items.splice(itemIndex, 1)
        }
    }
})