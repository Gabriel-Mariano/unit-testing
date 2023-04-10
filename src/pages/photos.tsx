import { useEffect, useState } from 'react'
import { Card } from '@src/components/Card'
import { DataPhotos, listPhotos } from '@src/services/photos'
import styles from '@src/styles/Home.module.css'
import { useQuery } from 'react-query';

export default function Photos() {
  // const [data, setData] = useState<DataPhotos[]>([]);
  const { data, isLoading, error } = useQuery<DataPhotos[], Error>('myData', listPhotos)

  // useEffect(()=> {
  //   recoveryPhotos()
  // },[]);

  // const recoveryPhotos = async () => {
  //   const res = await listPhotos();

  //   const fillTopTen = res.slice(0, 10);

  //   setData(fillTopTen);
  // }

  return (
    <>
      <main className={styles.main}>
        {data?.map((item)=> {
            return (
                <Card 
                    key={item.id}
                    id={String(item.id)}
                    title={item.title} 
                    albumId={item.albumId} 
                    thumbnailUrl={item.thumbnailUrl}
                />
            )
            })
        }
      </main>
    </>
  )
}
