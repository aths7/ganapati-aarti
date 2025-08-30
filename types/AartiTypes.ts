import { Ionicons } from '@expo/vector-icons';

export interface NavigationButtonProps {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  disabled: boolean;
  direction: 'prev' | 'next';
}

export interface SegmentProps {
  active: boolean;
  onPress: () => void;
}



export interface VerseProps {
verse: {
    id: string;
    type: 'verse' | 'chorus' | 'chorus_short';
    lines: string[];
    number?: string;
  };
}

export interface ChorusCardProps extends VerseProps {
  gradient?: string;
}

export interface AartiProps {
  aarti?: {
    title: string;
    subtitle: string;
    verses: any[];
  };
}

export interface AartiIndicatorProps {
  totalAartis: number;
  currentIndex: number;
  onDotPress: (index: number) => void;
}

export interface AartiNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
}

export interface FooterComponentProps extends AartiProps, AartiIndicatorProps, AartiNavigationProps {
    subtitle: string;
}