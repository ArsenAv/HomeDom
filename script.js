function el (tagname,attrs){
    var tagmodify = "<" + tagname + ">" + "</" + tagname + ">";
    var parser = new DOMParser();
    var tagparse = parser.parseFromString(tagmodify, "text/xml");
    let elem = tagparse.documentElement;
    document.body.appendChild(tagparse.documentElement)
  
    for (attr in attrs){
    let keyname = attr;
    let attrvalue = attrs[attr];
    elem.setAttribute(keyname,attrvalue);
   }
 

}
el("div" ,{class:"elclass",id:"elid"});