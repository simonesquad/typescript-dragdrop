namespace App {
    //adding the autobind decorator so we don't need to use the bind keyword
export function autobind(
    _: any, 
    _2: string, 
    descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
    }
}