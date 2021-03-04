function Mvvm(options={}) {
    this.$options = options
    console.log(this.$options);
        let data = this._data = this.$options.data
        observe(data)
        //数据代理
        for(key in data){
            Object.defineProperty(this,key,{
                enumerable:true,
                get(){
                    return this._data[key]
                },
                set(newVal){
                    this._data[key]=newVal
                }
            })
        }
        compile(this.$options.el,this)
}

function compile(el,vm){
    vm.$el=document.querySelector(el);
    let fragment=document.createDocumentFragment();
    while(child=vm.$el.firstChild){
        fragment.appendChild(child)
    }
    
    replace(fragment)
    vm.$el.appendChild(fragment)

    function replace(nodes){
        Array.from(nodes.childNodes).forEach(node=>{
            if(node.childNodes){
                replace(node)
            }
            let text=node.textContent;
            let reg=/\{\{(.*)\}\}/
            if(node.nodeType===3 && reg.test(text)){
                let arr=RegExp.$1.split('.') //[a,b] [a,c]
                let val=vm
                arr.forEach((k)=>{
                    val=val[k]  //vm.a
                })
                new Watcher(vm,RegExp.$1,function(newVal){
                    node.textContent=text.replace(/\{\{(.*)\}\}/,newVal)
                })
                node.textContent=text.replace(/\{\{(.*)\}\}/,val)
            }
            if(node.nodeType===1){
                let nodeAttrs=node.attributes;
                Array.from(nodeAttrs).forEach(attr=>{
                    let name=attr.name;
                    let exp=attr.value;
                    if(name.indexOf('v-')===0){
                        let arr=exp.split('.') //[a,f]
                        let val=vm
                        arr.forEach(k=>{
                            val=val[k]
                        })
                        node.value=val
                        // node.value=vm[exp]
                    }
                    new Watcher(vm,exp,function(newVal){
                        node.value=newVal
                    })
                    node.addEventListener('input',function(e){
                        let newVal=e.target.value
                        vm[exp]=newVal
                    })
                })
            }
        })
    }
}

function observe(data) {
    if(typeof data !=='object') return
    Object.keys(data).forEach(key => {
        if(typeof data[key] === 'object'){
            return new observe(data[key])
        }
        let val=data[key]
        defineReactive(data,key,val)
    });
}

function defineReactive(data,key,val){
    let dep=new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        get(){
            Dep.target&&dep.addSubs(Dep.target) //[watcher]
            return val
        },
        set(newVal){
            if(val === newVal) return
            val=newVal
            observe(val)
            dep.notify()
        }
    })
}


function Dep(){
    this.subs=[]
}

Dep.prototype.addSubs=function(sub){
    this.subs.push(sub)
}
Dep.prototype.notify=function(){
    this.subs.forEach(sub=>sub.update())
}

function Watcher(vm,exp,fn){
    this.fn=fn
    this.vm=vm;
    this.exp=exp
    Dep.target=this
    let val=vm;
    let arr=exp.split('.')
    arr.forEach(k=>{
        val=val[k]
    })
    Dep.target=null

}
Watcher.prototype.update=function(){
    let val=this.vm;
    let arr=this.exp.split('.')
    arr.forEach(k=>{
        val=val[k]
    })
    this.fn(val)
}

