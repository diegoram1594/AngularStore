(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{DZYb:function(t,r,o){"use strict";o.r(r),o.d(r,"ProductsModule",(function(){return m}));var c=o("ofXK"),e=o("tyNb"),i=o("fXoL");let a=(()=>{class t{constructor(){this.products=[{id:"1",image:"assets/images/AnimalCrossing.jpg",title:"Animal Corsssing",price:8e4,description:"bla bla bla bla bla"},{id:"2",image:"assets/images/cyberpunk.jpg",title:"Cyberpunk 2077",price:8e4,description:"bla bla bla bla bla"},{id:"3",image:"assets/images/MarioCover.jpg",title:"Paper Mario",price:8e4,description:"bla bla bla bla bla"},{id:"4",image:"assets/images/mkart.jpg",title:"Mario Kart 8",price:8e4,description:"bla bla bla bla bla"},{id:"5",image:"assets/images/mo.jpg",title:"Mario Odyssey",price:8e4,description:"bla bla bla bla bla"},{id:"6",image:"assets/images/smash.jpg",title:"Super Smash Bros. Ultimate",price:8e4,description:"bla bla bla bla bla"}]}getAllProducts(){return this.products}getProductById(t){return this.products.find(r=>r.id===t)}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),s=(()=>{class t{constructor(t,r){this.activatedRoute=t,this.productService=r,this.productService=new a}ngOnInit(){this.activatedRoute.params.subscribe(t=>{const r=t.id;console.log(r),this.product=this.productService.getProductById(r),this.product?console.log(this.product.title):console.log("Product not found")})}}return t.\u0275fac=function(r){return new(r||t)(i.Jb(e.a),i.Jb(a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-product-detail"]],decls:8,vars:4,consts:[[3,"src"]],template:function(t,r){1&t&&(i.Mb(0,"div"),i.Mb(1,"h2"),i.ic(2),i.Lb(),i.Kb(3,"img",0),i.Mb(4,"p"),i.ic(5),i.Lb(),i.Mb(6,"p"),i.ic(7),i.Lb(),i.Lb()),2&t&&(i.zb(2),i.jc(r.product.title),i.zb(1),i.ac("src",r.product.image,i.fc),i.zb(2),i.jc(r.product.description),i.zb(2),i.jc(r.product.price))},styles:[""]}),t})();var n=o("Wp6s"),p=o("bTqV");let d=(()=>{class t{constructor(){this.productoAgregado=new i.n}ngOnInit(){}ngOnChanges(t){}agregarCarrito(){console.log("Se agrega a carrito "+this.producto.title)}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-product"]],inputs:{producto:"producto"},outputs:{productoAgregado:"productoAgregado"},features:[i.xb],decls:14,vars:6,consts:[[3,"src"],["mat-stroked-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,r){1&t&&(i.Mb(0,"mat-card"),i.Mb(1,"mat-card-header"),i.Mb(2,"mat-card-title"),i.ic(3),i.Lb(),i.Mb(4,"mat-card-subtitle"),i.ic(5),i.Wb(6,"currency"),i.Lb(),i.Lb(),i.Kb(7,"img",0),i.Kb(8,"mat-card-content"),i.Mb(9,"mat-card-actions"),i.Mb(10,"button",1),i.ic(11,"Detalle producto"),i.Lb(),i.Mb(12,"button",2),i.Tb("click",(function(){return r.agregarCarrito()})),i.ic(13,"Agregar carrito"),i.Lb(),i.Lb(),i.Lb()),2&t&&(i.zb(3),i.jc(r.producto.title),i.zb(2),i.kc("Precio: $ ",i.Xb(6,4,r.producto.price),""),i.zb(2),i.bc("src",r.producto.image,i.fc),i.zb(3),i.cc("routerLink","/products/",r.producto.id,""))},directives:[n.a,n.d,n.g,n.f,n.c,n.b,p.b,e.c],pipes:[c.c],styles:[".producto[_ngcontent-%COMP%]{border:3px solid #000;border-radius:12px;min-width:327px;display:flex;flex-direction:column;align-items:center}"]}),t})();function u(t,r){if(1&t){const t=i.Nb();i.Mb(0,"app-product",2),i.Tb("productoAgregado",(function(r){return i.ec(t),i.Vb().idProductoAgregado(r)})),i.Lb()}2&t&&i.ac("producto",r.$implicit)}const b=[{path:"",component:(()=>{class t{constructor(t){this.productService=t,this.productService=new a}ngOnInit(){this.products=this.productService.getAllProducts()}}return t.\u0275fac=function(r){return new(r||t)(i.Jb(a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"contendor-productos"],[3,"producto","productoAgregado",4,"ngFor","ngForOf"],[3,"producto","productoAgregado"]],template:function(t,r){1&t&&(i.Mb(0,"div",0),i.hc(1,u,1,1,"app-product",1),i.Lb()),2&t&&(i.zb(1),i.ac("ngForOf",r.products))},directives:[c.i,d],styles:[".contendor-productos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(327px,1fr));gap:20px;margin:15px}"]}),t})()},{path:":id",component:s}];let l=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(r){return new(r||t)},imports:[[c.b,e.f.forChild(b)],e.f]}),t})();var g=o("7of8");let m=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(r){return new(r||t)},imports:[[c.b,l,g.a]]}),t})()}}]);