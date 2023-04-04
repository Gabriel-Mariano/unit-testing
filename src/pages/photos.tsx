import { useEffect, useState } from 'react'
import { Card } from '@src/components/Card'
import { DataPhotos, listPhotos } from '@src/services/photos'
import styles from '@src/styles/Home.module.css'

export default function Photos() {
  const [data, setData] = useState<DataPhotos[]>([]);

  useEffect(()=> {
    recoveryPhotos()
  },[]);

  const recoveryPhotos = async () => {
    const res = await listPhotos();

    const fillTopTen = res.slice(0, 10);

    setData(fillTopTen);
  }

  return (
    <>
      <main className={styles.main}>
        {data.map((item)=> {
            return (
                <Card 
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
