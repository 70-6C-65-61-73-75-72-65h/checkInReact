// import { interfaces } from "inversify";
// import { Component, JSXElementConstructor } from "react";
// import Context from "./Context";
// import { DiProvider } from "./DIProvider";

// interface Props {}

// export function withProvider<P, C>(
//    component: JSXElementConstructor<P> & C,
//    container: interfaces.Container
// ) {

//    class ProviderWrap extends Component<Props> {
//        public static contextType = Context;
//        public static displayName = `diProvider(${getDisplayName(component)})`;

//        public constructor(props: Props, context?: interfaces.Container) {
//            super(props);

//            this.context = context;

//            if (this.context) {
//                container.parent = this.context;
//            }
//        }

//        public render() {
//            const WrappedComponent = component;

//            return (
//                <DiProvider container={container}>
//                    <WrappedComponent {...(this.props as any)} />
//                </DiProvider>
//            );
//        }
//    }

//    return ProviderWrap as Component<Props>;
// }
export {};
