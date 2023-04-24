function sorted(){
    const selects=$('.form-filter .form-element-input')

    let trs=$('tbody tr')
    for(let tr of trs){
        if($(tr).css('display')!='table-row'){
            $(tr).css('display','table-row')
        }
    }
    for(let s of selects){
        s=$(s)
        if(s.attr('id')=='point1'){
            
            select(s,trs,'point1',3)
        }
        else{ trs=$('tbody tr')
            if(s.attr('id')=='point2'){
                select(s,trs,'point2',2)
            }
            else{ trs=$('tbody tr')
                if(s.attr('id')=='point3'){
                    yesNo(s,trs,'point3',12)
                }
                else{ trs=$('tbody tr')
                    if(s.attr('id')=='point4'){
                        yesNo(s,trs,'point4',13)
                    }
                    else{ trs=$('tbody tr')
                    
                        if(s.attr('id')=='point5'){
                            yesNo(s,trs,'point5',14)
                        }
                    }
                }
           
            }
    }
    }
    let c=0
    for(let el of trs){
        if($(el).css('display')=='table-row'){
            c++
        }

    }
    if(c==0){
        if($('.alert').length==0){
            $('table').append('<p class="alert">Нет элементов, подходящих под выбранные критерии</p>')
        }
       
    }
   else{
    $('.alert').remove()
   }

}