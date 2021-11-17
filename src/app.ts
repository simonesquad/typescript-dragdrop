/// <reference path="models/d-d-interfaces.ts" />
/// <reference path="models/project-model.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind-decorator.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {

// rendering the form through this line
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
}