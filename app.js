// iifes
// (function(){
//   console.log ("iife ran..")
// })()

// (function(firstName){
//     console.log(`hello ${firstName}`)
// })('brad')

// Property methods
// const todo = {
//     add: function(){
//         console.log('add todo');
//     },
//     edit:function(){
//         console.log('edit todo');
//     }
// }
// todo.delete =function(){
//     console.log('delete todo...')
// }
// todo.add();
// todo.edit();
// todo.delete();

// Loop through an array

// foreach loop
// const cars = ['chevrolet','toyota', 'Kia','ferrari']

// cars.forEach (function(car,index){
//    console.log(`${index} to ${car}`)
// });

// Mapping
const user = [
    {id:1, name:'Genie'},
    {id:2, name:'Soluchi'},
    {id:3, name:'Dannie'},
    {id:4, name:'Gigi'},
]
const ids = user.map(function (user){
    return user.id;
})
console.log(ids)