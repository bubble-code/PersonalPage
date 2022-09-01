import { useEffect } from 'react';

function PageTitle({ pageTitle }) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default PageTitle;
