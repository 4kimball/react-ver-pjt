import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

function Page({ title, children, ...rest }: Props) {
  return (
    <div {...rest}>
      <title>{title}</title>
      {children}
    </div>
  );
}

export default Page;
