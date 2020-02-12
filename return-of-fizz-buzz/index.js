

// $('#number-chooser').submit(event =>{
//     event.preventDefault()

//     let num = $('#number-choice').val()
//     //let arr = []
//     for(let i = 0; i < num; i++){ 
//         if (num[i] % 3 === 0 && num[i] % 5 === 0){            
//             $('.js-results').append(`
//             <div class="fizz-buzz-item">
//                 <span>FizzBuzz</span>
//             </div>`);   
//         } else if (num[i] % 3 === 0 ){
//             $('.js-results').append(`
//             <div class="fizz-buzz-item fizz">
//                 <span>fizz</span>
//             </div>`
//             )  
//         } else if (num[i] % 5 === 0){
//             $('.js-results').append(`
//             <div class="fizz-buzz-item buzz">
//                 <span>Buzz</span>
//             </div>`
//             )   
//         }
//         else {
//         ('.js-results').append(`
//             <div class="fizz-buzz-item">
//                 <span>Input Invalid</span>
//             </div>`
//             )
//         }
//     }
//     return $('.js-results').get()
// }); 


/////////Not working version

$('#number-chooser').submit(event =>{
    event.preventDefault()

    let num = $('#number-choice').val()
    let arr = []
    for(let i = 0; i < num; i++){ 
        if (num[i] % 3 === 0 && num[i] % 5 === 0){
            
            arr.push($('.js-results').append(`
            <div class="fizz-buzz-item">
                <span>FizzBuzz</span>
            </div>`));   
        } else if (num[i] % 3 === 0 ){
            arr.push($('.js-results').append(`
            <div class="fizz-buzz-item fizz">
                <span>fizz</span>
            </div>`
            ))    
        } else if (num[i] % 5 === 0){
            arr.push($('.js-results').append(`
            <div class="fizz-buzz-item buzz">
                <span>Buzz</span>
            </div>`
            ))    
        }
        else {
            arr.push($('.js-results').append(`
            <div class="fizz-buzz-item">
                <span>Input Invalid</span>
            </div>`
            ))
        }
    }
    return $('.js-results').get()
}); 
