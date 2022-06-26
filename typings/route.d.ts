export type RouteEntry = {
  name: string;
  url: string;
  component: () => JSX.Element;
}
