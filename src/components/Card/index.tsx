import Image from "next/image";
import styles from '@src/styles/Card.Component.module.css'

interface CardProps {
    albumId:number,
    id?:number,
    title:string,
    url?:string,
    thumbnailUrl:string
}

export function Card (props:CardProps) {
    const { albumId, title, thumbnailUrl } = props;
    return ( 
        <div className={styles.cardContainer} >
            <Image 
                loader={() => thumbnailUrl} 
                unoptimized 
                src={thumbnailUrl} 
                alt="thumbnailUrl" 
                width={60} 
                height={60} 
                className={styles.image}
            />
            <div className={styles.wrapperContent}>
                <span><strong>Albúm:</strong> {albumId}</span>
                <span><strong>Título:</strong> {title}</span>
            </div>
        </div>
    )
}