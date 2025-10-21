export interface NavLink {
  // PUBLIC_INTERFACE
  /** Title to display in navigation. */
  label: string;
  // PUBLIC_INTERFACE
  /** Router link path (absolute). */
  path: string;
  // PUBLIC_INTERFACE
  /** Optional aria label for accessibility. */
  ariaLabel?: string;
  // PUBLIC_INTERFACE
  /** Whether the link should be highlighted as primary action. */
  prominent?: boolean;
}
