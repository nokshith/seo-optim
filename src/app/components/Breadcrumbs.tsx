export default function Breadcrumbs() {
  const breadcrumbs = [
    { name: 'Home', href: '/', current: true }
  ];

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.name}>
            <div className="flex items-center">
              {index > 0 && (
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <a
                href={breadcrumb.href}
                className={`ml-4 text-sm font-medium ${
                  breadcrumb.current
                    ? 'text-[#F54E00] cursor-default'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-current={breadcrumb.current ? 'page' : undefined}
              >
                {breadcrumb.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
} 