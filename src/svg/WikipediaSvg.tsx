/**
 * It returns a React component that renders an SVG
 * @param  - `className` - the class name to apply to the SVG element.
 * @returns A JSX element.
 */
function WikipediaSvg({ className }: cat.Svg): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
      <path
        d="M95.869 23.91v2.138c-2.822.501-4.957 1.388-6.407 2.66-2.077 1.888-4.525 4.778-6.132 8.67l-32.685 66.713H48.47L15.657 36.51c-1.528-3.468-3.606-5.588-4.233-6.358a10.28 10.28 0 0 0-3.614-2.804c-1.43-.675-3.36-1.108-5.79-1.3v-2.14h31.928v2.14c-3.683.346-5.44.963-6.537 1.849-1.097.886-1.645 2.023-1.645 3.41 0 1.928.9 4.934 2.703 9.019l24.233 45.959 23.692-45.38c1.842-4.471 3.37-7.574 3.37-9.308 0-1.118-.568-2.187-1.705-3.209-1.136-1.02-2.422-1.744-5.125-2.168a37.477 37.477 0 0 0-1-.173V23.91H95.87z"
        style={{
          fontSize: '178.22499084px',
          fontStyle: 'normal',
          fontWeight: 400,
          fill: '#000',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
          fontFamily: 'Times New Roman',
        }}
        transform="translate(1)"
      />
      <path
        d="M123.98 23.91v2.138c-2.821.501-4.957 1.388-6.407 2.66-2.076 1.888-4.525 4.778-6.132 8.67l-28.685 66.713H80.58L50.268 36.51c-1.528-3.468-3.606-5.588-4.232-6.358a10.28 10.28 0 0 0-3.615-2.804c-1.43-.675-2.726-1.108-5.156-1.3v-2.14H68.56v2.14c-3.683.346-5.44.963-6.536 1.849-1.098.886-1.646 2.023-1.646 3.41 0 1.928.901 4.934 2.704 9.019l21.732 45.959 19.693-45.38c1.841-4.471 3.37-7.574 3.37-9.308 0-1.118-.569-2.187-1.705-3.209-1.137-1.02-3.057-1.744-5.76-2.168a37.474 37.474 0 0 0-1-.173V23.91h24.569z"
        style={{
          fontSize: '178.22499084px',
          fontStyle: 'normal',
          fontWeight: 400,
          fill: '#000',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
          fontFamily: 'Times New Roman',
        }}
        transform="translate(1)"
      />
    </svg>
  );
}
export default WikipediaSvg;
