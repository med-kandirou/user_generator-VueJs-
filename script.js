const app=Vue.createApp({
    data(){
        return{
            userName:'simo',
            lastName:'kandirou',
            email:'simo@gmail.com',
            gender:'male',
            img:'https://avatars.githubusercontent.com/u/105118673?v=4',
            phone:'0639872239'
        }
    },
    methods:{
        getUser:async function(){
            const res = await fetch ('https://randomuser.me/api');
            const { results } = await res.json();
            this.userName=results[0].name.first;
            this.lastName=results[0].name.last;
            this.email=results[0].email;
            this.gender=results[0].gender;
            this.img=results[0].picture.medium;
            this.phone=results[0].phone;
        },
    }

})
app.mount('#app');

