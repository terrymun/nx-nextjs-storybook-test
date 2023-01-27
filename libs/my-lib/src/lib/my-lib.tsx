import Image from 'next/image';
import styles from './my-lib.module.scss';

/* eslint-disable-next-line */
export interface MyLibProps {}

export function MyLib(props: MyLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib!</h1>
      <Image src="https://via.placeholder.com/400x350" width={400} height={350} alt="My image" />
    </div>
  );
}

export default MyLib;
