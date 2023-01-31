/* Defining an array of objects. */
const useBottomNavigation: Array<{ id: number; label: string; href: string; icon: JSX.Element }> = [
  {
    id: 1,
    label: 'Home',
    href: '/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Facts',
    href: '/facts',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="25px" height="25px">
        <path d="M12 6a6 6 0 016 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 016-6m2 15v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1h4m6-10h3v2h-3v-2M1 11h3v2H1v-2M13 1v3h-2V1h2M4.92 3.5l2.13 2.14-1.42 1.41L3.5 4.93 4.92 3.5m12.03 2.13l2.12-2.13 1.43 1.43-2.13 2.12-1.42-1.42z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'Breeds',
    href: '/breeds',
    icon: (
      <svg
        fill="currentColor"
        width="25px"
        height="25px"
        viewBox="-1.5 0 19 19"
        xmlns="http://www.w3.org/2000/svg"
        className="cf-icon-svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path d="M4.086 7.9a1.91 1.91 0 0 1-.763 2.52c-.81.285-1.782-.384-2.17-1.492a1.91 1.91 0 0 1 .762-2.521c.81-.285 1.782.384 2.171 1.492zm6.521 7.878a2.683 2.683 0 0 1-1.903-.788.996.996 0 0 0-1.408 0 2.692 2.692 0 0 1-3.807-3.807 6.377 6.377 0 0 1 9.022 0 2.692 2.692 0 0 1-1.904 4.595zM7.73 6.057c.127 1.337-.563 2.496-1.54 2.588-.977.092-1.872-.917-1.998-2.254-.127-1.336.563-2.495 1.54-2.587.977-.093 1.871.916 1.998 2.253zm.54 0c-.127 1.337.563 2.496 1.54 2.588.977.092 1.871-.917 1.998-2.254.127-1.336-.563-2.495-1.54-2.587-.977-.093-1.872.916-1.998 2.253zm3.644 1.842a1.91 1.91 0 0 0 .763 2.522c.81.284 1.782-.385 2.17-1.493a1.91 1.91 0 0 0-.762-2.521c-.81-.285-1.782.384-2.171 1.492z" />
        </g>
      </svg>
    ),
  },
];

export default useBottomNavigation;
