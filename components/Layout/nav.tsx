import Link from 'next/link';
import styles from './header.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Navigation = ({list, title,setTitle})=>{
    const [activeManu, setActiveManu] = useState('main');
    const router = useRouter();
    const mouseOver = (id)=>{
        setTitle(id)
    };
    const manuClick = (id)=>{
        setActiveManu(id)
    };
    console.log(router.query, activeManu);
    return <nav className={styles.nav}>
                <ul className={styles.headerManuList}>
                    {list.map((item, index)=>{
                        return <li key={index} onMouseOver={()=>{mouseOver(item.id)}} onClick={()=>{manuClick(item.id)}} className={styles.subManu}>
                                    <Link href={item.subTitle[0].id ? `/${item.id}/${item.subTitle[0].id}`:`/${item.id}`}
                                          className={item.id === activeManu ? styles.active:''}>
                                    {item.title}
                                    </Link>
                                    {title === item.id ? 
                                    <ul>
                                    {item.subTitle.map((i,index) => {
                                        return <li key={index}>
                                            <Link href={i.id === null ? `/${item.id}`:`/${item.id}/${i.id}`} className={styles.subLink}>{i.manu}</Link>
                                            </li>
                                    })}
                                    </ul>:''}
                                </li>
                    })}
                </ul>
            </nav>
};
export default Navigation;