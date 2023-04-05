import styles from '@src/styles/Home.module.css'
import { Card } from "@src/components/Card";
import { photoDetails } from '@src/services/photos';

export default function DetailsPhoto ({ responseData }:any) {
    
    return (
        <main className={styles.main}>
            <Card 
                title={responseData.title} 
                albumId={responseData.albumId} 
                thumbnailUrl={responseData.thumbnailUrl}
                id={responseData.id}
            />
        </main>
    )
}

export async function getServerSideProps(context:{ params : { id:string } }) {
    const { params } = context;
    const { id } = params;

    const responseData = await photoDetails(id)

    return {
        props:{
            responseData
        }
    }
}