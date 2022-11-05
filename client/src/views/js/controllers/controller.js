var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MFigure } from '../models/MFigure.js';
class Controller {
    constructor() {
        this.listCart = [];
    }
    setFigure() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield MFigure.getData();
            const list = document.getElementById("list");
            let html = '';
            data.map(item => {
                html += `<div class="card m-[10px] ">
            <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="p-8 rounded-t-lg" src="${item.image}" alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">${item.name}</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div class="flex justify-between items-center btn" data-id="${item.id}"  >
                        <span class="text-lg font-bold text-gray-900 dark:text-white">$${item.price}</span>
                        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-base rounded-lg text-sm px-[8px] py-[13px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>`;
                return html;
            });
            list.innerHTML = html;
            this.getObj(data, "body .btn", this.addItemToCart.bind(this));
        });
    }
    setCart() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.listCart) {
                const listCart = document.getElementById("listCart");
                let html = '';
                this.listCart.map(item => {
                    html += `       <div class="flex justify-between items-center mt-6 pt-6">
                <div class="flex items-center">
                  <img
                    src="${item.image}"
                    width="60"
                    class="rounded-full"
                  />
  
                  <div class="flex flex-col ml-3">
                    <span class="md:text-md font-medium">${item.name}</span>
                    <span class="text-xs font-light text-gray-400">#41551</span>
                  </div>
                </div>
  
                <div class="flex justify-center items-center">
                  <div class="pr-8 flex">
                    <span class="font-semibold cursor-pointer remove" data-id="${item.id}">-</span>
                    <input
                      type="text"
                      class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                      value="${item.quantity}"
                    />
                    <span class="font-semibold cursor-pointer add" data-id="${item.id}">+</span>
                  </div>
  
                  <div class="pr-8">
                    <span class="text-xs font-medium" >$${+item.price * +item.quantity}</span>
                  </div>
                  <div>
                  <div class="pr-8 btn-remove cursor-pointer" data-id="${item.id}">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                  </div>
                </div>
              </div>`;
                    return html;
                });
                listCart.innerHTML = html;
                const data = yield MFigure.getData();
                this.getObj(data, "body .btn-remove", this.removeItemToCart.bind(this));
                this.getObj(data, "body .add", this.addItemToCart.bind(this));
                this.getObj(data, "body .remove", this.removeOneItem.bind(this));
            }
        });
    }
    getObj(figure, key, f) {
        var _a;
        const btn = document.querySelectorAll(key);
        for (let i = 0; i < btn.length; i++) {
            (_a = btn[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                let id = btn[i].getAttribute("data-id");
                f(figure === null || figure === void 0 ? void 0 : figure.filter(item => item.id === id)[0]);
            });
        }
    }
    addItemToCart(figure) {
        var _a, _b, _c;
        const isExit = (_a = this.listCart) === null || _a === void 0 ? void 0 : _a.find(item => item.id === figure.id);
        if (!isExit) {
            (_b = this.listCart) === null || _b === void 0 ? void 0 : _b.push(Object.assign(Object.assign({}, figure), { quantity: "1" }));
            this.setCart();
        }
        else {
            (_c = this.listCart) === null || _c === void 0 ? void 0 : _c.map(item => item.id === figure.id ? Object.assign(Object.assign({}, item), { quantity: item.quantity = (+item.quantity + 1).toString() }) : item);
            this.setCart();
        }
    }
    removeItemToCart(figure) {
        this.listCart = this.listCart.filter(item => item.id !== figure.id);
        this.setCart();
    }
    removeOneItem(figure) {
        var _a;
        (_a = this.listCart) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
            var _a;
            if (item.id === figure.id) {
                let qt = +item.quantity - 1;
                if (qt < 1) {
                    return (_a = this.listCart) === null || _a === void 0 ? void 0 : _a.splice(index, 1);
                }
                else {
                    return Object.assign(Object.assign({}, item), { quantity: item.quantity = (+item.quantity - 1).toString() });
                }
            }
            else {
                return item;
            }
        });
        console.log(this.listCart);
        this.setCart();
    }
}
const a = new Controller();
a.setFigure();
a.setCart();
//# sourceMappingURL=controller.js.map