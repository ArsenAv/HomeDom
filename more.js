function el(tagname, attrs, ...children){
    const element = document.createElement(tagname);
    for(attr in attrs){
        element.setAttribute(attr, attrs[attr]);
    }
    for(child in children){
        if(typeof(children[child]) === "string"){
            const textNode = document.createTextNode(children[child]);
            element.appendChild(textNode);
        } else if(children[child] === null){
            
        } else{   
            element.appendChild(children[child]);
        }
    }
    return element; 
}
class DomElement{
    constructor(tagname, attrs){
        this.tagname = tagname;
        this.attrs = attrs;
    }
    draw(children){
        const element = document.createElement(this.tagname);
        for(let i = 0; i < this.attrs.length; i ++){
            element.setAttribute(this.attrs.keys()[i], this.attrs.values()[i]);
        }
        for(let i = 0; i < children.length; i ++){
            if(typeof(children[i]) === "string"){
                const textNode = document.createTextNode(children[i]);
                element.appendChild(textNode);
            } else if(children[i] === null){
                
            } else{   
                element.appendChild(children[i]);
            }
        }
        return element;
    }    
}
function el2(tagname, attrs, ...children){
    const element = new DomElement(tagname, attrs);
    return element.draw(children);
}
console.log(el2("ul", {name: "li"}, "TEXTS"));
