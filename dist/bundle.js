(()=>{"use strict";class e{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function t(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<e.max),t}function n(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}var r;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(r||(r={}));class s{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.people=r,this.status=s}}class i extends class{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new i),this.instance}addProject(e,t,n){const i=new s(Math.random().toString(),e,t,n,r.Active);this.projects.push(i);for(const e of this.listeners)e(this.projects.slice())}moveProject(e,t){const n=this.projects.find((t=>t.id===e));n&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const l=i.getInstance();class o extends e{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.peopleInputElement=this.element.querySelector("#people"),this.templateElement=document.getElementById("project-input"),this.configure()}configure(){this.element.addEventListener("submit",this.submitHandler)}renderContent(){}gatherUserInput(){const e=this.titleInputElement.value,n=this.descriptionInputElement.value,r=this.peopleInputElement.value,s={value:n,required:!0,minLength:5},i={value:+r,required:!0,min:1,max:5};return t({value:e,required:!0})&&t(s)&&t(i)?[e,n,+r]:void alert("Invalid input, please try again!")}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}submitHandler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,n,r]=t;l.addProject(e,n,r),this.clearInputs()}}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([n],o.prototype,"submitHandler",null);class a extends e{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get persons(){return 1===this.project.people?"1 person":`${this.project.people} persons`}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){console.log("DragEnd")}configure(){this.element.addEventListener("dragstart",this.dragStartHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned",this.element.querySelector("p").textContent=this.project.description}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([n],a.prototype,"dragStartHandler",null);var c=function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l};class d extends e{constructor(e){super("project-list","app",!1,`${e}-projects`),this.type=e,this.assignedProjects=[],this.element.id=`${this.type}-projects`,this.configure(),this.renderContent()}dragOverHandler(e){e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}dropHandler(e){const t=e.dataTransfer.getData("text/plain");l.moveProject(t,"active"===this.type?r.Active:r.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.add("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),this.element.addEventListener("drop",this.dropHandler),l.addListener((e=>{const t=e.filter((e=>"active"===this.type?e.status===r.Active:e.status===r.Finished));this.assignedProjects=t,this.renderProjects()}))}renderContent(){const e=`${this.type}-projects-list`;this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"}renderProjects(){document.getElementById(`${this.type}-projects-list`).innerHTML="";for(const e of this.assignedProjects)new a(this.element.querySelector("ul").id,e)}}c([n],d.prototype,"dragOverHandler",null),c([n],d.prototype,"dropHandler",null),c([n],d.prototype,"dragLeaveHandler",null),new o,new d("active"),new d("finished")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVErRCxpQkFBaUIsV0FBWXZFLEtBQUtzRyxpQkFDL0N0RyxLQUFLUSxRQUFRK0QsaUJBQWlCLFlBQWF2RSxLQUFLOEcsa0JBQ2hEOUcsS0FBS1EsUUFBUStELGlCQUFpQixPQUFRdkUsS0FBSzBHLGFBRTNDM0MsRUFBYXJCLGFBQWFJLElBQ3RCLE1BQU1pRSxFQUFtQmpFLEVBQVNrRSxRQUFPbkQsR0FDdkIsV0FBZDdELEtBQUtvRyxLQUNFdkMsRUFBSXRCLFNBQVdMLEVBQWNvQixPQUU3Qk8sRUFBSXRCLFNBQVdMLEVBQWMyRSxXQUV4QzdHLEtBQUtxRyxpQkFBbUJVLEVBQ3hCL0csS0FBS2lILG9CQUlieEMsZ0JBQ0ksTUFBTXlDLEVBQVMsR0FBR2xILEtBQUtvRyxxQkFDdkJwRyxLQUFLUSxRQUFRMkQsY0FBYyxNQUFPekQsR0FBS3dHLEVBQ3ZDbEgsS0FBS1EsUUFBUTJELGNBQWMsTUFBTytCLFlBQWNsRyxLQUFLb0csS0FBS2UsY0FBZ0IsWUFHdEVGLGlCQUNXL0csU0FBU0MsZUFBZSxHQUFHSCxLQUFLb0csc0JBQ3hDZ0IsVUFBWSxHQUNuQixJQUFLLE1BQU1DLEtBQVdySCxLQUFLcUcsaUJBQzNCLElBQUliLEVBQVl4RixLQUFLUSxRQUFRMkQsY0FBYyxNQUFPekQsR0FBSTJHLElBL0MxRCxHQURDM0YsRyxvQ0FVRCxHQURDQSxHLGdDQU9ELEdBRENBLEcscUNDL0JMLElBQUl1QyxFQUNKLElBQUlrQyxFQUFZLFVBQ2hCLElBQUlBLEVBQVksYSIsInNvdXJjZXMiOlsid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2RlY29yYXRvcnMvYXV0b2JpbmQtZGVjb3JhdG9yLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9tb2RlbHMvcHJvamVjdC1tb2RlbC50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvc3RhdGUvcHJvamVjdC1zdGF0ZS50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWlucHV0LnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtaXRlbS50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50LCBVIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IHtcbiAgICB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgaG9zdEVsZW1lbnQ6IFQ7XG4gICAgZWxlbWVudDogVTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICB0ZW1wbGF0ZUlkOiBzdHJpbmcsIFxuICAgICAgICBob3N0RWxlbWVudElkOiBzdHJpbmcsXG4gICAgICAgIGluc2VydEF0U3RhcnQ6IGJvb2xlYW4sIFxuICAgICAgICBuZXdFbGVtZW50SWQ/OiBzdHJpbmdcbikge1xuICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIHRlbXBsYXRlSWRcbiAgICApISBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0RWxlbWVudElkKSEgYXMgVDtcblxuICAgIGNvbnN0IGltcG9ydGVkTm9kZSA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQsIFxuICAgICAgICB0cnVlXG4gICAgKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBpbXBvcnRlZE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgVTtcbiAgICBpZiAobmV3RWxlbWVudElkKSB7XG4gICAgdGhpcy5lbGVtZW50LmlkID0gbmV3RWxlbWVudElkO1xuICAgICAgICB9XG4gICAgdGhpcy5hdHRhY2goaW5zZXJ0QXRTdGFydCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdHRhY2goaW5zZXJ0QXRCZWdpbm5pbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgICAgICAgICBpbnNlcnRBdEJlZ2lubmluZyA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLCB0aGlzLmVsZW1lbnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBjb25maWd1cmUoKTogdm9pZDtcbiAgICBhYnN0cmFjdCByZW5kZXJDb250ZW50KCk6IHZvaWQ7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRhYmxlIHtcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICBtaW5MZW5ndGg/OiBudW1iZXI7XG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBtYXg/OiBudW1iZXI7XG59XG4vLyBpZiB0aGUgcmVxdWlyZWQgY2hlY2sgaXMgZmxhZ2dlZCwgd2UgY2hlY2sgaXMgdGhlIHZhbHVlIGlzIGVtcHR5IGV0Yy5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWxpZGF0YWJsZUlucHV0OiBWYWxpZGF0YWJsZSkge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBpZiAodmFsaWRhdGFibGVJbnB1dC5yZXF1aXJlZCkge1xuICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgICB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aCAhPSBudWxsICYmIFxuICAgICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgKSB7XG4gICAgICAgIGlzVmFsaWQgPSBcbiAgICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA+IHZhbGlkYXRhYmxlSW5wdXQubWluTGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAgIHZhbGlkYXRhYmxlSW5wdXQubWF4TGVuZ3RoICE9IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICAgIGlzVmFsaWQgPSBcbiAgICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA8IHZhbGlkYXRhYmxlSW5wdXQubWF4TGVuZ3RoO1xuICAgIH1cbiAgICAvL2NoZWNraW5nIHRoZSBmaW5hbCBtaW4vbWF4IHZhcmlhYmxlcyBvZiB0aGUgaW50ZXJmYWNlXG4gICAgaWYgKHZhbGlkYXRhYmxlSW5wdXQubWluICE9IG51bGwgJiYgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPiB2YWxpZGF0YWJsZUlucHV0Lm1pbjtcbiAgICB9XG4gICAgaWYgKHZhbGlkYXRhYmxlSW5wdXQubWF4ICE9IG51bGwgJiYgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPCB2YWxpZGF0YWJsZUlucHV0Lm1heDtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXV0b2JpbmQoXG4gICAgXzogYW55LCBcbiAgICBfMjogc3RyaW5nLCBcbiAgICBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3JcbiAgICApIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICBjb25zdCBhZGpEZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm91bmRGbiA9IG9yaWdpbmFsTWV0aG9kLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhZGpEZXNjcmlwdG9yO1xuICAgIH1cbiIsImV4cG9ydCBlbnVtIFByb2plY3RTdGF0dXMgeyBcbiAgICAgICAgQWN0aXZlLCBcbiAgICAgICAgRmluaXNoZWRcbiAgICB9XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZywgXG4gICAgICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZywgXG4gICAgICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZywgXG4gICAgICAgICAgICBwdWJsaWMgcGVvcGxlOiBudW1iZXIsIFxuICAgICAgICAgICAgcHVibGljIHN0YXR1czogUHJvamVjdFN0YXR1c1xuICAgICAgICApIHt9XG4gICAgfSIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdC1tb2RlbCc7XG5cbnR5cGUgTGlzdGVuZXI8VD4gPSAoaXRlbXM6IFByb2plY3RbXSkgPT4gdm9pZDtcblxuY2xhc3MgU3RhdGU8VD4ge1xuICAgIHByb3RlY3RlZCBsaXN0ZW5lcnM6IExpc3RlbmVyPFQ+W10gPSBbXTtcblxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyRm46IExpc3RlbmVyPFQ+KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXJGbik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdFN0YXRlIGV4dGVuZHMgU3RhdGU8UHJvamVjdD4ge1xuICAgIFxuICAgIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9qZWN0U3RhdGU7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbi8vIGFkZGluZyBhIHN0YXRpYyBtZXRob2QgdG8gY2hlY2sgaWYgdGhlIGluc3RhbmNlIGV4aXN0cyBhbmQgaWYgaXQgZG9lcy4uLiByZXR1cm4gaXQgXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQcm9qZWN0U3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuICAgIFxuICAgIGFkZFByb2plY3QodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbnVtT2ZQZW9wbGU6IG51bWJlcikge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbnVtT2ZQZW9wbGUsXG4gICAgICAgICAgICBQcm9qZWN0U3RhdHVzLkFjdGl2ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbGlzdGVuZXJGbih0aGlzLnByb2plY3RzLnNsaWNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuLy8gdXBkYXRlcyB0aGUgb2JqZWN0IGluIHRoZSBhcnJheVxuICAgIG1vdmVQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nLCBuZXdTdGF0dXM6IFByb2plY3RTdGF0dXMpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZChwcmogPT4gcHJqLmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5zdGF0dXMgPSBuZXdTdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbGlzdGVuZXJGbih0aGlzLnByb2plY3RzLnNsaWNlKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdFN0YXRlID0gUHJvamVjdFN0YXRlLmdldEluc3RhbmNlKCk7IiwiaW1wb3J0IENtcCBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFZhbGlkYXRpb24gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJ1xuaW1wb3J0IHsgYXV0b2JpbmQgYXMgQXV0b2JpbmR9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3Byb2plY3Qtc3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdElucHV0IGV4dGVuZHMgQ21wPEhUTUxEaXZFbGVtZW50LCBIVE1MRm9ybUVsZW1lbnQ+IHtcbiAgICB0aXRsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgICBkZXNjcmlwdGlvbklucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwZW9wbGVJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3Byb2plY3QtaW5wdXQnLCAnYXBwJywgdHJ1ZSwgJ3VzZXItaW5wdXQnKTtcbiAgICAgICAgLy8gaGVyZSBwb3B1bGF0aW5nIHRoZSBlbGVtZW50cyBsaXN0ZWQgYWJvdmVcbiAgICAgICAgdGhpcy50aXRsZUlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZW9wbGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWlucHV0JykhIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbmZpZ3VyZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlckNvbnRlbnQoKSB7fVxuXG4gICAgcHJpdmF0ZSBnYXRoZXJVc2VySW5wdXQoKTogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdIHwgdm9pZCB7XG4gICAgICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcblxuICAgICAgICBjb25zdCB0aXRsZVZhbGlkYXRhYmxlOiBWYWxpZGF0aW9uLlZhbGlkYXRhYmxlID0ge1xuICAgICAgICAgICAgdmFsdWU6IGVudGVyZWRUaXRsZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25WYWxpZGF0YWJsZTogVmFsaWRhdGlvbi5WYWxpZGF0YWJsZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBlbnRlcmVkRGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogNVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBlb3BsZVZhbGlkYXRhYmxlOiBWYWxpZGF0aW9uLlZhbGlkYXRhYmxlID0ge1xuICAgICAgICAgICAgdmFsdWU6ICtlbnRlcmVkUGVvcGxlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfTtcbi8vIGlmIGFsbCB0aGVzZSBjb25kaXRpb25zIGFyZSBzYXRpc2ZpZWQsIHRoZW4gY29udGludWVcbi8vIHJldmlzZWQgdG8gaGF2ZSBhIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCBpcyByZXN1c2FibGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIVZhbGlkYXRpb24udmFsaWRhdGUodGl0bGVWYWxpZGF0YWJsZSkgfHxcbiAgICAgICAgICAgICFWYWxpZGF0aW9uLnZhbGlkYXRlKGRlc2NyaXB0aW9uVmFsaWRhdGFibGUpIHx8XG4gICAgICAgICAgICAhVmFsaWRhdGlvbi52YWxpZGF0ZShwZW9wbGVWYWxpZGF0YWJsZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2FpbiEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbZW50ZXJlZFRpdGxlLCBlbnRlcmVkRGVzY3JpcHRpb24sICtlbnRlcmVkUGVvcGxlXTtcbiAgICAgICAgfVxuICAgIH1cbi8vIGVtcHR5IGFsbCBpbnB1dHMgYWZ0ZXIgc3VibWlzc2lvblxuICAgIHByaXZhdGUgY2xlYXJJbnB1dHMoKSB7XG4gICAgICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbklucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIEBBdXRvYmluZFxuICAgIHByaXZhdGUgc3VibWl0SGFuZGxlcihldmVudDogRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5nYXRoZXJVc2VySW5wdXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlcklucHV0KSkge1xuICAgICAgICAgICAgY29uc3QgW3RpdGxlLCBkZXNjLCBwZW9wbGVdID0gdXNlcklucHV0O1xuICAgICAgICAgICAgcHJvamVjdFN0YXRlLmFkZFByb2plY3QodGl0bGUsIGRlc2MsIHBlb3BsZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuLi9tb2RlbHMvZC1kLWludGVyZmFjZXMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0LW1vZGVsJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQtZGVjb3JhdG9yJztcblxuICAgIC8vUHJvamVjdCBJdGVtIENsYXNzXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8SFRNTFVMaXN0RWxlbWVudCwgSFRNTExJRWxlbWVudD5cbmltcGxlbWVudHMgRHJhZ2dhYmxlIHtcbnByaXZhdGUgcHJvamVjdDogUHJvamVjdDtcblxuZ2V0IHBlcnNvbnMoKSB7XG4gICAgaWYgKHRoaXMucHJvamVjdC5wZW9wbGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICcxIHBlcnNvbic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvamVjdC5wZW9wbGV9IHBlcnNvbnNgO1xuICAgIH1cbn1cblxuY29uc3RydWN0b3IoaG9zdElkOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3QpIHtcbiAgICBzdXBlcignc2luZ2xlLXByb2plY3QnLCBob3N0SWQsIGZhbHNlLCBwcm9qZWN0LmlkKTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbn1cblxuQGF1dG9iaW5kXG5kcmFnU3RhcnRIYW5kbGVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLnByb2plY3QuaWQpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2ZlciEuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbn1cblxuZHJhZ0VuZEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdEcmFnRW5kJyk7XG59XG5cbmNvbmZpZ3VyZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5kcmFnU3RhcnRIYW5kbGVyKTtcbn1cblxuXG4vL3NldHRpbmcgaXRzIG93biBjb250ZW50IGhlcmVcbnJlbmRlckNvbnRlbnQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJykhLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0LnRpdGxlO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpIS50ZXh0Q29udGVudCA9IHRoaXMucGVyc29ucyArICcgYXNzaWduZWQnO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwJykhLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0LmRlc2NyaXB0aW9uO1xufVxufSIsImltcG9ydCB7IERyYWdUYXJnZXQgfSBmcm9tICcuLi9tb2RlbHMvZC1kLWludGVyZmFjZXMnO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0LW1vZGVsJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IHByb2plY3RTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3Byb2plY3Qtc3RhdGUnO1xuaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tICcuL3Byb2plY3QtaXRlbSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdCBleHRlbmRzIENvbXBvbmVudDxIVE1MRGl2RWxlbWVudCwgSFRNTEVsZW1lbnQ+IFxuICAgIGltcGxlbWVudHMgRHJhZ1RhcmdldCB7XG4gICAgYXNzaWduZWRQcm9qZWN0czogUHJvamVjdFtdO1xuICAgIC8vcmVuZGVyaW5nIHBhcnQgb2YgdGhlIGh0bWwgdGVtcGxhdGUgYnkgYWNjZXNzaW5nIGFsbCBvZiB0aGUgY29yZSBwaWVjZXMgaGVyZVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogJ2FjdGl2ZScgfCAnZmluaXNoZWQnKSB7XG4gICAgICAgIHN1cGVyKCdwcm9qZWN0LWxpc3QnLCAnYXBwJywgZmFsc2UsIGAke3R5cGV9LXByb2plY3RzYCk7XG4gICAgICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBgJHt0aGlzLnR5cGV9LXByb2plY3RzYDtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBAYXV0b2JpbmRcbiAgICBkcmFnT3ZlckhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGxpc3RFbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpITtcbiAgICAgICAgbGlzdEVsLmNsYXNzTGlzdC5hZGQoJ2Ryb3BwYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuLy8gaGVyZSB3ZSB0cmFuc2ZlciB0aGUgaWRcbiAgICBAYXV0b2JpbmRcbiAgICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGNvbnN0IHByaklkID0gZXZlbnQuZGF0YVRyYW5zZmVyIS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICAgIHByb2plY3RTdGF0ZS5tb3ZlUHJvamVjdChwcmpJZCwgdGhpcy50eXBlID09PSAnYWN0aXZlJyA/IFByb2plY3RTdGF0dXMuQWN0aXZlIDogUHJvamVjdFN0YXR1cy5GaW5pc2hlZCk7XG4gICAgfVxuXG4gICAgQGF1dG9iaW5kXG4gICAgZHJhZ0xlYXZlSGFuZGxlcihfOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhO1xuICAgICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcEhhbmRsZXIpO1xuXG4gICAgICAgIHByb2plY3RTdGF0ZS5hZGRMaXN0ZW5lcigocHJvamVjdHM6IFByb2plY3RbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVsZXZhbnRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihwcmogPT4geyBcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByai5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuQWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IHJlbGV2YW50UHJvamVjdHM7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJZCA9IGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpIS5pZCA9IGxpc3RJZDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJykhLnRleHRDb250ZW50ID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKCkgKyAnIFBST0pFQ1RTJztcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBsaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgKSEgYXMgSFRNTFVMaXN0RWxlbWVudDtcbiAgICAgICAgbGlzdEVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IHBySkl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XG4gICAgICAgIG5ldyBQcm9qZWN0SXRlbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSEuaWQsIHBySkl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gcmVuZGVyaW5nIHRoZSBmb3JtIHRocm91Z2ggdGhpcyBsaW5lXG5pbXBvcnQgeyBQcm9qZWN0SW5wdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dCc7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0LWxpc3QnO1xuXG5uZXcgUHJvamVjdElucHV0KCk7XG5uZXcgUHJvamVjdExpc3QoJ2FjdGl2ZScpO1xubmV3IFByb2plY3RMaXN0KCdmaW5pc2hlZCcpO1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGVJZCIsImhvc3RFbGVtZW50SWQiLCJpbnNlcnRBdFN0YXJ0IiwibmV3RWxlbWVudElkIiwidGhpcyIsInRlbXBsYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob3N0RWxlbWVudCIsImltcG9ydGVkTm9kZSIsImltcG9ydE5vZGUiLCJjb250ZW50IiwiZWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwiaWQiLCJhdHRhY2giLCJpbnNlcnRBdEJlZ2lubmluZyIsImluc2VydEFkamFjZW50RWxlbWVudCIsInZhbGlkYXRlIiwidmFsaWRhdGFibGVJbnB1dCIsImlzVmFsaWQiLCJyZXF1aXJlZCIsInZhbHVlIiwidG9TdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluIiwibWF4IiwiYXV0b2JpbmQiLCJfIiwiXzIiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJjb25maWd1cmFibGUiLCJnZXQiLCJiaW5kIiwiUHJvamVjdFN0YXR1cyIsIlByb2plY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGVvcGxlIiwic3RhdHVzIiwiUHJvamVjdFN0YXRlIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lckZuIiwicHVzaCIsInN1cGVyIiwicHJvamVjdHMiLCJzdGF0aWMiLCJpbnN0YW5jZSIsImFkZFByb2plY3QiLCJudW1PZlBlb3BsZSIsIm5ld1Byb2plY3QiLCJNYXRoIiwicmFuZG9tIiwiQWN0aXZlIiwic2xpY2UiLCJtb3ZlUHJvamVjdCIsInByb2plY3RJZCIsIm5ld1N0YXR1cyIsInByb2plY3QiLCJmaW5kIiwicHJqIiwidXBkYXRlTGlzdGVuZXJzIiwicHJvamVjdFN0YXRlIiwiZ2V0SW5zdGFuY2UiLCJQcm9qZWN0SW5wdXQiLCJ0aXRsZUlucHV0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbklucHV0RWxlbWVudCIsInBlb3BsZUlucHV0RWxlbWVudCIsImNvbmZpZ3VyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRIYW5kbGVyIiwicmVuZGVyQ29udGVudCIsImdhdGhlclVzZXJJbnB1dCIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRQZW9wbGUiLCJkZXNjcmlwdGlvblZhbGlkYXRhYmxlIiwicGVvcGxlVmFsaWRhdGFibGUiLCJhbGVydCIsImNsZWFySW5wdXRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsImRlc2MiLCJQcm9qZWN0SXRlbSIsImhvc3RJZCIsInBlcnNvbnMiLCJkcmFnU3RhcnRIYW5kbGVyIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcmFnRW5kSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Q29udGVudCIsIlByb2plY3RMaXN0IiwidHlwZSIsImFzc2lnbmVkUHJvamVjdHMiLCJkcmFnT3ZlckhhbmRsZXIiLCJ0eXBlcyIsImNsYXNzTGlzdCIsImFkZCIsImRyb3BIYW5kbGVyIiwicHJqSWQiLCJnZXREYXRhIiwiRmluaXNoZWQiLCJkcmFnTGVhdmVIYW5kbGVyIiwicmVsZXZhbnRQcm9qZWN0cyIsImZpbHRlciIsInJlbmRlclByb2plY3RzIiwibGlzdElkIiwidG9VcHBlckNhc2UiLCJpbm5lckhUTUwiLCJwckpJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==