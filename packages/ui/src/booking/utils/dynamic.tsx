import { lazy, Suspense, type ComponentType } from "react";

type DynamicOptions = { loading?: ComponentType; ssr?: boolean };

export default function dynamic<P extends object>(
  factory: () => Promise<ComponentType<P> | { default: ComponentType<P> }>,
  options?: DynamicOptions,
) {
  const Lazy = lazy(async () => {
    const mod = await factory();
    const Component = mod && typeof mod === "object" && "default" in mod ? mod.default : (mod as ComponentType<P>);
    return { default: Component };
  });
  const Loading = options?.loading;
  return function DynamicComponent(props: P) {
    return (
      <Suspense fallback={Loading ? <Loading /> : null}>
        <Lazy {...props} />
      </Suspense>
    );
  };
}
