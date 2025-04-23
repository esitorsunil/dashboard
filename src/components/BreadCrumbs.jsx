import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (!location.pathname.startsWith('/dashboard')) return null;

  return (
    <Breadcrumb className="mb-3">
      {pathnames.map((name, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const formattedName = name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Breadcrumb.Item active key={name}>
            {formattedName}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: routeTo }} key={name}>
            {formattedName}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
