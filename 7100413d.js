import{r as e,p as t}from"./29d0944c.js";import{S as r}from"./8b07d6b3.js";class s extends r{constructor(){super(),this.accentColor="black",this.name="john doe"}static get tag(){return"tc-header"}static get properties(){return{...super.properties,name:{type:String}}}static get styles(){return[...super.styles,e`:host{font-family:'Bebas Neue',sans-serif}div{border:3px #000;display:flex;flex-direction:column}p{text-transform:uppercase;text-align:left;font-weight:bolder;color:var(--simple-colors-default-theme-accent-8);margin:9px;font-size:14px}`]}render(){return t` <div> <p>${this.name}</p> </div> `}}customElements.define(s.tag,s);export{s as Header};