/* eslint-disable react/no-array-index-key */
import { Widget, WidgetHeader, WidgetContent } from '@components/atoms';
import { FC, ReactNode } from 'react';

interface FullWidgetProps {
  title?: string
  contents: ReactNode[]
}

export const FullWidget: FC<FullWidgetProps> = ({ title, contents }) => (
  <Widget>
    {title && (
    <WidgetHeader>
      <h1>{title}</h1>
    </WidgetHeader>
    )}
    {contents.map((content, index) => (
      <WidgetContent key={index}>
        {content}
      </WidgetContent>
    ))}
  </Widget>
);
