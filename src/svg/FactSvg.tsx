/**
 * It returns a React component that renders an SVG
 * @param  - `className` - the class name to apply to the SVG element.
 * @returns A JSX element.
 */
export default function FactSvg({ className }: cat.Svg): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" className={className}>
      <path d="M12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1h4m6-10h3v2h-3v-2M1 11h3v2H1v-2M13 1v3h-2V1h2M4.92 3.5l2.13 2.14-1.42 1.41L3.5 4.93 4.92 3.5m12.03 2.13 2.12-2.13 1.43 1.43-2.13 2.12-1.42-1.42z" />
    </svg>
  );
}
