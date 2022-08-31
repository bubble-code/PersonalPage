import { useEffect } from 'react';

function ChangeTitle({ pageTitle }) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default ChangeTitle;
