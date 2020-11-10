var test = async (i) => {
    const ref = firebase.database().ref('main')
    const snapShot = await ref.once('value')
    var val =snapShot.val();
   let list='';
    $.each(val,function(i,item){
        console.log('each',i,item);
        list = `${list}<li>${item.title}</li>`
        return 'list'
    });
}



