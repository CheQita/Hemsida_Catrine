var data = [];

d3.json('content.json', function(error,jsonData) {
  data = jsonData;
});

d3.select('#index')
  .on('click', function(){
    update("index");
});

d3.select('#inredningstjänster')
  .on('click', function(){
    update("inredningstjänster");
});

d3.select('#inredningsuppdrag')
  .on('click', function(){
    update("inredningsuppdrag");
});

d3.select('#homestylingstjänster')
  .on('click', function(){
    update("homestylingstjänster");
});

d3.select('#homestylingsuppdrag')
  .on('click', function(){
    update("homestylingsuppdrag");
});

d3.select('#inspiration')
  .on('click', function(){
    update("inspiration");
});

d3.select('#företagsfakta')
  .on('click', function(){
    update("företagsfakta");
});

d3.select('#kontakt')
  .on('click', function(){
    update("kontakt");
});


function update( page ) {
  var main = document.querySelector('.main'); 
  main.innerHTML = "";
  for (var i = 0; i < data[page].content.length; i++) {
    var row = document.createElement("div");
    row.classList.add('row');
    
    for (var j = 0; j < data[page].content[i].columns.length; j++){
      var div = document.createElement("div");  
      var className = 'col-sm-' + data[page].content[i].columns[j].columnLength.toString();
      div.classList.add( className );
      
      var insideDiv = document.createElement("div");
      insideDiv.classList.add( data[page].content[i].columns[j].class);
      insideDiv.innerHTML =  data[page].content[i].columns[j].text;
      insideDiv.style.backgroundImage =  data[page].content[i].columns[j].image;
      insideDiv.style.backgroundSize = 'cover';
      
      div.appendChild(insideDiv);
      row.appendChild(div);
    }
    main.append(row);
  }
}

  
  
