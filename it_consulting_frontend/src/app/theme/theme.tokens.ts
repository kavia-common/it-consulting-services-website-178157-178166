//
// Ocean Professional Theme Tokens
//
// PUBLIC_INTERFACE
export const THEME = {
  // Core palette
  primary: '#2563EB',
  secondary: '#F59E0B',
  success: '#F59E0B',
  error: '#EF4444',

  // Backgrounds and surfaces
  background: '#f9fafb',
  surface: '#ffffff',

  // Text colors
  text: '#111827',
  textMuted: '#4b5563',
  textSubtle: '#6b7280',

  // Border and shadows
  border: '#e5e7eb',
  shadowColor: '0,0,0', // RGB for reusability in rgba()

  // Gradients
  gradientFrom: 'rgba(37, 99, 235, 0.10)', // blue-500/10
  gradientTo: '#f9fafb',
} as const;

// PUBLIC_INTERFACE
export type Theme = typeof THEME;
