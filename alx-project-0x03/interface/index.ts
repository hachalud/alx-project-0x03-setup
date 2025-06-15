export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action: () => void;
  buttonSize?: string;
}

export interface PageRouteProps {
  pageRoute: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
