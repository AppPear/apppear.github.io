for (i = 45; i < 141; i++) {
  var div = document.createElement("div");
  div.setAttribute('class',"border-background white");
  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var img = document.createElement("img");
  img.setAttribute('class',"slides");
  img.setAttribute('src',`kep${i}.jpg`);
  td.appendChild(img);
  tr.appendChild(td);
  table.appendChild(tr);
  div.appendChild(table);
  document.body.appendChild(div);
}