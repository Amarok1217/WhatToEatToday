declare module '*.vue' {
  import { defineComponent, FunctionalComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> | FunctionalComponent;
  export default component;
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
