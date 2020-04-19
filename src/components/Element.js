export class Element {
    constructor(option) {
        this.TagName = option.TagName || "";
        this.Child = option.Child || "";
        this.Id = option.Id || "";
        this.Style = option.Style || "";
    }

    get Render() {
        let HTML = "";
        if(this.TagName) HTML += `<${this.TagName} style="${this.Style}" id="${this.Id}">`;
        
        if(Array.isArray(this.Child)) {
            this.Child.map(child => {
                if(child.Render) HTML += child.Render;
                else HTML += child;
            });
        } else if(this.Child.Render) HTML += this.Child.Render;
        else HTML += this.Child;

        if(this.TagName) HTML += `</${this.TagName}>`;

        return HTML;
    }
}