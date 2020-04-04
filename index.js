new Vue({
    el: '#app',
    data: {
        counter: 0,
        counter1: 0,
        counter2: 0,
        
    },

    methods:{
        increment(){
         this.counter++;
        },
        increment1(){
            this.counter1++;
           },
           increment2(){
            this.counter2++;
           },

}

})