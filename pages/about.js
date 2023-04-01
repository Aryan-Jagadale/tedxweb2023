import cn from 'classnames';
import styles from '@/styles/about.module.scss';

export default function About() {
  return (
    <div className={cn(styles.horizontalScrollWrapper, styles.squares, 'text-white')}>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
    </div>
  );
};
