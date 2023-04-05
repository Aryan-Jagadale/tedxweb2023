import cn from 'classnames';
import styles from '@/styles/about.module.scss';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div className="absolute bottom-10 right-10 z-50">
        <Link href="/">
          <div className="bg-[#dd1313] h-12 w-12 md:h-16 md:w-16 rounded-full flex justify-center items-center cursor-pointer">
            <img className="w-6 h-6 md:w-12 md:h-12" src="/rc.svg" alt="chevron-right" />
          </div>
        </Link>
      </div>
      <div className={cn(styles.horizontalScrollWrapper, styles.squares, 'text-white')}>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </div>
    </div>
  );
};
