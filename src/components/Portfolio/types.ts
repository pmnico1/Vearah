export interface Project {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

export interface StatisticsFrame {
  id: string;
  value: string;
  label: string[];
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
  backgroundStyle?: React.CSSProperties;
}

export interface PortfolioState {
  currentProject: number;
  showTitle: boolean;
  titleOpacity: number;
  showMainContent: boolean;
  showTags: boolean;
  isInProjectSection: boolean;
  canScrollToNext: boolean;
}
