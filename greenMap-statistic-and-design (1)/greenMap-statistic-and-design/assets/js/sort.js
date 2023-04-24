let form =$('.form-filter')
function yesNo(filter,trs,point,id){
    if(filter.val()!="Нависание над тротуаром" && filter.val()!='Нависание над проводами' && filter.val()!='Нависание над дорогой'){
        if( filter.attr('id')==point){
            for(let tr of trs){
                if(filter.val()=='Да'){
                    if(tr.children[id].innerHTML!='есть'){
                        $(tr).css('display','none')
                    }
                }
                if(filter.val()=='Нет'){
                    if(tr.children[id].innerHTML!='нет'){
                        $(tr).css('display','none')
                    }
                  }
            }
        }
    }
}
function select(filter,trs,point,id){
    if(filter.val()!='Вид' && filter.val()!='Площадка' ){
    
        console.log(filter.val())
    if( filter.attr('id')==point){
        for(let tr of trs){
            if(!tr.children[id].innerHTML.includes(filter.val())){
                    $(tr).css('display','none')
            }
        }
    }}
}

form.on('change', sorted)