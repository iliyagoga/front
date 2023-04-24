    arr=data
    let table=$('.table tbody');
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
        table.empty();
        add(buf-1);
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
        table.empty()
        add(buf)
        sorted()}
      })
      prev_1.addClass('page-item')
      prev_1.append($('<a class="page-link">Назад</a>'))
      prev_1.on('click',()=>{
        if(buf2>0){
          table.empty();
          add(buf-1);
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
          table.empty()
          add(buf)
          sorted()
        }
        })
      
    
    ul.append(prev)
    ul2.append(prev_1)
    for(let i=0; i<Math.floor(arr.length/40)+1;i++){
      let li =$('<li>')
      li.addClass('page-item')
      li.attr('id',i)
      li.append($('<a class="page-link">'+i+'</a>'))
      li.on('click',(e)=>{
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        $(e.target).css('background','lightgrey')
        $('#o'+i).children().css('background','lightgrey')
        table.empty()
        add(i)
        sorted()
        buf=i
        buf2=i
        
      })
      let li2 =$('<li>')
      li2.addClass('page-item')
      li2.attr('id','o'+i)
      li2.append($('<a class="page-link">'+i+'</a>'))
      li2.on('click',(e)=>{
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        $(e.target).css('background','lightgrey')
        $('#'+i).children().css('background','lightgrey')
        table.empty()
        add(i)
        sorted()
        buf2=i
        buf=i
        
      })
      ul.append(li)
      ul2.append(li2)
     
    }
    prev2.addClass('page-item')
    prev2.append($('<a class="page-link">Вперед</a>'))
    prev2.on('click',()=>{
      if(buf<Math.floor(arr.length/40)){
        table.empty()
        add(buf+1);
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
        table.empty()
        add(buf2)
        sorted()
      }
      })
    ul.append(prev2)
    prev_2.addClass('page-item')
    prev_2.append($('<a class="page-link">Вперед</a>'))
    prev_2.on('click',()=>{
      if(buf2<Math.floor(arr.length/40)){
        table.empty();
        add(buf+1);
        buf++;
        buf2++;
        for(let r of ul.children()){
          $(r).children().css('background','white')
        }
        for(let r of ul2.children()){
          $(r).children().css('background','white')
        }
        $('#'+buf).children().css('background','lightgrey');
        $('#'+'o'+buf2).children().css('background','lightgrey')
        table.empty()
        add(buf2)
        sorted()
      }
      })
    
    ul2.append(prev_2)
    $(ul.children()[1]).children().css('background','lightgrey')
    $(ul2.children()[1]).children().css('background','lightgrey')
    add(0)
    function add(j){
    for (let i=40*j;i<40*(j+1);i++){
        let v= arr[i]
        if(v!=undefined){
        let tr=$('<tr>');
        tr.css('display','table-row')
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
      
      table.append(tr)}}}
      
      
   


    

  
