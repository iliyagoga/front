function sorted(){
    let trs=$('tbody tr')
    $('tbody').empty()
    add(Math.floor(arr.length/40),0)
    const selects=$('.form-filter .form-element-input')
    for(let elem of trs){
        if($(elem).css('display')=='none')
        $(elem).css('display','table-row')
    }

    for(let s of selects){
        s=$(s)
        trs=$('tbody tr')
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
    add2(0)
    let count=0;
    for(let s of selects){
        if($(s).val()!=$(s.children[0]).val()){
            count++
        }
        
    }
    if(count!=0){
        
        trs=$('tbody tr')
        $('.nav1').empty()
        $('.nav2').empty()
        pagin(trs)

    }
    else{

        trs=$('tbody tr')
        $('.nav1').empty()
        $('.nav2').empty()
        pagin(trs)
        add2(0)

    }
   
 
    if(trs.length==0){
        if($('.alert').length==0){
            $('table').append('<p class="alert">Нет элементов, подходящих под выбранные критерии</p>')
        }
    }
   else{
    $('.alert').remove()
   }

}
function pagin(obj){
    
    let buf=0
    let buf2=0
    let ul=$('.nav1')
    let ul2=$('.nav2')
    let prev=$('<li>');
    let prev2=$('<li>');
    let prev_1=$('<li>');
    let prev_2=$('<li>');
    prev.addClass('page-item')
    prev.append($('<a class="page-link">Назад</a>'))
    prev.on('click',()=>{
      if(buf>0){
    
        add2(buf-1);
        buf--;
        buf2--;
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        
        $('#'+buf).children().css('background','lightgrey');
        $('#'+'o'+buf2).children().css('background','lightgrey')      
     
        
        }
      })
      prev_1.addClass('page-item')
      prev_1.append($('<a class="page-link">Назад</a>'))
      prev_1.on('click',()=>{
        if(buf2>0){
    
          add2(buf-1);
          buf--;
          buf2--;
          for(let r of ul.children()){
            $(r).children().css('background','white')
          }
          for(let r of ul2.children()){
            $(r).children().css('background','white')
          }
          
          $('#'+buf).children().css('background','lightgrey');
          $('#'+'o'+buf2).children().css('background','lightgrey')
        
          
         
        }
        })
      
    
    ul.append(prev)
    ul2.append(prev_1)
    for(let i=0; i<Math.floor(obj.length/40)+1;i++){
      let li =$('<li>')
      li.addClass('page-item')
      li.attr('id',i)
      li.append($('<a class="page-link">'+(i+1)+'</a>'))
      li.on('click',(e)=>{
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        $(e.target).css('background','lightgrey')
        $('#o'+i).children().css('background','lightgrey')
    
        add2(i)
  
        buf=i
        buf2=i
        
      })
      let li2 =$('<li>')
      li2.addClass('page-item')
      li2.attr('id','o'+i)
      li2.append($('<a class="page-link">'+(i+1)+'</a>'))
      li2.on('click',(e)=>{
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        $(e.target).css('background','lightgrey')
        $('#'+i).children().css('background','lightgrey')
     
        add2(i)
    
        buf2=i
        buf=i
        
      })
      ul.append(li)
      ul2.append(li2)
     
    }
    prev2.addClass('page-item')
    prev2.append($('<a class="page-link">Вперед</a>'))
    prev2.on('click',()=>{
      if(buf<Math.floor(obj.length/40)){
     
        add2(buf+1);
        buf++
        buf2++
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        $('#'+buf).children().css('background','lightgrey')
        $('#'+'o'+buf2).children().css('background','lightgrey')
      }
      })
    ul.append(prev2)
    prev_2.addClass('page-item')
    prev_2.append($('<a class="page-link">Вперед</a>'))
    prev_2.on('click',()=>{
      if(buf2<Math.floor(obj.length/40)){
        add2(buf+1);
        buf++;
        buf2++;
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        $('#'+buf).children().css('background','lightgrey');
        $('#o'+buf).children().css('background','lightgrey');
      }
      })
    
    ul2.append(prev_2)
    $(ul.children()[1]).children().css('background','lightgrey')
    $(ul2.children()[1]).children().css('background','lightgrey')
  }   

  function add2(j){
    let trs=$('tbody tr')
    for(let elem of trs){
        $(elem).css('display','none')
    }
    for (let i=40*j;i<40*(j+1);i++){
        $(trs[i]).css('display','table-row')

    }

  }
  function add(j,o=j){
    for (let i=40*o;i<40*(j+1);i++){
        let v= arr[i]
        if(v!=undefined){
        let tr=$('<tr>');
        let td1=$('<td>');
        let td2=$('<td>');
        let td3=$('<td>');
        let td4=$('<td>');
        let td5=$('<td>');
        let td6=$('<td>');
        let td7=$('<td>');
        let td8=$('<td>');
        let td9=$('<td>');
        let td10=$('<td>');
        let td11=$('<td>');
        let td12=$('<td>');
        let td13=$('<td>');
        let td14=$('<td>');
        let td15=$('<td>');
        let td16=$('<td>');
        let td17=$('<td>');
        td1.append(v.id)
        let img=$('<img>')
        if(v.photo!=undefined){
            img.attr('src','../assets/images/'+v.photo)
          
            img.on('click',()=>{
                let bg=$('<div>')
                bg.css('position','absolute')
                bg.css('background','rgba(0, 0, 0, 0.5)')
                bg.css('top',(window.pageYOffset)+'px')
                bg.css('cursor','not-allowed')
                bg.attr('title','Свернуть')
                bg.css('left',0)
                bg.css('right',0)
                bg.css('bottom',0)
                bg.css('height',window.outerHeight+'px')
                let def=$('<img>')
                def.attr('src','../assets/images/'+v.photo)
                def.css('position','absolute')
                def.css('top',(window.pageYOffset+20)+'px')
                def.css('left',window.outerWidth/5)
               
                def.css('right',-1*window.outerWidth/3)
                def.css('width',window.outerWidth/2+'px')
                def.css('height',(window.outerHeight-100)+'px')
                $('body').css('overflow','hidden')
                $('body').append(bg)
                $('body').append(def)
                bg.click(()=>{
                    $('body').css('overflow','scroll')
                    def.remove()
                    bg.remove()
                })
            })
        }
        img.addClass('img-fluid', 'table_img')
        td2.append(img)
        td3.append(v.name)
        td4.append('Площадка №'+v.location)
        td5.append(v.height)
        td6.append(v.cdiameter)
        td7.append(v.tdiameter)
        td8.append(v.dry===true?'есть':'нет')
        td9.append(v.detachment===true?'есть':'нет')
        td10.append(v.cracks===true?'есть':'нет')
        td11.append(v.drips===true?'есть':'нет')
        td12.append(v.tilt)
        td13.append(v.overhanging_t===true?'есть':'нет')
        td14.append(v.overhanging_p===true?'есть':'нет')
        td15.append(v.overhanging_d===true?'есть':'нет')
        td16.append(v.coordinates[0]+', '+v.coordinates[1])
        let a=$('<a>');
        a.attr('data-bs-toggle','modal')
        a.attr('data-bs-target','#editModal')
        a.attr('href','#')
        let img2=$('<img>')
        img2.attr('src','../assets/images/edit.png')
        img2.addClass('img_edit')
        img2.attr('alt','edit')
        a.append(img2)
        td17.append(a)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tr.append(td5)
        tr.append(td6)
        tr.append(td7)
        tr.append(td8)
        tr.append(td9)
        tr.append(td10)
        tr.append(td11)
        tr.append(td12)
        tr.append(td12)
        tr.append(td13)
        tr.append(td14)
        tr.append(td15)
        tr.append(td16)
        tr.append(td17)
      
      table.append(tr)

    }}}

  