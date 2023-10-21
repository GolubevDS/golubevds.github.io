import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render with correct label', () => {
    const { getByText } = render(<Button label="Click me!" />);

    expect(getByText('Click me!')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button label="Click me!" onClick={mockOnClick} />,
    );

    fireEvent.click(getByText('Click me!'));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
