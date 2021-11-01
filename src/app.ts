class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // rendering a form that belongs to this instance
        const importedNode = document.importNode(this.templateElement.content, true);
        // storing the html element here
        this.element = importedNode.firstElementChild as HTMLFormElement;
        //calling the private attach method so the code below executes
        this.attach();

    }
    // when we instatiate it we should be able to render the form
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
// rendering the form through this line
const hereInput = new ProjectInput();