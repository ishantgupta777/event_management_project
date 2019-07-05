$(document).ready(()=>{
    var flag=0;
    $('.add-btn').click(()=>{
        clearCard();
        clearCatFields();
        clearDayFiels();
         flag=1;
        
    });
    $('#saveChange').click(()=>{
        if(flag===1)
        {additem();
         clearAllFields();
        flag=0;}

          else  if(flag==2)
            { 
                if(id[0]=='c'){
                    id=id;
                }else{
                    id = 'card-'+id;
                }
                var type = $('.type').val();
                var name = $('.name').val();
                var discription = $('.discription').val();
                $(`#${id} .event-type`).text(type);
                $(`#${id} .event-name`).text(name);
                $(`#${id} .event-discription`).text(discription);

                cards.forEach((e,i,arr)=>{
                    id = Array.from(id);
                    id = id.slice(5,card.length);
                    id=id.join('');
                    if(e.id==id){
                        arr[i].type = $('.type').val();
                        arr[i].name = $('.name').val();
                        arr[i].discription = $('.discription').val();
                        arr[i].url = $('.url').val();
                        
                    }
                });

                clearAllFields();
                flag=0;
            }
            console.log(cards);
    });

    $('.fab').click(()=>{
        clearCard();
        clearCatFields();
        clearDayFiels();
         flag=1;
    });
    $('section.cards').on('click', '.deleteCard', (e)=>{
        $(e.target).parent().parent().remove();
    });

     $('section.cards').on('click', '.editCard', (e)=>{
        flag=2;
        
         id = $(e.target).parent().parent().attr('id');
         id = Array.from(id);
        id = id.slice(5,card.length);
        id=id.join('');
        
        cards.forEach((e)=>{
            if(id==e.id){
                $('.type').val(e.type);
                $('.name').val(e.name);
                $('.discription').val(e.discription);
                $('.url').val(e.url);
                e.category.forEach(e2=>{
                    if(e2!='NA'){
                        $('.categories').append(`<li class="bg-danger">${e2}</li>`);
                    }
                });
                e.days.forEach(day=>{
                    if(day.day!='NA'){
                        $('.Dayinfo').append(`<li class="bg-info"><ul class="day" ><li class="dayAbout">Day ${day.day}</li><li class="dayAbout">${day.session}</li><li class="dayAbout">${day.time}</li><li class="dayAbout">${day.venue}</li></ul></li>`);
                    }
                });
                
            }
            
        })
        
        
            flag=2;
        // updateData(id);
        // console.log(id);
    });



    var id =-1 ;
    // function updateData(id){
    //     flag=2;
        
    // };

var card = {
    category : ['NA','NA','NA'],
    days : [{
        day : 'NA',
        session : 'NA',
        time : 'NA',
        venue : 'NA'
    },{
        day : 'NA',
        session : 'NA',
        time : 'NA',
        venue : 'NA'
    },{
        day : 'NA',
        session : 'NA',
        time : 'NA',
        venue : 'NA'
    }]
};
var defaultImg = "./img/card_img/akhil-chandran-gzOhplzhdc8-unsplash-min.jpg";
function additem(){

    card.id = getId();
    card.type = $('.type').val();
    card.name = $('.name').val();
    card.discription = $('.discription').val();
    card.url = $('.url').val();
    html = `<div class="card" id="card-${card.id}">
    <div class="card-img">
        <img src=${defaultImg} alt="" class="cardImg">
    </div>
    <div class="card-heading">
        <h2 class="event-type">${card.type}</h2>
        <p class="event-heading primary text-primary event-name"> ${card.name} </p>
    </div>
    <div class="event-para event-discription">
       <p> ${card.discription}</p>
    </div>
    <div class="category">
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Category:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td class="cat1">${card.category[0]}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td class="cat2">${card.category[1]}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td class="cat3">${card.category[2]}</td>
              </tr>
            </tbody>
          </table>
    </div>
    <div class="days">
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Days:</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
             <tr>
               <td class="day0d">Day-${card.days[0].day}</td>
               <td class="day0s">${card.days[0].session}</td>
                <td class="day0v">${card.days[0].venue}</td>
            <td class="day0t">${card.days[0].time}</td>
          </tr>
          <tr>
            <td class="day1d">Day-${card['days'][1].day}</td>
            <td class="day1s">${card.days[1].session}</td>
            <td class="day1v">${card.days[1].venue}</td>
               <td class="day1t">${card.days[1].time}</td>
            <tr>
            <td class="day2d">Day-${card['days'][2].day}</td>
            <td class="day2s">${card.days[2].session}</td>
            <td class="day2v">${card.days[2].venue}</td>
            <td class="day2t">${card.days[2].time}</td>
          </tr>
            </tbody>
          </table>
    </div>
    <div class="rulebook">
        <button type="button" class="btn btn-info">Rulebook</button>
    </div>
    <div class="edit btn-group">
        <button type="button" class="btn btn-warning btn-lg editCard" data-toggle="modal" data-target="#exampleModalScrollable">Edit<i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-danger btn-lg deleteCard">Delete<i class="fas fa-trash"></i></button>
    </div>
</div>`
     $(`.cards`).append(html);
     cards.push(card);
     clearCard();
     
    clearCard();
}

var cards = [];


function getId(){
    var id;
    if(cards.length){
        id = cards[cards.length-1].id +1;
    }else{
        id=0;
    }
    return id;
}
var j=0;

    $('.addDay').click(()=>{
        
       if(flag==1){
        var day ={
            day : 'NA',
            session : 'NA',
            time : 'NA',
            venue : 'NA'
        };
        day.day = $('.day').val();
        day.session = $('.session').val();
        day.time = $('.time').val();
        day.venue = $('.venue').val();
        if(day.day && day.venue && day.time && day.session ){
            card['days'][j] = day;
            j++;
            $('.Dayinfo').append(`<li class="bg-info"><ul class="day" ><li class="dayAbout">Day ${day.day}</li><li class="dayAbout">${day.session}</li><li class="dayAbout">${day.time}</li><li class="dayAbout">${day.venue}</li></ul></li>`);
            clearDay();
        }
       }
       if(flag==2){
            var day ={
                day : 'NA',
                session : 'NA',
                time : 'NA',
                venue : 'NA'
            };
            day.day = $('.day').val();
            day.session = $('.session').val();
            day.time = $('.time').val();
            day.venue = $('.venue').val();
            if(day.day && day.venue && day.time && day.session ){
                var bool = true;
                cards.forEach((e,index1)=>{
                    if(e.id==id){
                        e.days.forEach((e2,index)=>{
                            if(e2.day=='NA' && bool){
                                cards[index1].days[index].day =day.day;
                                cards[index1].days[index].time =day.time;
                                cards[index1].days[index].session =day.session;
                                cards[index1].days[index].venue =day.venue;
                                
                                $('.Dayinfo').append(`<li class="bg-info"><ul class="day" ><li class="dayAbout">Day ${day.day}</li><li class="dayAbout">${day.session}</li><li class="dayAbout">${day.time}</li><li class="dayAbout">${day.venue}</li></ul></li>`);
                                clearDay();
                                if(id[0]=='c'){
                                    id=id;
                                }else{
                                    id = 'card-'+id;
                                }
                                
                                $(`#${id} .day${index}d`).text(day.day);
                                $(`#${id} .day${index}s`).text(day.session);
                                $(`#${id} .day${index}t`).text(day.time);
                                $(`#${id} .day${index}v`).text(day.venue);

                                bool=false;
                            }
                        })
                    }
                })
           }
       }
    });

var i=0;

    $('.addCategory').click(()=>{
        if(flag==1){
            var category =$('#categoryAdd').val();
            if(category){
            card.category[i] =category;
            i++;
            $('.categories').append(`<li class="bg-danger">${category}</li>`);
            $('#categoryAdd').val("");
        }
        }
        if(flag==2){
            var category =$('#categoryAdd').val();
            if(category){
                var bool = true;
                cards.forEach((e,index1)=>{
                    if(e.id==id){
                        e.category.forEach((e2,index)=>{
                            if(e2=='NA' && bool){
                                cards[index1].category[index] =category;
                                
                                $('.categories').append(`<li class="bg-danger">${category}</li>`);
                                $('#categoryAdd').val("");
                                if(id[0]=='c'){
                                    id=id;
                                }else{
                                    id = 'card-'+id;
                                }
                                
                                $(`#${id} .cat${index+1}`).text(category);

                                bool=false;
                            }
                        })
                    }
                })
                
                
            }
           }
    });
    $('#imgUpload').change(function (e) { 
        if(this.files){
            var reader = new FileReader();
            reader.onload = function (e) {
                if(id[0]=='c'){
                    id=id;
                }else{  
                    id = 'card-'+id;
                }
                if(flag==1)
                {
                    defaultImg = e.target.result;
                }
                $(`#${id} .cardImg`).attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
        
    });


function clearDay(){
    $('.day').val("");
    $('.session').val("");
    $('.time').val("");
    $('.venue').val("");
};
function clearCard(){
    card = {category : ['NA','NA','NA'],
        days : [{
            day : 'NA',
            session : 'NA',
            time : 'NA',
            venue : 'NA'
        },{
            day : 'NA',
            session : 'NA',
            time : 'NA',
            venue : 'NA'
        },{
            day : 'NA',
            session : 'NA',
            time : 'NA',
            venue : 'NA'
        }]};
}
function clearDayFiels(){
    $('.Dayinfo').empty();
    j=0;
}
function clearCatFields(){
    $('.categories').empty();
    i=0;
}
function clearAllFields(){
    $('.type').val('');
    $('.name').val('');
    $('.discription').val('');
    $('.url').val('');
    $('#categoryAdd').val("");
    clearCatFields();
    clearDayFiels();
    clearDay();
    clearCard();
    $('.modal').modal('hide');
}
});