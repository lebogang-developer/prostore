import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Covert to decimal place
  const stringValue = value.toFixed(2);
  // Get int/float values/numbers
  const [intNum, floatNum] = stringValue.split('.');

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-sm align-super'>$</span>
      {intNum}
      <span className='text-sm align-super'>.{floatNum}</span>
    </p>
  );
};

export default ProductPrice;
