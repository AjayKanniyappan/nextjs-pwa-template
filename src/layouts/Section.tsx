/**
 * A React component that renders a section element.
 * @param  - `className` - the class name of the section
 * @returns A React component
 */
function Section({ className, children }: cat.SectionProps): JSX.Element {
  return <section className={className}>{children}</section>;
}

export default Section;
