(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1033:function(e,n,t){},1966:function(e,n,t){"use strict";t("7b03")},"247b":function(e,n,t){"use strict";t("1033")},"38c9":function(e,n,t){},4660:function(e,n,t){},6551:function(e,n,t){},"669a":function(e,n){Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup["tag"].inside["attr-value"].inside["entity"]=Prism.languages.markup["entity"],Prism.languages.markup["doctype"].inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,n){var t={};t["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},t["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};r["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var a={};a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,n){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:Prism.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},"71e8":function(e,n){(function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document){var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(n,t){if("PRE"===n.tagName&&n.classList.contains(e)){var r=n.querySelector(".line-numbers-rows");if(r){var a=parseInt(n.getAttribute("data-start"),10)||1,s=a+(r.children.length-1);t<a&&(t=a),t>s&&(t=s);var i=t-a;return r.children[i]}}},resize:function(e){a([e])},assumeViewportIndependence:!0},r=void 0;window.addEventListener("resize",(function(){t.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))})),Prism.hooks.add("complete",(function(t){if(t.code){var r=t.element,s=r.parentNode;if(s&&/pre/i.test(s.nodeName)&&!r.querySelector(".line-numbers-rows")&&Prism.util.isActive(r,e)){r.classList.remove(e),s.classList.add(e);var i,o=t.code.match(n),l=o?o.length+1:1,c=new Array(l+1).join("<span></span>");i=document.createElement("span"),i.setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=c,s.hasAttribute("data-start")&&(s.style.counterReset="linenumber "+(parseInt(s.getAttribute("data-start"),10)-1)),t.element.appendChild(i),a([s]),Prism.hooks.run("line-numbers",t)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function a(e){if(e=e.filter((function(e){var n=s(e),t=n["white-space"];return"pre-wrap"===t||"pre-line"===t})),0!=e.length){var t=e.map((function(e){var t=e.querySelector("code"),r=e.querySelector(".line-numbers-rows");if(t&&r){var a=e.querySelector(".line-numbers-sizer"),s=t.textContent.split(n);a||(a=document.createElement("span"),a.className="line-numbers-sizer",t.appendChild(a)),a.innerHTML="0",a.style.display="block";var i=a.getBoundingClientRect().height;return a.innerHTML="",{element:e,lines:s,lineHeights:[],oneLinerHeight:i,sizer:a}}})).filter(Boolean);t.forEach((function(e){var n=e.sizer,t=e.lines,r=e.lineHeights,a=e.oneLinerHeight;r[t.length-1]=void 0,t.forEach((function(e,t){if(e&&e.length>1){var s=n.appendChild(document.createElement("span"));s.style.display="block",s.textContent=e}else r[t]=a}))})),t.forEach((function(e){for(var n=e.sizer,t=e.lineHeights,r=0,a=0;a<t.length;a++)void 0===t[a]&&(t[a]=n.children[r++].getBoundingClientRect().height)})),t.forEach((function(e){var n=e.sizer,t=e.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",e.lineHeights.forEach((function(e,n){t.children[n].style.height=e+"px"}))}))}}function s(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null}})()},"7b03":function(e,n,t){},"8bef":function(e,n,t){"use strict";t("e046")},"91bd":function(e,n,t){"use strict";t.r(n);var r=t("7a23");const a={class:"promise"},s=Object(r["createElementVNode"])("h1",null,"promise的原理及实现",-1),i=Object(r["createElementVNode"])("h2",null,"1.promise的认识及基本实现",-1),o=Object(r["createElementVNode"])("pre",{class:"pre-text"},"1.Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise 对象。\n2.promise是一个类，它的构造函数接受一个函数，函数的两个参数也都是函数，promise接受的函数是立即执行。在传入的函数中执行resolve表示成功，执行reject表示失败，传入的值会传给then方法的回调函数\n3.对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。\n4.promise有一个叫做then的方法，该方法有两个参数，第一个参数是成功之后执行的回调函数，第二个参数是失败之后执行的回调函数。then方法在resolve或者reject执行之后才会执行，并且then方法中的值是传给resolve或reject的参数\n5.promise支持链式调用",-1),l=["innerHTML"],c=Object(r["createTextVNode"])("\n      "),u=Object(r["createTextVNode"])("\n    "),d=Object(r["createElementVNode"])("p",{class:"text-p"},"简单的promise就实现了",-1),m=Object(r["createElementVNode"])("h2",null,"2.promise的链式调用",-1),p=Object(r["createElementVNode"])("pre",{class:"pre-text"},"想要实现链式调用就需要返回一个新的Promise实例，为什么需要返回新的Promise实例呢？ 直接用最开始的Promise实例不可以吗？\n原因就在于，Promise中的状态不可逆，也就是说在下面代码中，当promise进行了resolve或者reject后，状态已经变更了，无法再回到之前的pending状态，所以\n1.then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）\n2.then方法后面可以再调用另一个then方法。\n简单说then函数中返回的Promise的Value值来源于当前then函数的onFulfilled或者onRejected函数的执行结果\n1.如果是一个Promise 继续调用then 方法\n2.如果不是一个Promise 直接调用resolve, reject 把函数的执行结果传出来",-1),g=["innerHTML"],f=Object(r["createTextVNode"])("\n      "),h=Object(r["createTextVNode"])("\n    "),b=Object(r["createElementVNode"])("h2",null,"3.promise的 catch & finally方法",-1),v=Object(r["createElementVNode"])("pre",{class:"pre-text"},"catch() 方法返回一个Promise，并且处理拒绝的情况。我们知道then方法的第二个参数其实就是干这个用的，catch只是一个别名。\nfinally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。和catch一样，也只是对then的一个简写，相当于是传入的函数既是onFulfilled也是onRejected。\nfinally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。",-1),j=["innerHTML"],y=Object(r["createElementVNode"])("h2",null,"4.promise的 resolve & reject方法",-1),w=Object(r["createElementVNode"])("pre",{class:"pre-text"},"resolve & reject 将现有对象转为 Promise 对象\n需要注意的是: 如果value本身就是一个promise或者含有then方法的对象，那么就直接返回value, 否则返回一个Promise 对象\n1.Resolve 状态转换为fulfilled\n2.Reject 状态转换为rejected",-1),x=["innerHTML"],F=Object(r["createElementVNode"])("h2",null,"5.promise的 all & race & any方法",-1),k=Object(r["createElementVNode"])("pre",{class:"pre-text"},"A). Promise.all(iterable)\n1.Promise.all(iterable)返回一个promise实例\n2.接受一个数组，如果数组中有非promise对象，则转换成promise对象\n3.数组中所有promise执行成功之后才返回成功状态，并且返回的promise的值就是所有promise执行成功的返回值\n4.如果有一个promise执行失败，则返回失败，并且返回的promise的值就是第一个promise失败的原因",-1),P=["innerHTML"],O=Object(r["createElementVNode"])("pre",{class:"pre-text"},"B). Promise.race(iterable)\n1.Promise.race(iterable) 方法返回一个 promise，\n2.接受一个数组，如果数组中有非promise对象，则转换成promise对象\n3. iterable一旦迭代器中的某个promise状态改变为fulfilled或者rejected，返回的 promise就会随之变成resolve 或者reject。",-1),E=["innerHTML"],A=Object(r["createElementVNode"])("pre",{class:"pre-text"},"C). Promise.any(iterable)\n1.  Promise.any(iterable)返回一个promise实例\n2. 接受一个数组，如果数组中有非promise对象，则转换成promise对象\n3. iterable中如果有一个promise执行成功之后，则返回fulfilled状态，并且返回的promise的值就是执行成功的promise的返回值\n4. 数组中所有promise执行失败之后才返回rejected状态，并且返回的promise的值就是所有promise执行失败的返回值",-1),C=["innerHTML"];function S(e,n,t,S,N,$){const V=Object(r["resolveComponent"])("IsHideCode");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[s,i,o,Object(r["createElementVNode"])("pre",{class:Object(r["normalizeClass"])(["language-javascript line-numbers",e.promiseData.easy.isShow?"code-box":""])},[Object(r["createElementVNode"])("code",{innerHTML:e.promiseData.easy.text},null,8,l),c,e.promiseData.easy.isShow?(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:0,onShowCodeFun:n[0]||(n[0]=n=>e.showCodeFun("easy"))})):Object(r["createCommentVNode"])("",!0),u],2),d,m,p,Object(r["createElementVNode"])("pre",{class:Object(r["normalizeClass"])(["language-javascript line-numbers",e.promiseData.then.isShow?"code-box":""])},[Object(r["createElementVNode"])("code",{innerHTML:e.promiseData.then.text},null,8,g),f,e.promiseData.then.isShow?(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:0,onShowCodeFun:n[1]||(n[1]=n=>e.showCodeFun("then"))})):Object(r["createCommentVNode"])("",!0),h],2),b,v,Object(r["createElementVNode"])("pre",{class:Object(r["normalizeClass"])(["language-javascript line-numbers",e.promiseData.catch.isShow?"code-box":""])},[Object(r["createElementVNode"])("code",{innerHTML:e.promiseData.catch.text},null,8,j)],2),y,w,Object(r["createElementVNode"])("pre",{class:Object(r["normalizeClass"])(["language-javascript line-numbers",e.promiseData.resolve.isShow?"code-box":""])},[Object(r["createElementVNode"])("code",{innerHTML:e.promiseData.resolve.text},null,8,x)],2),F,k,Object(r["createElementVNode"])("pre",{class:Object(r["normalizeClass"])(["language-javascript line-numbers",e.promiseData.all.isShow?"code-box":""])},[Object(r["createElementVNode"])("code",{innerHTML:e.promiseData.all.text},null,8,P)],2),O,Object(r["createElementVNode"])("pre",{class:Object(r["normalizeClass"])(["language-javascript line-numbers",e.promiseData.race.isShow?"code-box":""])},[Object(r["createElementVNode"])("code",{innerHTML:e.promiseData.race.text},null,8,E)],2),A,Object(r["createElementVNode"])("pre",{class:Object(r["normalizeClass"])(["language-javascript line-numbers",e.promiseData.any.isShow?"code-box":""])},[Object(r["createElementVNode"])("code",{innerHTML:e.promiseData.any.text},null,8,C)],2)])}var N=t("f781"),$=t.n(N);t("a110"),t("669a"),t("b31d"),t("a4cc"),t("38c9"),t("71e8"),t("6551");const V={class:"hide-preCode-box"};function M(e,n,t,a,s,i){const o=Object(r["resolveComponent"])("ArrowDown"),l=Object(r["resolveComponent"])("el-icon");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",V,[Object(r["createElementVNode"])("div",{class:"hide-preCode-bt",onClick:n[0]||(n[0]=(...n)=>e.showCode&&e.showCode(...n))},[Object(r["createVNode"])(l,{class:"arrow"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(o)]),_:1})])])}var L=t("f6f2"),T=Object(r["defineComponent"])({name:"IsHideCode",components:{ArrowDown:L["a"]},setup(e,{emit:n}){const t=()=>{n("showCodeFun",!0)};return{showCode:t}},watch:{count(){}}}),_=(t("8bef"),t("6b0d")),R=t.n(_);const z=R()(T,[["render",M]]);var H=z;const D={easy:{text:"class MyPromise {\n        // 定义三种状态 pending：初始状态 fulfilled：操作成功 rejected：操作失败\n        static pending = 'pending';\n        static fulfilled = 'fulfilled';\n        static rejected = 'rejected';\n        constructor(executor){\n            this.status = MyPromise.pending; // 初始化状态为pending\n            this.value = null   //fulfilled的返回值\n            this.reason = null   //rejected的返回值\n            this.collbacks = []   //定义异步队列\n            // 立即执行\n            try {\n                // 这里绑定this的指向，是为了防止执行时this的改变指向\n                executor(this._resolve.bind(this),this._reject.bind(this))\n            }catch (err){\n                this._reject.call(this, err)\n            }\n        }\n        // 成功的回调函数\n        _resolve(data){\n            // 修改当前状态为成功\n            if(this.status === 'pending') this.status = 'fulfilled'\n            this.value = data\n            this.collbacks.forEach((cb)=>{\n                cb.onFulfilled(data)\n            })\n        }\n        // 失败的回调函数\n        _reject(reason){\n            // 修改当前状态为失败\n            if(this.status === 'pending') this.status = MyPromise.rejected\n            this.reason = reason\n            this.collbacks.forEach((cb)=>{\n                cb.onRejected(reason)\n            })\n        }\n        // then方法调用\n        then(onFulfilled, onRejected){\n            // 传递进来的onFulfilled, onRejected要是一个函数,如果不是要转换成函数\n            onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v\n            onRejected = typeof onRejected === 'function' ? onRejected : err =>{ throw err }\n            const self = this\n            // 判断当前promise的状态\n            if (this.status === 'fulfilled') {\n                onFulfilled(self.value)\n            }\n            if (this.status === 'rejected') {\n                onRejected(self.reason)\n            }\n            // 状态pending时 实现订阅的操作\n            if (this.status === 'pending') {\n                // 放入异步队列里\n                self.collbacks.push({\n                    onFulfilled: onFulfilled,\n                    onRejected: onRejected\n                })\n            }\n        }\n    }\n    // 简单调用\n    const isForget = true\n    const mypromise = new MyPromise((resolve, reject) =>{\n        if (isForget) {\n            // resolve('哦耶，成功了')\n            setTimeout(()=>{\n                resolve('哦耶，成功了')\n            })\n        }else {\n            const message = new Error('对不起，失败了！！')\n            reject(message)\n        }\n    })\n    mypromise.then((res)=>{\n        console.log(res, 'success')\n    },(err)=>{\n        console.log(err,  'err')\n    })",isShow:!0},then:{text:" // 链式调用\n        then(onFulfilled, onRejected){\n            // 传递进来的onFulfilled, onRejected要是一个函数,如果不是要转换成函数\n            onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v\n            onRejected = typeof onRejected === 'function' ? onRejected : err =>{ throw err }\n            const self = this\n            // 当状态已经变成fulfilled 成功时\n            if (this.status === 'fulfilled') {\n                // 返回一个新的promise对象\n                return  new MyPromise((resolve, reject)=>{\n                    try {\n                        let x = onFulfilled(self.value)\n                        // 链式调用的重点\n                        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)\n                    }catch (err){\n                        reject(err)\n                    }\n                })\n            }\n            // 当状态已经变成rejected 失败时\n            if (this.status === 'rejected') {\n                // 返回一个新的promise对象\n                return  new MyPromise((resolve, reject)=>{\n                    try {\n                        let x = onRejected(self.reason)\n                        // 链式调用的重点\n                        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)\n                    }catch (err){\n                        reject(err)\n                    }\n                })\n            }\n            // 状态pending时 实现订阅的操作\n            if (this.status === 'pending') {\n                return  new MyPromise((resolve, reject)=>{\n                    // 放入异步队列里\n                    self.collbacks.push({\n                        onFulfilled: ()=>{\n                            let x = onFulfilled(self.value)\n                            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)\n                        },\n                        onRejected: ()=>{\n                            let x = onRejected(self.reason)\n                            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)\n                        }\n                    })\n                })\n            }\n\n        }",isShow:!0},catch:{text:"// catch\n        catch(onReject){\n            return this.then(null, onReject)\n        }\n\n        // finally\n        finally(onFinally){\n            return this.then(onFinally, onFinally)\n        }",isShow:!1},resolve:{text:"// 将现有对象转为 Promise 对象 该实例的状态为fulfilled\n        static resolve(value) {\n            if(value instanceof MyPromise || ((typeof value === 'object') && 'then' in value)) {\n                return value\n            }\n            return  new MyPromise((resolve) => resolve(value))\n        }\n        // 将现有对象转为 Promise 对象 该实例的状态为rejected\n        static reject(value) {\n            if(value instanceof MyPromise || ((typeof value === 'object') && 'then' in value)) {\n                return value\n            }\n            return  new MyPromise((resolve, reject) => reject(value))\n        }",isShow:!1},all:{text:"// all 返回一个promise\n        static all(iterable) {\n            return new MyPromise((resolve, reject) => {\n                const res = [];\n                let num = 0,\n                hasErr = false; //\n                // 伪数组对象或可迭代对象转换成数组\n                Array.from(iterable).forEach((item, index) => {\n                    MyPromise.resolve(item).then(data => {\n                        res[index] = data;\n                        num++;\n                        if(num === iterable.length) {\n                            resolve(res)\n                        }\n                    }).catch(err => {\n                        !hasErr && reject(err)\n                        hasErr = true\n                    })\n                })\n            })\n        }",isShow:!1},race:{text:"// race\n        static race(iterable) {\n            return new MyPromise((resolve, reject) => {\n                let hasErr = false;\n                Array.from(iterable).forEach((item, index) => {\n                    MyPromise.resolve(item).then(data => {\n                        !hasErr && resolve(data)\n                        hasErr = true\n                    }).catch(err => {\n                        !hasErr && reject(err)\n                        hasErr = true\n                    })\n                })\n            })\n        }",isShow:!1},any:{text:"// any\n        static any(iterable) {\n            return new MyPromise((resolve, reject) => {\n                const res = [];\n                let num = 0,\n                hasErr = false;\n                Array.from(iterable).forEach((item, index) => {\n                    MyPromise.resolve(item).then(data =>{\n                        !hasErr && resolve(data)\n                        hasErr = true\n                    }, err => {\n                        res[index] = err;\n                        num++;\n                        if(num === iterable.length) {\n                            reject(res)\n                        }\n                    })\n                })\n            })\n        }",isShow:!1}};var B=Object(r["defineComponent"])({name:"Promise",components:{IsHideCode:H},setup(){Object(r["onMounted"])(()=>{$.a.highlightAll()});const e=Object(r["reactive"])(D),n=n=>{e[n].isShow=!1,Object(r["nextTick"])(()=>{$.a.highlightAll()})};return{showCodeFun:n,promiseData:e}},watch:{count(){}}});t("1966");const I=R()(B,[["render",S]]);n["default"]=I},a110:function(e,n){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},a4cc:function(e,n){(function(e){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism)},b31d:function(e,n){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript},bb51:function(e,n,t){"use strict";t.r(n);var r=t("7a23");const a={class:"home"},s=Object(r["createTextVNode"])("Home"),i=Object(r["createTextVNode"])(" | "),o=Object(r["createElementVNode"])("pre",null,"\n    ",-1);function l(e,n,t,l,c,u){const d=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createVNode"])(d,{to:"/"},{default:Object(r["withCtx"])(()=>[s]),_:1}),i,Object(r["createVNode"])(d,{to:"/about"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("About"+Object(r["toDisplayString"])(e.$store.state.app.user),1)]),_:1}),o])}var c=t("5502"),u=Object(r["defineComponent"])({name:"Home",components:{},setup(){const e="Hello World!";console.log(e);const n=Object(r["ref"])(0),t=Object(c["b"])();return t.commit("app/getUser","lisi"),t.dispatch("app/setUser","wanger"),console.log(t.state.app),Object(r["watch"])(n,()=>{console.log(n,111)}),setTimeout(()=>{n.value++},1e3),{}},watch:{count(){}}}),d=(t("247b"),t("6b0d")),m=t.n(d);const p=m()(u,[["render",l]]);n["default"]=p},dc75:function(e,n,t){"use strict";t.r(n);var r=t("7a23");const a={class:"err-box"},s=Object(r["createTextVNode"])(" 该功能暂未开放！");function i(e,n,t,i,o,l){const c=Object(r["resolveComponent"])("Warning"),u=Object(r["resolveComponent"])("el-icon");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("p",null,[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(c)]),_:1}),s])])}var o=t("f6f2"),l=Object(r["defineComponent"])({name:"404",components:{Warning:o["f"]},setup(){return{}},watch:{count(){}}}),c=(t("e714"),t("6b0d")),u=t.n(c);const d=u()(l,[["render",i]]);n["default"]=d},e046:function(e,n,t){},e382:function(e,n,t){"use strict";t.r(n);var r=t("7a23");const a={class:"user"},s=Object(r["createElementVNode"])("iframe",{id:"jspdf",width:"100%",height:"100%",name:"fd-jspdf",src:"./pdf/web/viewer.html?file=zgl15515746803.pdf"},null,-1),i=[s];function o(e,n,t,s,o,l){const c=Object(r["resolveDirective"])("loading");return Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,i)),[[c,e.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}var l=Object(r["defineComponent"])({name:"Home",components:{},setup(){const e=Object(r["ref"])(!1);return e.value=!0,Object(r["onMounted"])(()=>{const n=document.getElementById("jspdf");n.attachEvent?n.attachEvent("onload",(function(){console.log(onload,111111),e.value=!1})):n.onload=function(){console.log(onload,111111),e.value=!1}}),{fullscreenLoading:e}},watch:{count(){}}}),c=(t("e422"),t("6b0d")),u=t.n(c);const d=u()(l,[["render",o]]);n["default"]=d},e422:function(e,n,t){"use strict";t("4660")},e714:function(e,n,t){"use strict";t("ebd1")},ebd1:function(e,n,t){},f781:function(e,n,t){(function(n){var t="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof s?new s(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++t}),e["__id"]},clone:function e(n,t){var r,s;switch(t=t||{},a.util.type(n)){case"Object":if(s=a.util.objId(n),t[s])return t[s];for(var i in r={},t[s]=r,n)n.hasOwnProperty(i)&&(r[i]=e(n[i],t));return r;case"Array":return s=a.util.objId(n),t[s]?t[s]:(r=[],t[s]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){while(e){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){var r="no-"+n;while(e){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){r=r||a.languages;var s=r[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==n)for(var l in t)t.hasOwnProperty(l)&&(i[l]=t[l]);t.hasOwnProperty(o)||(i[o]=s[o])}var c=r[e];return r[e]=i,a.languages.DFS(a.languages,(function(n,t){t===c&&n!=e&&(this[n]=i)})),i},DFS:function e(n,t,r,s){s=s||{};var i=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var l=n[o],c=a.util.type(l);"Object"!==c||s[i(l)]?"Array"!==c||s[i(l)]||(s[i(l)]=!0,e(l,t,o,s)):(s[i(l)]=!0,e(l,t,null,s))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var s,i=0;s=r.elements[i++];)a.highlightElement(s,!0===n,r.callback)},highlightElement:function(n,t,r){var s=a.util.getLanguage(n),i=a.languages[s];a.util.setLanguage(n,s);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,s);var l=n.textContent,c={element:n,language:s,grammar:i,code:l};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),r&&r.call(c.element)}if(a.hooks.run("before-sanity-check",c),o=c.element.parentElement,o&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!c.code)return a.hooks.run("complete",c),void(r&&r.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(t&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),s.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new l;return c(a,a.head,e),o(e,a,n,a.head,0),d(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,s=0;r=t[s++];)r(n)}},Token:s};function s(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function i(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var s=a[1].length;a.index+=s,a[0]=a[0].slice(s)}return a}function o(e,n,t,r,l,d){for(var m in t)if(t.hasOwnProperty(m)&&t[m]){var p=t[m];p=Array.isArray(p)?p:[p];for(var g=0;g<p.length;++g){if(d&&d.cause==m+","+g)return;var f=p[g],h=f.inside,b=!!f.lookbehind,v=!!f.greedy,j=f.alias;if(v&&!f.pattern.global){var y=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,y+"g")}for(var w=f.pattern||f,x=r.next,F=l;x!==n.tail;F+=x.value.length,x=x.next){if(d&&F>=d.reach)break;var k=x.value;if(n.length>e.length)return;if(!(k instanceof s)){var P,O=1;if(v){if(P=i(w,F,e,b),!P||P.index>=e.length)break;var E=P.index,A=P.index+P[0].length,C=F;C+=x.value.length;while(E>=C)x=x.next,C+=x.value.length;if(C-=x.value.length,F=C,x.value instanceof s)continue;for(var S=x;S!==n.tail&&(C<A||"string"===typeof S.value);S=S.next)O++,C+=S.value.length;O--,k=e.slice(F,C),P.index-=F}else if(P=i(w,0,k,b),!P)continue;E=P.index;var N=P[0],$=k.slice(0,E),V=k.slice(E+N.length),M=F+k.length;d&&M>d.reach&&(d.reach=M);var L=x.prev;$&&(L=c(n,L,$),F+=$.length),u(n,L,O);var T=new s(m,h?a.tokenize(N,h):N,j,N);if(x=c(n,L,T),V&&c(n,x,V),O>1){var _={cause:m+","+g,reach:M};o(e,n,t,x.prev,F,_),d&&_.reach>d.reach&&(d.reach=_.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function c(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function u(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}function d(e){var n=[],t=e.head.next;while(t!==e.tail)n.push(t.value),t=t.next;return n}if(e.Prism=a,s.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var s={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},i=n.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(s.classes,i):s.classes.push(i)),a.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+o+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,s=t.code,i=t.immediateClose;e.postMessage(a.highlight(s,a.languages[r],r)),i&&e.close()}),!1),a):a;var m=a.util.currentScript();function p(){a.manual||a.highlightAll()}if(m&&(a.filename=m.src,m.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var g=document.readyState;"loading"===g||"interactive"===g&&m&&m.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return a}(t);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */e.exports&&(e.exports=r),"undefined"!==typeof n&&(n.Prism=r)}).call(this,t("c8ba"))}}]);