/* Function used as a decorator to autobind methods to the parent component object
   prevents duplicates of .bind(this) all over the place */

export const autoBind = () => (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => {
    const originalFn = descriptor.value;

    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalFn.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
};
