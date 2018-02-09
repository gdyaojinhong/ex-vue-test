/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
 	if (!name) return
 	var value = window.localStorage.getItem(name)
 	if (value !== null) {
 		try {
 			value = JSON.parse(value)
 		} catch (e) {
 			value = value
 		}
 	}
 	return value
}

//获取cookie、
export function getCookie(name) {
 var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
 if (arr = document.cookie.match(reg))
  return (arr[2]);
 else
  return null;
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, expiredays) {
 var exdate = new Date();
 exdate.setDate(exdate.getDate() + expiredays);
 document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
export function delCookie (name) {
 var exp = new Date();
 exp.setTime(exp.getTime() - 1);
 var cval = getCookie(name);
 if (cval != null)
  document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};


/**
 * 需要递归循环children,重新赋值component
 */
// export const generateRoutesFromMenu = (menuData = [], routes = [],componentNew)=>{
//    for(var i = 0;i < menuData.length;i++){
//         const menuobj = menuData[i]
//         const component = menuData[i].component
//         if( component && component !== 'content'){
//             componentNew = require('page/'+menuData[i].component+'.vue')
//         }else{
//             // componentNew = require('layout/'+menuData[i].component+'.vue')
//         }
//         menuobj['component'] = componentNew
//         routes.push(menuobj) 
//         generateRoutesFromMenu(menuobj.children)
//   }
//   return routes
// }

